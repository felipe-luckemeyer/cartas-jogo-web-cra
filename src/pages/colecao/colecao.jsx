import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Slide } from 'pure-react-carousel';
import * as s from './styled-colecao';
import { Card, ButtonClose, Carrossel, SnackAlert } from '../../components';
import { PegaCartas } from '../../services';
import { paginate } from '../../utils';
// import { Images, Items } from '../../assets';

//================ moack ================
// const moack = [
//   {
//     possui: true,
//     nome: 'Gigante de Lava',
//     mana: 5,
//     classe: 'fogo',
//     vida: 7,
//     ataque: 5,
//     image: Images.giganteLava,
//   },
//   {
//     possui: true,
//     nome: 'Smithao',
//     mana: 5,
//     classe: 'fogo',
//     vida: 7,
//     ataque: 5,
//     image: Images.smith,
//   },
// ];
//========================================

const Colecao = () => {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openError, setOpenError] = useState(false);

  const animations = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    PegaCartas()
      .then((resp) => {
        //================adaptação tecnica================
        let cartasTemp = resp.data.cartas.map((carta) => {
          return { ...carta, possui: true };
        });
        //===================================================
        setCartas(paginate(cartasTemp, 6));
      })
      .catch((e) => {
        setOpenError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderContent = () => {
    if (loading)
      return (
        <s.PanelCartas>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Skeleton
                key={`colecao-loading-${item}`}
                animation="wave"
                variant="rect"
                width={125}
                height={180}
              />
            );
          })}
        </s.PanelCartas>
      );

    if (cartas.length === 0) return <label>Você não possui cartas...</label>;

    return (
      <Carrossel paginas={cartas.length}>
        {cartas.map((pagina, i) => {
          return (
            <Slide key={`colecao-pagina-${i}`} className="slide">
              <s.PanelCartas>
                {pagina.map((carta, j) => {
                  return <Card carta={carta} key={`colecao-carta-${j}`} />;
                })}
              </s.PanelCartas>
            </Slide>
          );
        })}
      </Carrossel>
    );
  };

  return (
    <s.Container>
      <SnackAlert type={'error'} open={openError} setOpen={setOpenError}>
        Erro ao pegar suas cartas...
      </SnackAlert>
      <s.Content initial="hidden" animate="visible" variants={animations}>
        <header
          style={{ flex: 1, display: 'flex', justifyContent: 'space-between', padding: '10px' }}
        >
          <s.Filtro />
          <ButtonClose path={'/'} />
        </header>
        <div style={{ flex: 4, display: 'flex', justifyContent: 'center' }}>{renderContent()}</div>
      </s.Content>
    </s.Container>
  );
};

export default Colecao;
