import React, { useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import useNavigationData from '../../../common/hooks/useNavigationData';
import Header from '../../../common/layouts/Header';

const Home: React.FC = () => {
  const { changeTitle } = useNavigationData();

  useEffect(() => {
    changeTitle('Devoluciones');
  }, []);

  return (
    <IonPage>
      <Header/>

      <IonContent fullscreen>
        <div className='mainContent'>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia, suscipit voluptatibus sed, doloribus beatae distinctio odit quaerat accusamus, incidunt dolorum. Eveniet quam ipsum repellat omnis consequatur cumque, commodi molestiae. </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos hic tempora ea dolore nisi repellendus debitis similique, labore sit harum, fugit dolorem qui? Optio voluptate libero quisquam ullam sed. </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla soluta, voluptate doloremque odit porro possimus molestias, cumque, quis dolores sed consequuntur. In rem corrupti, numquam error minima fugiat assumenda officiis. </p>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, voluptate fuga ducimus inventore ut quo tenetur vel cupiditate, laborum quisquam nam eaque quas sint. Voluptate expedita accusantium autem quae dolore. </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel quam, facere laudantium eligendi cumque odit magnam explicabo nihil distinctio quis, optio repellat dolorem incidunt nam? Recusandae incidunt culpa debitis! </p>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia, suscipit voluptatibus sed, doloribus beatae distinctio odit quaerat accusamus, incidunt dolorum. Eveniet quam ipsum repellat omnis consequatur cumque, commodi molestiae. </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos hic tempora ea dolore nisi repellendus debitis similique, labore sit harum, fugit dolorem qui? Optio voluptate libero quisquam ullam sed. </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla soluta, voluptate doloremque odit porro possimus molestias, cumque, quis dolores sed consequuntur. In rem corrupti, numquam error minima fugiat assumenda officiis. </p>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, voluptate fuga ducimus inventore ut quo tenetur vel cupiditate, laborum quisquam nam eaque quas sint. Voluptate expedita accusantium autem quae dolore. </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel quam, facere laudantium eligendi cumque odit magnam explicabo nihil distinctio quis, optio repellat dolorem incidunt nam? Recusandae incidunt culpa debitis! </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
