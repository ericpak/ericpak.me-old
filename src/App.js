import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

// include minified css
import './Assets/css/default.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/Projects' component={Projects} props={this.state} />
          <Route exact path='/Contact' component={Contact} props={this.state} />
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
