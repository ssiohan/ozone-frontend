// == Import : npm
import React from 'react';

// == Import : local
import './homepage.scss';

// == import Composants
import Banner from 'src/components/Banner';
import Description from './Description';
import Card from './Card';

// == Composant
const Homepage = () => (
  <div id="homepage">
    <Banner />
    <div className="container-homepage">
      <Description />
      <div className="card">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
);

// == Export
export default Homepage;
