import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';

function App() {
  return (
   <Router>
      <NavBar/>
      <div className='container'>
        <SideBar/>
        <Switch>
          
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route> 
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route> 
          <Route path="/product/:productId">
            <Product/>
          </Route>
          <Route path="/newproduct">
            <NewProduct/>
          </Route> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;
