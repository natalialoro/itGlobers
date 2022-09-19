import './App.scss';
import React from 'react';
import Header from "./components/Header";
import NewsLetter from './commons/NewsLetter';
import Products from './commons/Products';
import Pictures from './commons/Pictures';
import Footer from './components/Footer';



function App() {
  return (
    
      <div>
      <Header/>
      <Products/>
      <Pictures/>
      <NewsLetter/>
      <Footer/>
      </div>
    
  );
}


export default (App);
