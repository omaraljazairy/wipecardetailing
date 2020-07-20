import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainFooter } from './components/Footer/Footer';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Service } from './pages/Service';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NoMatch } from './pages/NoMatch';
import { Tankstations } from './pages/Tankstations';
import { Wagenpark } from './pages/Wagenpark';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { Media } from './pages/Media'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  backdropToggleHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleHandler} />;
    }

    return (
      <>
        <Router>
          <Toolbar drawerHandler={this.drawerToggleHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} drawerHandler={this.drawerToggleHandler}/>
          {backdrop}
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/services' component={Service} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/wagenpark' component={Wagenpark} />
              <Route path='/tankstations' component={Tankstations} />
              <Route path='/media' component={Media} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
        <MainFooter />
      </>
    )
  }

}

export default App
