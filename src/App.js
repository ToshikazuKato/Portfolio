import React from 'react';
import { Route, Switch, BrowserRouter, Redirect, withRouter } from "react-router-dom";
// import Intro from './Components/Intro';
// import Header from './Components/Header';
import Content from './Components/Content';
import Me from './Components/Me';
import Footer from './Components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
	  <BrowserRouter>
			  <Switch>
				  <Route exact path="/" render={() => <Content />} />
				  <Route exact path="/portfolio" render={() => <Content />} />
				  <Route exact path="/me" render={() => <Me />} />
			  </Switch>
			  <Footer />
	  </BrowserRouter>
    </div>
  );
}

export default App;
 

