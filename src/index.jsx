import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './style.css';

import Home from './components/Home';
import CreateCard from './components/CreateCard';
import PickUpCard from './components/PickUpCard';
import Card from './components/Card'
<com></com>

const App = () => (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/vytvorit-pranicko" element={< CreateCard/>} />
      <Route path="/vyzvednout" element={< PickUpCard/>} />
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
