import React from "react";
import { useState,useEffect } from "react";
import useInViewFade from "./useInViewFade";
// import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  const [leftRef, leftVisible] = useInViewFade(1000);   // 2s delay
  const [rightRef, rightVisible] = useInViewFade(1000);
  return (
   <div >
    <section className="container-fluid bg-light py-2 " >
      <div className="container">
        <div className="row justify-content-space-between align-items-center g-5 ">
          
                  {/* Text Content */}
                  <div className={`col-md-6 mb-4 mb-md-0 slide-in-left ${leftVisible ? 'visible' : ''}`}
            ref={leftRef}>
                      <h3 className=" fs-semibold text-dark ">Why PixelSqueeze?</h3>
                      <p className="lead "  style={{textAlign:"justify"}}>
                          Our image optimizer offers direct file upload from your system, making the entire process smooth, intuitive, and accessible. Users can easily drag and drop images or select them via the native file picker to instantly begin compression, format conversion, or cropping tasks. With built-in support for popular formats like JPG, PNG, WebP, and AVIF, the platform processes each upload with blazing-speed accuracy and zero quality loss. Whether you're working on a single image or managing batch uploads, our system integration ensures quick previews, responsive editing, and immediate downloads — streamlining your workflow from device to delivery.
                      </p>
                  </div>

          {/* Image */}
          <div className={`col-md-6 text-center slide-in-right ${rightVisible ? 'visible' : ''}`}
            ref={rightRef}>
            <img 
              src="/BCO.537998d3-5d0d-44e0-919f-b83df4fc2209.png" 
              className="img-fluid" 
              alt="Image optimization illustration" 
            />
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
