import { useEffect } from 'react';

import "../styles/SidebarLeft.css"

function SidebarLeft() {

  useEffect(() => {
    console.log("SidebarLeft rendered!")
  })

  return (
    <div className="sidebar-left">
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </div>
  );
}

export default SidebarLeft;
