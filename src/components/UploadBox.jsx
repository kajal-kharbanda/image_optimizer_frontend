// src/components/UploadBox.jsx
import React from 'react'

const UploadBox = ({ onFileSelect, onSubmit, icon = 'fas fa-image', mode = 'Upload', fileName = '' }) => {
  return (
    <div className="upload-section mt-5">
      <h3 className="upload-title text-center">Upload Box</h3>
      <p className="upload-subtitle text-center">File should be JPG, PNG, or WebP</p>

      <div className="upload-box-dashed">
        <div className="upload-content">
          <i className={`${icon} upload-icon`}></i>
          <p className="upload-note">Drag & Drop your file or</p>
          <label className="browse-btn" htmlFor={`${mode}-fileUpload`}>
            Browse File
          </label>
          <input
            type="file"
            id={`${mode}-fileUpload`}
            accept="image/*"
            hidden
            onChange={onFileSelect}
          />
        </div>
      </div>

      {fileName && (
        <p className="text-secondary mt-2 text-center">Selected: {fileName}</p>
      )}

      {onSubmit && (
        <div className="mt-3">
          <button type="button" className="btn-primary w-100 mode-btn" onClick={onSubmit}>
            {mode}
          </button>
        </div>
      )}
    </div>
  )
}

export default UploadBox
