import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function Main() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Link to='/rule'>LuckDraw</Link>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            前端发布平台
          </a>
        </header>
      </div>
    );
  }
  
  export default Main;