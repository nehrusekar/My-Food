
import Home from './componand/Homepage/navbar';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import LOG from './componand/Login/Login';
import Register from './componand/my first pages/Register';
import Cart from './componand/cart/cart';
import { Provider } from 'react-redux';
import store from './componand/redux/store';
import Single from './componand/Discription/SinglePage';
import Profile from './componand/Homepage/profile';
import MenuItem from './componand/Homepage/Menu';
import SingleNav from './componand/Discription/SingleNavbar';


function App() {
  return (

    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'><Register /></Route>
            <Route path='/login'><LOG /></Route>
            <Route path='/home'><Home /> </Route>
            <Route path='/cart'><Cart /> </Route>
            <Route path ='/single'><Single/></Route>
            <Route path='/SingleNav'>< SingleNav/></Route>
            <Route path='./profile'><Profile/></Route>
            <Route path='/Menu'><MenuItem/></Route>
            

 
          </Switch>
        </BrowserRouter>

      </Provider>
     
      





    </div>


  );
}

export default App;
