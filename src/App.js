import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import MainPage from './components/pages/MainPage'
import Images from './components/pages/Images'
import Posts from './components/pages/Posts'
import Albums from './components/pages/Albums'
import PageNotFound from './components/pages/404'


function App() {
  
  return (
    <Router className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/images" component={Images} />
          <Route exact path="/Posts" component={Posts} />
          <Route exact path="/Albums" component={Albums} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
    </Router>
  );
}

export default App;
