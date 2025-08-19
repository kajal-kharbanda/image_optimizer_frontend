import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube
} from 'react-icons/fa6';
import useFadeInOnMount from './useFadeInOnMount';

const Footer = () => {
  const isVisible = useFadeInOnMount(2000);
  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
    <footer className="footer">
      <div className="footer-content lead">
        <div className="footer-column">
          <h4>Image Tools</h4>
          <ul>
            <li>Image Resizer</li>
            <li>Bulk Image Resizer</li>
            <li>Image Compressor</li>
            <li>Crop Image</li>
            <li>Collage Maker</li>
            <li>Flip Image</li>
            <li>Rotate Image</li>
            <li>Image Enlarger</li>
            <li>Color Picker</li>
            <li>Meme Generator</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Convert</h4>
          <ul>
            <li>Image Converter</li>
            <li>PDF to JPG</li>
            <li>HEIC to JPG</li>
            <li>SVG Converter</li>
            <li>PDF to PNG</li>
            <li>PNG to SVG</li>
            <li>WebP to JPG</li>
            <li>PNG to JPG</li>
            <li>JPG to PNG</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>PDF Tools</h4>
          <ul>
            <li>Compress PDF</li>
            <li>PDF Converter</li>
            <li>Image to PDF</li>
            <li>JPG to PDF</li>
            <li>PNG to PDF</li>
            <li>PDF to GIF</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Apps</h4>
          <ul>
            <li>Android Image Converter App</li>
            <li>iOS Image Converter</li>
            <li>Android Collage Maker</li>
            <li>iOS Collage Maker</li>
            <li>Android Video Compressor App</li>
            <li>iOS Video Compressor App</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Contact Us</li>
            <li>Imprint</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="footer-socials">
        <FaInstagram className="icon" />
        <FaXTwitter className="icon" />
        <FaFacebookF className="icon" />
        <FaYoutube className="icon" />
      </div>
    </footer>
    </div>
  );
};

export default Footer;
