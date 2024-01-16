import React from "react";
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';

function App() {

  return (
    <main>
      <Header/>
      <h1>Previsão do Tempo</h1>
      <h5>Coloque abaixo o nome da cidade e clique em pesquisar.</h5>
      <Form />
      <Card />
    </main>
  );
}

export default App;
