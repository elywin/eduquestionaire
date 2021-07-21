import React from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Home from './components/pages/home';
// import Login from './components/Login';
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
            {/* <Route path="/auth/login" > <Login /> </Route>
            <Route path="/questions/:_id/:title"> <Answers /> </Route>
            <Route path="/questions/ask" > <Posts /> </Route>
            <Route path="/questions" > <PostList /> </Route> */}
        </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;