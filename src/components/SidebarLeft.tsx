import { useEffect } from 'react';

function SidebarLeft() {

  useEffect(() => {
    console.log("SidebarLeft rendered!")
  })

  return (
    <header className="sidebar-left">
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

export default SidebarLeft;
