import React from 'react';
import useFadeInOnMount from './useFadeInOnMount';
// import './PixelSqueezeInstructions.css';

const PixelSqueezeInstructions = () => {
  const isVisible = useFadeInOnMount(2000);
  return (
    <div className = {`fade-in ${isVisible ? 'visible' : ''}`}>
    <div className="ps-full-width text-custom mt-2 text-center ">
      <div className="ps-wrapper">
        <h2 className="mb-3 display-5">📘 How to Use PixelSqueeze</h2>
        <div className="ps-list lead text-center" style={{ textAlign:"left"}}>
          <div> <strong>1. </strong>Select the operation from the navbar that you want to perform.</div>
          <div><strong>2. </strong>Click on the <strong>"Browse"</strong> button to upload JPG, JPEG, or PNG files.</div>
          <div><strong>3. </strong>Select options if prompted (e.g., resize like 1:1,16:9,4:3 and format like .png,.webp,.aif).</div>
          <div><strong>4. </strong>Click the required button to automatically process the image.</div>
          <div><strong>5. </strong>Click the <strong>"Download Processed Image"</strong> button to save your image.</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PixelSqueezeInstructions;
