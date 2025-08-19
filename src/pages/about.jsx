import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer1';
import CopyRight from '../components/Footer';
const AboutSection = () => {
  return (
    <div>
        <Navbar/>
    <section className="container my-5 py-5 px-4 rounded shadow-sm" style={{ backgroundColor: '#f4f4f6', color: '#333' }}>
      <h2 className="text-center mb-4">About This Tool</h2>
      <p className="text-center mb-5">
        Launched as a lightweight image processor, this project has grown into a powerful tool that helps users
        <strong> convert</strong> images between formats, <strong>resize</strong> them accurately, and
        <strong> compress</strong> them efficiently. Whether you're prepping assets for web or archiving personal collections—
        we’ve got you covered.
      </p>

      <div className="row gy-4">
        {[
          {
            icon: '🔄',
            title: 'Format Conversion',
            desc: 'Convert JPEG, PNG, and WebP images quickly. Backend logic ensures accurate and fast format transformation.'
          },
          {
            icon: '📐',
            title: 'Custom Resizing',
            desc: 'Resize images to fit your layout. Maintain aspect ratios, define widths or heights, and preview changes instantly.'
          },
          {
            icon: '📉',
            title: 'Smart Compression',
            desc: 'Apply lossy or lossless compression with visual fidelity. Reduce image size by up to 80% without noticeable loss.'
          },
          {
            icon: '🖼️',
            title: 'Batch Processing',
            desc: 'Upload and process up to 50 images at a time. Perfect for bulk optimization and faster workflow.'
          },
          {
            icon: '🔐',
            title: 'Privacy Safe',
            desc: 'Images are processed securely via SSL encryption. Uploaded files auto-delete within 6 hours to protect privacy.'
          },
          {
            icon: '💸',
            title: 'Free & Easy',
            desc: 'No software installs or registration required. The tool is free and open to everyone—just upload and go.'
          }
        ].map((feature, idx) => (
          <div className="col-md-4 text-center" key={idx}>
            <div className="p-3 border rounded bg-white h-100">
              <div style={{ fontSize: '2rem' }}>{feature.icon}</div>
              <h5 className="mt-3">{feature.title}</h5>
              <p className="mt-2" style={{ fontSize: '0.95rem' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    <CopyRight/>
    </div>
  );
};

export default AboutSection;
