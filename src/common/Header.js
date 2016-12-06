import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <header className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>
  </header>
);

export default Header;