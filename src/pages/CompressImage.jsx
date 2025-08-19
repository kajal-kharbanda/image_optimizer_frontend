import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import UploadBox from '../components/UploadBox'
import DownloadLink from '../components/DownloadLink'
import { compressImage } from '../services/imageService'
import '../styles/style.css'
import Navbar from '../components/Navbar';

const CompressImage = () => {
  const { authToken, user } = useContext(AuthContext)
   console.log("user",user._id);
  console.log("authToken",authToken);
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState('')
  const [message, setMessage] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  const handleFileChange=(event)=>{
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
    setFileName(selectedFile?selectedFile.name: '')
    if(selectedFile)
    {
      console.log('Image selected for resizing',selectedFile);
    }

  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return setMessage('❌ Please upload a file and select an aspect ratio')

    try {
      const { data } = await compressImage(file, authToken, user._id)
      console.log({data});
      const PUBLIC_BASE='http://localhost:3000';
      setDownloadUrl(`${PUBLIC_BASE}/${data.path}`);
      setMessage('✅ File uploaded and compressed successfully')
      // setDownloadUrl(data.path)
    } catch (err) {
      console.error(err)
      setMessage('❌ Error compressing image');
    }
  }

  return (
    <>
    <Navbar/>
      <h2 className='upload-title text-center mt-4'>Compress Image</h2>
      <p className='upload-subtitile text-center'>
       Make your Image smaller in size without losing any quality.
      </p>
      <UploadBox onFileSelect={handleFileChange}
       onSubmit={handleSubmit} 
      icon="fas fa-image"
      mode="Compress"
      fileName={fileName}/>
      {message && (<p className='mt-3 text-center fw-bold text-dark'>{message}</p>)}
    {downloadUrl && (<div className='text-center mt-4'>
      <DownloadLink url={downloadUrl} fileName="compressed-image"></DownloadLink>
    </div>)}
    </>
  )
}

export default CompressImage;
