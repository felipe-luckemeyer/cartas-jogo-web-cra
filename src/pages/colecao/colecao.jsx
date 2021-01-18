import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Slide } from 'pure-react-carousel';
import { Card, ButtonClose, Carrossel } from '../../components';
import * as s from './styled-colecao';
import { PegaCartas } from '../../services';
import { paginate } from '../../utils';

// const cartas = [
//   {
//     possui: true,
//     nome: "Smithao muito brabo",
//     mana: 5,
//     classe: "fogo",
//     vida: 7,
//     ataque: 5,
//     image: Images.smith,
//   },
//   {
//     possui: false,
//     nome: "Smithao muito brabo",
//     mana: 5,
//     classe: "fogo",
//     vida: 7,
//     ataque: 5,
//     image: Images.smith,
//   }
// ];

const Colecao = () => {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);
  const animations = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x: 0, scale: 0.95 },
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
        setLoading(false);
      })
      .catch((e) => {
        console.log('e', e);
      });
  }, []);

  return (
    <s.Container>
      <s.Content initial="hidden" animate="visible" variants={animations}>
        <ButtonClose
          path={'/'}
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
        {loading ? (
          <s.PanelCartas>
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <Skeleton
                  key={`loading-card-${item}`}
                  animation="wave"
                  variant="rect"
                  width={125}
                  height={180}
                />
              );
            })}
          </s.PanelCartas>
        ) : (
          //tratar quando nao possui cartas
          <Carrossel paginas={cartas.length}>
            {cartas.map((pagina, i) => {
              return (
                <Slide key={`colecao-pagina-${i}`}>
                  <s.PanelCartas>
                    {pagina.map((carta, j) => {
                      return <Card carta={carta} key={`colecao-carta-${j}`} />;
                    })}
                  </s.PanelCartas>
                </Slide>
              );
            })}
          </Carrossel>
        )}
      </s.Content>
    </s.Container>
  );
};

export default Colecao;
