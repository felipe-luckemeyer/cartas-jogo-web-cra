import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Slide } from 'pure-react-carousel';
import * as s from './styled-colecao';
import { Card, ButtonClose, Carrossel, SnackAlert } from '../../components';
import { GetCollection } from '../../services';
import { paginate } from '../../utils';
import { breakpointsSizes } from '../../utils/breakpoints';

//================ moack ================
// import { Images } from '../../assets';
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

const animations = {
  hidden: { opacity: 0, x: -800 },
  visible: { opacity: 1, x: 0 },
};

const Colecao = () => { 
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldOpenError, setShouldOpenError] = useState(false);
  
  useEffect(() => {
    GetCollection()
      .then((resp) => {
        //================adaptação tecnica================
        let collectionTemp = resp.data.cartas.map((carta) => {
          return { ...carta, hasCard: true };
        });
        //===================================================
        let itemsPerPage = isSmall() ? 4 : 6
        setCollection(paginate(collectionTemp, itemsPerPage));
      })
      .catch((e) => {
        setShouldOpenError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  
  const isSmall = () => window.innerWidth < breakpointsSizes.sm
 
  const loadingItems = () => isSmall() ? [1,2,3,4] : [1,2,3,4,5,6]

  const renderContent = () => {
    if (isLoading){
       return (
        <s.PanelCards>
          {loadingItems().map((item) => {
            return (
              <Skeleton
                key={`collection-loading-${item}`}
                animation="wave"
                variant="rect"
                width={125}
                height={180}
              />
            );
          })}
        </s.PanelCards>
      );
    }
     

    if (collection.length === 0) return <label>Você não possui cartas...</label>;
    return (
      <Carrossel pages={collection.length}>
        {collection.map((page, i) => {
          return (
            <Slide key={`collection-page-${i}`} className="slide">
              <s.PanelCards>
                {page.map((card, j) => {
                  return <Card card={card} key={`collection-card-${j}`} />;
                })}
              </s.PanelCards>
            </Slide>
          );
        })}
      </Carrossel>
    );
  };

  return (
    <s.Container>
      <SnackAlert type={'error'} open={shouldOpenError} setOpen={setShouldOpenError}>
        Erro ao pegar suas cartas...
      </SnackAlert>
      <s.Content initial="hidden" animate="visible" variants={animations}>
        <header>
          <ButtonClose path={'/'} />
          <s.SearchWrapper />
        </header>
        <div style={{ flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{renderContent()}</div>
      </s.Content>
    </s.Container>
  );
};

export default Colecao;
