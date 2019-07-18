import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header /> 
	  <Content />
	  <Footer />
    </div>
  );
}

export default App;
