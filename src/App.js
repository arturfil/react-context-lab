import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddFoodView from './Views/AddFoodView';
import HomeView from './Views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView}/>
        <Route exact path='/addfood' component={AddFoodView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
