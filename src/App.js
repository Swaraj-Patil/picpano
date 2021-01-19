import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import MainPage from './components/pages/MainPage'
import Images from './components/pages/Images'
import Posts from './components/pages/Posts'
import Albums from './components/pages/Albums'
//import PageNotFound from './components/pages/404'


function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route path="/images" component={Images} />
      <Route path="/Posts" component={Posts} />
      <Route path="/Albums" component={Albums} />
    </div>
  );
}

export default App;
