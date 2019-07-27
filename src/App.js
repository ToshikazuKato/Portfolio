import React from 'react';
import { Route, Switch, withRouter} from "react-router-dom";
import Intro from './Components/Intro';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Project from './Components/Project';
import Me from './Components/Me';
import Footer from './Components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
	    <Header />
		<Switch>
			<Route exact path="/" render={() => <Intro />} />
			<Route exact path="/portfolio" render={(props) => <Portfolio {...props} />} />
			<Route exact path="/me" render={() => <Me />} />
			<Route exact path="/portfolio/:title" render={(props) => <Project {...props} />} />
		</Switch>
		<Footer />
    </div>
  );
}

export default withRouter(App);
 

