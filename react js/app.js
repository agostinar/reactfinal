import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

const Home = () => <h2>Home</h2>;
const Catalog = () => <h2>Catalog</h2>;
const Cart = () => <h2>Cart</h2>;

export default App;
