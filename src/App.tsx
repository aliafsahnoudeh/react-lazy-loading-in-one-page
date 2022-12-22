import React, { Suspense, useEffect, useState } from 'react';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const SidebarLeft = React.lazy(() => import('./components/SidebarLeft'));

// import './App.css';

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setLoaded(true)
    }, 2000)
  })


  return (
    <div className="App">
      {loaded ? 
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Footer />
        <SidebarLeft />
      </Suspense> : null}
    </div>
  );
}

export default App;
