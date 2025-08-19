// ResizeImage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import DownloadLink from './DownloadLink';

const ResizeImage = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [aspectRatio, setAspectRatio] = useState('');
  const [processedUrl, setProcessedUrl] = useState('');
  const [message, setMessage] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');


  const handleAspectRatioChange = (e) => {
    const ratio = e.target.value;
    setAspectRatio(ratio);

    // Set dimensions internally, but do not show width/height fields
    switch (ratio) {
    case '16:9':
      setWidth(1280);
      setHeight(720);
      break;
    case '9:16':
      setWidth(720);
      setHeight(1280);
      break;
    case '1:1':
      setWidth(1000);
      setHeight(1000);
      break;
    case '4:3':
      setWidth(1024);
      setHeight(768);
      break;
    case '4:5':
      setWidth(1080);
      setHeight(1350);
      break;
    case '820:312':
      setWidth(820);
      setHeight(312);
      break;
    case 'A4':
      setWidth(1240);
      setHeight(1754);
      break;
    default:
      setWidth('');
      setHeight('');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!file || !aspectRatio) return alert("Please upload a file and select aspect ratio");

  const formData = new FormData();
  formData.append('image', file);
  formData.append('aspectRatio', aspectRatio);
  formData.append('width', width);
  formData.append('height', height);

  try {
    const res = await axios.post('http://localhost:3000/api/image/resize', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setProcessedUrl(`http://localhost:3000${res.data.processedFile}`);
    setMessage('✅ Image processed successfully!');
  } catch (error) {
    console.log(error);
    setMessage('❌ Failed to process image');
  }
};


  return (
    <>
    
    <div className="upload-section">
      <div className="d-flex justify-content-end">
  <a href="/" className="btn btn-outline-primary dash">Go to Dashboard</a>
</div>
      <h3 className="upload-title text-center">Resize Image</h3>
      <p className="upload-subtitle">File should be JPG, PNG, or WebP</p>
      
      <form onSubmit={handleSubmit}>
        <div className="upload-box-dashed">
          <div className="upload-content">
            <i className="fas fa-image upload-icon"></i>
            <p className="upload-note">Drag & Drop your image or</p>
            <label className="btn btn-primary browse-btn" htmlFor="fileUpload">Browse File</label>
            <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} id="fileUpload" hidden />
          </div>
        </div>

        {fileName && <p className="text-secondary mt-2">Selected: {fileName}</p>}

        <div className="mb-3 mt-4">
          <label className="form-label">Select Aspect Ratio</label>
          <select className="form-select" value={aspectRatio} onChange={handleAspectRatioChange}>
            <option value="">Select Aspect Ratio</option>
            <option value="16:9">16:9</option>
            <option value="9:16">9:16</option>
            <option value="1:1">1:1</option>
            <option value="4:3">4:3</option>
            <option value="4:5">4:5</option>
            <option value="820:312">820:312</option>
            <option value="A4">A4</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Resize</button>
      </form>

      {message && <p className="mt-3 text-center fw-bold text-secondary">{message}</p>}

      {processedUrl && (
        <div className="text-center mt-4">
          <h5>Download Result</h5>
          <DownloadLink url={processedUrl} fileName="resized-image" />
        </div>
      )}
    </div>
    </>
  );
};

export default ResizeImage;
