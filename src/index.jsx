import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './style.css';

import Home from './components/Home';
import CardCreate from './components/CardCreate';
import CardPickUp from './components/CardPickUp';
import CardReady from './components/CardReady';
import Card from './components/Card'
<com></com>

const App = () => (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/vytvorit-pranicko" element={<CardCreate />} />
      <Route path="/vyzvednout" element={<CardPickUp />} />
      <Route path="/pranicko-je-pripravene/:id" element={<CardReady />}/>
      <Route path="/card/:id" element={<Card />} />
    </Routes>


      {/*
        Tady bude tvůj Vánoční přáníčko :)

        - HTML/CSS podklady máš ve složce /html-vzor
        - vyzobej si ze souborů HTML a CSS pro svoje komponenty
        - aplikace 5 stránek (úvod, vyzvednutí přáníčka, vytvoření přáníčko, zobrazení kódu vytvořeného přáníčka, samotné přáníčko)
        - použij router (musíš si ho nainstalovat)
      */}
    </BrowserRouter>
  </>
);

render(<App />, document.querySelector('#app'));
