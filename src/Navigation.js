import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div>
    <nav>
      <ul className="v-list">
        <li><a className="logo" href="Microsoft"><img src="/img/micro.png" alt="list item 1" /></a></li>
        <li><a href="Office">Office</a></li>
        <li><a href="Windows">Windows</a></li>
        <li><a href="Surface">Surface</a></li>
        <li><a href="Xbox">Xbox</a></li>
        <li><a href="Specialerbjudanden">Specialerbjudanden</a></li>
        <li><a href="Support">Support</a></li>
      </ul>
      <ul className="h-list">
        <li><a href="Hela Microsoft">Hela Microsoft</a></li>
        <li><a href="Sök">Sök</a></li>
        <li><a href="Kundvagn">Kundvagn</a></li>
        <li><a href="Logga In">Logga In</a></li>
      </ul>
      </nav>
    </div>
  );
}

export default Navigation;
