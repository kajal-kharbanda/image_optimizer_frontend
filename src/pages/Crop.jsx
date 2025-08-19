// import React, { useRef, useState,useEffect, useContext } from 'react'
// import { Cropper } from 'react-cropper'
//  import 'cropperjs/dist/cropper.css'
// import { AuthContext } from '../context/AuthContext'
// import UploadBox from '../components/UploadBox'
// import DownloadLink from '../components/DownloadLink'
// import { cropImage } from '../services/imageService'
// import Navbar from '../components/Navbar'
// import '../styles/style.css'

// const CropImage = () => {
//    const { authToken, user } = useContext(AuthContext)
//   const cropperRef = useRef(null)
//   const [fileName, setFileName] = useState('')
//   const [imageUrl, setImageUrl] = useState('')
//   const [message, setMessage] = useState('')
//   const [selectedFile,setSelectedFile]=useState(null);
//   const [downloadUrl, setDownloadUrl] = useState('')

//   useEffect(() => {
//     if (imageUrl && cropperRef.current?.cropper) {
//       setTimeout(() => {
//         cropperRef.current.cropper.replace(imageUrl)
//       }, 100)
//     }
//   }, [imageUrl])
//   const handleFileChange = (event) => {
//     const file = event.target.files[0]
//     if (!file) return
//     setFileName(file.name)
//     setSelectedFile(file)
//     const reader = new FileReader()
//     reader.onload = () => {
//       setImageUrl(reader.result)
//       console.log('Loaded Image:', reader.result);
//     }
//     console.log(imageUrl);
//     reader.readAsDataURL(file)
//   }

//  const handleSubmit = async (e) => {
//   e.preventDefault()
//   const cropper = cropperRef.current?.cropper
//   if (!cropper || !selectedFile) return setMessage('❌ Please upload and crop image')

//   const cropData = cropper.getData(true)
//   const { x, y, width, height } = cropData;

//   try {
//     const { data } = await cropImage(selectedFile, x, y, width, height, authToken, user._id)
//     console.log(data.path);
//     setDownloadUrl(`http://localhost:3000/${data.path}`)
//     setMessage('✅ Image cropped successfully')
//   } catch (err) {
//     console.error(err)
//     setMessage('❌ Crop failed')
//   }
// }


//   return (
//     <>
//       <Navbar />
//       <h2 className='upload-title text-center mt-4'>Crop Image</h2>
//       <p className='upload-subtitile text-center'>
//         Select a portion of your image with a responsive rectangle and crop it precisely.
//       </p>
//       <UploadBox onFileSelect={handleFileChange} icon="fas fa-crop" mode="Crop" fileName={fileName} />
//       {imageUrl && (
//         <div className='crop-container text-center'>
//           <div className="cropper-container">
//             <div className="cropper-shade"></div>
//             <Cropper
//               src={imageUrl}
//               className="cropper-canvas"
//               style={{ height: 400, width: '100%' }}
//               initialAspectRatio={1}
//               guides={true}
//               ref={cropperRef}
//               viewMode={1}
//               dragMode='move'
//             />
//             <div className="cropper-view-box"></div>
//           </div>

//           <button className='btn btn-success mt-3' onClick={handleSubmit}>
//             Crop & Save
//           </button>
//         </div>
//       )}
//       {message && (<p className='mt-3 text-center fw-bold text-dark'>{message}</p>)}
//       {downloadUrl && (<div className='text-center mt-4'>
//         <DownloadLink url={downloadUrl} fileName="cropped-image" />
//       </div>)}
//     </>
//   )
// }

// export default CropImage;
import React, { useState, useRef, useEffect, useContext } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { AuthContext } from '../context/AuthContext'
import UploadBox from '../components/UploadBox'
import DownloadLink from '../components/DownloadLink'
// import { cropImage } from '../services/imageService'
import Navbar from '../components/Navbar'
import '../styles/style.css'

const CropImage = () => {
  const { authToken, user } = useContext(AuthContext)
  const [fileName, setFileName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [message, setMessage] = useState('')
  const [crop, setCrop] = useState({
  unit: '%',
  width: 50,
  aspect: 1,
});
  const [completedCrop, setCompletedCrop] = useState(null)
  const [downloadUrl, setDownloadUrl] = useState('')
  const imageRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (!file) return
    setFileName(file.name)
    setSelectedFile(file)

    const reader = new FileReader()
    reader.onload = () => setImageUrl(reader.result)
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!completedCrop || !selectedFile ||
      completedCrop.width == null ||
      completedCrop.height == null ||
      completedCrop.x == null ||
      completedCrop.y == null

    ) {
      setMessage('❌ Please upload and crop image')
      return
    }

    const { x, y, width, height } = completedCrop

    try {
      const { data } = await cropImage(selectedFile, x, y, width, height, authToken, user._id)
      setDownloadUrl(`https://pixelbackend-pqo3.onrender.com/${data.path}`)
      setMessage('✅ Image cropped successfully')
    } catch (err) {
      console.error(err)
      setMessage('❌ Crop failed')
    }
  }

  return (
    <>
      <Navbar />
      <h2 className="upload-title text-center mt-4">Crop Image</h2>
      <p className="upload-subtitile text-center">
        Select a portion of your image with a responsive rectangle and crop it precisely.
      </p>

      <UploadBox onFileSelect={handleFileChange} icon="fas fa-crop" mode="Crop" fileName={fileName} />

      {imageUrl && (
  <div
    className="crop-container text-center"
    style={{
      position: 'relative',
      display: 'inline-block',
      maxWidth: '100%',
      marginTop: '20px',
    }}
  >
    {imageUrl && <p className="text-center">Image loaded!</p>}
    <ReactCrop
      src={imageUrl}
      crop={crop}
      onImageLoaded={(img) => {
        imageRef.current = img;
        return true;
      }}
      onComplete={(c) => setCompletedCrop(c)}
      onChange={(c) => setCrop(c)}
      className="cropper-canvas"
      style={{
        maxWidth: '100%',
        maxHeight: '400px',
        display: 'block',
        margin: '0 auto',
      }}
    />

    {/* Optional visual overlay based on crop dimensions */}
    {completedCrop &&
  completedCrop.x != null &&
  completedCrop.y != null &&
  completedCrop.width != null &&
  completedCrop.height != null && (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      <rect
        x={completedCrop.x}
        y={completedCrop.y}
        width={completedCrop.width}
        height={completedCrop.height}
        fill="rgba(0,0,0,0.3)"
      />
    </svg>
)}

    <button
      className="btn btn-success mt-3"
      onClick={handleSubmit}
      style={{ display: 'block', margin: '20px auto' }}
    >
      Crop & Save
    </button>
  </div>
)}



      {message && <p className="mt-3 text-center fw-bold text-dark">{message}</p>}
      {downloadUrl && (
        <div className="text-center mt-4">
          <DownloadLink url={downloadUrl} fileName="cropped-image" />
        </div>
      )}
    </>
  )
}

export default CropImage;
