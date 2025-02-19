import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/septimiubloj" target="_blank">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
