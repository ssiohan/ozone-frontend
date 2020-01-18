// == Import : npm
import React from 'react';

// == Import : local
import './homepage.scss';

// == import Composants
import Banner from 'src/components/Banner';
import Card from './Card';


// == Composant
const Homepage = () => (
  <div id="homepage">
    <Banner />
    <div className="description">
      <img className="description-logo" src="src/assets/img/logo_sans_fond.png" alt="" />
      <p className="description-text">
        Débloquez le meilleur d'oZone.
      </p>
      <p className="description-text">
        Proposez vos Events sur l'écologie.
      </p>
      <p className="description-text">
        Inscrivez vous aux events.
      </p>
      <p className="description-text">
        Recevez des alertes de prix et des events pour agir sur la planete.
      </p>
      <p className="description-text">
        Gagner des points blablabla lorem
      </p>
      <button type="button" className="description-button">
      S'inscrire
      </button>
    </div>
    <div>
     <Card />
    </div>
  </div>
);

// == Export
export default Homepage;
