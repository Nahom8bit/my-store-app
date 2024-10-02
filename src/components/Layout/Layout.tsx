import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/sales">Sales</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2023 Shop Management App</footer>
    </div>
  );
};

export default Layout;