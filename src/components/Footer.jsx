import React from 'react'
import useFadeInOnMount from './useFadeInOnMount';

const CopyRight = () => {
  const isVisible = useFadeInOnMount();
  return (
  <div className={`fade-in ${isVisible ? 'visible' : ''} mb-2`}>
  <footer className="bg-light text-center py-4 mt-2">
    <p>
      Image Optimizer allows you to crop, resize, compress, and convert images
      in just a few clicks.
    </p>
    <p className="small">&copy; {new Date().getFullYear()} Image Optimizer.</p>
  </footer>
  </div>
  )
}

export default CopyRight;
