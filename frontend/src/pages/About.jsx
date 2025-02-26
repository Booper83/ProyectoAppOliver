import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default About;
