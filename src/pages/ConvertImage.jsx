import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import UploadBox from '../components/UploadBox'
import DownloadLink from '../components/DownloadLink'
import { convertImage } from '../services/imageService'
import Navbar from '../components/Navbar'

const ConvertImage = () => {
  const { authToken ,user} = useContext(AuthContext)
  console.log("convert Authtoken",authToken)
  console.log("convert user", user._id);
  const [file, setFile] = useState(null)
  const [format, setFormat] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')
  const [fileName, setFileName] = useState('')
  const [message,setMessage]=useState('');
  const handleFileChange = (event) => {
    const selectedzfile=event.target.files[0]
    setFile(selectedzfile)
    setFileName(selectedzfile?selectedzfile.name:'')
    if(selectedzfile)
    {
      console.log('Image Selected for resizing',selectedzfile);
    }
  }

  const handleSubmit = async () => {
    if (!file || !format) return
    try {
      const { data } = await convertImage(file, format, authToken, user._id)
      console.log({data});
        const PUBLIC_BASE = 'https://pixelbackend-pqo3.onrender.com'
      setDownloadUrl(`${PUBLIC_BASE}/${data.path}`)
      //  setMessage(`✅ File uploaded and compressed successfully`)
      setMessage('✅ File Uploaded and compressed successfully');
    } catch (err) {
      console.error(err)
      setMessage('❌ Error in compressing image');
    }
  }

  return (
    <>
   <Navbar/>
      <h2 className='upload-title text-center mt-4'>Convert Image</h2>
      <p className='upload-subtitle text-center'>Convert your image to different formats avialable in options</p>
      <div className="row justify-content-center">
  <div className="col-12 col-md-6">
      <form>
        <label>Output Format:</label>
        <select
          className="form-select"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="">-- choose --</option>
          <option value="jpeg">JPG</option>
          <option value="png">PNG</option>
          <option value="webp">WebP</option>
          <option value="pdf">PDF</option>
        </select>
        </form>
      </div>
      </div>
      <UploadBox onFileSelect={handleFileChange}
      onSubmit={handleSubmit}
      icon="fas fa-image"
      mode="convert"
      fileName={fileName}/>
   
      {message && (<p className='mt-3 text-center fw-bold text-dark '>{message}</p>)}
     {downloadUrl && (<div className='text-center mt-4'>
      <DownloadLink url={downloadUrl} fileName="convertImage">
        </DownloadLink></div>)}
    
    </>
  )
}

export default ConvertImage;
