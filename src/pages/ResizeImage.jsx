// src/pages/ResizeImage.jsx
import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { resizeImage } from '../services/imageService'
import DownloadLink from '../components/DownloadLink'
import UploadBox from '../components/UploadBox'
import Navbar from '../components/Navbar'
import CopyRight from '../components/Footer'

const ResizeImage = () => {
  const { user, authToken } = useContext(AuthContext)
  console.log("Resize ",user._id)
  console.log(authToken);
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const [aspectRatio, setAspectRatio] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [message, setMessage] = useState('')
  const [processedUrl, setProcessedUrl] = useState('')

  const handleAspectRatioChange = (e) => {
    const ratio = e.target.value
    setAspectRatio(ratio)

    switch (ratio) {
      case '16:9': setWidth(1280); setHeight(720); break
      case '9:16': setWidth(720); setHeight(1280); break
      case '1:1': setWidth(1000); setHeight(1000); break
      case '4:3': setWidth(1024); setHeight(768); break
      case '4:5': setWidth(1080); setHeight(1350); break
      case '820:312': setWidth(820); setHeight(312); break
      case 'A4': setWidth(1240); setHeight(1754); break
      default: setWidth(''); setHeight('')
    }
  }

  const handleFileChange = (e) => {
    const selected = e.target.files[0]
    setFile(selected)
    setFileName(selected?.name || '')
    if (selected) {
      console.log('Image selected for resizing:', selected)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !aspectRatio) {
      return setMessage('❌ Please upload a file and select an aspect ratio')
    }

    try {
      const { data } = await resizeImage(file, width, height, authToken, user._id)
      const PUBLIC_BASE = 'https://pixelbackend-pqo3.onrender.com'
      setProcessedUrl(`${PUBLIC_BASE}/${data.path}`)
       setMessage(`✅ File uploaded and compressed successfully`)
    } catch (err) {
      console.error(err)
      setMessage('❌ Failed to process image')
    }
  }

  return (
    <>
      <Navbar />
      <h2 className=" text-center mt-4">Resize Image</h2>
      <p className='upload-subtitile text-center mt-1 fs-5'>select the Aspect Ratio from the available options</p>
      <div className="row justify-content-center">
  <div className="col-12 col-md-6">
    <form>
      <div className="mb-3">
        <select
          className="form-select"
          value={aspectRatio}
          onChange={handleAspectRatioChange}
        >
          <option value="">Select Aspect Ratio</option>
          {['16:9', '9:16', '1:1', '4:3', '4:5', '820:312', 'A4'].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
    </form>
  </div>
</div>
             

              {/* Reusable UploadBox */}
              <UploadBox
                onFileSelect={handleFileChange}
                onSubmit={handleSubmit}
                icon="fas fa-image"
                mode="Resize"
                fileName={fileName}
              />
      {message && (
        <p className="mt-3 text-center fw-bold text-dark">{message}</p>
      )}

      {processedUrl && (
        <div className="text-center mt-4 ">
          
          <DownloadLink url={processedUrl} fileName="resized-image" />
        </div>
      )}
      <div>
        
      </div>
      
    </>
  )
}

export default ResizeImage
