
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Hello from './Hello';
import Goodbye from './goodbye';

import Login from '../Membership/Login';
import Register from '../Membership/Register';
import RestList from '../ProductCatalog/ListRest';
import Orders from '../OrderProcessing/Orders';
import Cart from '../ShoppingCart/Cart';
import Customers from '../CRM/Customers';
import Button from '../button';
import Crud from '../crud';





//function component 
function Container() {

  return (<div >

    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/cakes"><RestList /></Route>
        <Route exact path="/orders"><Orders /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/button"><Button /></Route>
        <Route exact path="/crud"><Crud /></Route>
        <Route exact path="/cart"><Cart /></Route>
        <Route exact path="/hello" component={Hello} />
        <Route exact path="/goodbye" component={Goodbye} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/customers"><Customers /></Route>

      </Switch>
      <hr />
      <div >
        <Footer />
      </div>
      
    </Router>
    
    
    
    
    


  </div>);
}

export default Container;