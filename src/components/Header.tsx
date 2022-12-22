import { useEffect } from 'react';

import "../styles/Header.css"

function Header() {

  useEffect(() => {
    console.log("Header rendered!")
  })

  return (
    <header className="header">
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </header>
  );
}

export default Header;
