// == Import : npm
import React from 'react';

// == Import : local
import './homepage.scss';

// == import Composants
import Container from '@material-ui/core/Container';
import Banner from 'src/components/Banner';
import Description from './Description';
import Card from './Card';

// == Composant
const Homepage = () => (
  <div id="homepage">
    <Banner />
    <Container className="container-homepage">
      <Description />
      <Container className="card">
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Container>
  </div>
);

// == Export
export default Homepage;
