import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navbar';
import Vedanti from './pages/Vedanti';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
            <Navigation/>
          <Route exact path="/" component={Home} />
          <Route path="/vedanti" component={Vedanti} />
          {/* <Route path="/lavanya" component={Lavanya} /> */}
          {/* <Route path="/rajsekhar" component={Rajsekhar} /> */}
          {/* <Route path="/rushali" component={Rushali} /> */}
          {/* <Route path="/sudhanshu" component={Sudhanshu} /> */}
          {/* <Route path="/sangeeta" component={Sangeeta} /> */}
          {/* <Route path="/rudra" component={Rudra} /> */}
          {/* <Route path="/kaushal" component={Kaushal} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
