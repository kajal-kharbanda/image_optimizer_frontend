import React from 'react'
import useFadeInOnMount from './useFadeInOnMount';
const Header = () => {
  const isVisible = useFadeInOnMount();
  return(
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
  <header className=" text-center py-5">
    <h1 className="display-5 fw-bold">Welcome to PixelSqueeze</h1>
    <p className="lead">
      The easiest way to play with your images—resize, compress, convert and more.
    </p>
  </header>
  </div>
  )
}

export default Header;
