/* eslint-disable linebreak-style */
// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


// == Import : local
// Styles de base
import 'src/styles/index.scss';
// Composant racine
import App from 'src/components/App';


// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  <Router>
    <App />
  </Router>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(rootComponent, target);
