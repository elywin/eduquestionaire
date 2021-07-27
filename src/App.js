import React from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Home from './components/pages/home';
import Login from './components/pages/login';
import Register from './components/pages/register';
// import Question from './components/pages/question';
// import './App.css';
// import PostList from './components/PostList';
// import Posts from './components/Posts';
// import Answers from './components/Answers';

function App() {
  return (
    <div className="App">
       <React.Fragment>
       <BrowserRouter>
          <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route path="/login" > <Login /> </Route>
            {/* <Route path="/questions/:_id/:title"> <Question /> </Route> */}
            <Route path="/register" > <Register /> </Route>
        </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;