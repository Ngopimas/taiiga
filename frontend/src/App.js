import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  }
  return (
    <BrowserRouter>
      <div className="grid-container">

        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">taiiga</Link>
          </div>
          <div className="header-links">
            <a href="/">Cart</a>
            <a href="/">Sign in</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close" onClick={closeMenu}>X</button>
          <ul>
            <li><a href="/">Painting</a></li>
            <li><a href="/">Lithography</a></li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>

        <footer className="footer">
          All rights reserved.
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
