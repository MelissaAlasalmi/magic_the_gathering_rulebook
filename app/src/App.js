import React from 'react';
// eslint-disable-next-line
import Styles from './App.css';
import { Header, Footer } from './header';
import { ChapterOutline } from './outline';

const App = () => (
  <div>
    <Header />
    <ChapterOutline />
    <Footer />
  </div>
);

export default App;
