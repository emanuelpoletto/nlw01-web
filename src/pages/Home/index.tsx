import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecollect" />
        </header>

        <main>
          <h1>The marketplace for waste collection.</h1>
          <p>We help you to find collection places efficiently.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Add a place</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
