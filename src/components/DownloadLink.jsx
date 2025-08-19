import '../styles/style.css'
const DownloadLink = ({ url, fileName }) => {
  const handleDownload = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName || "image";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      })
      .catch((error) => {
        console.error("Download failed:", error);
        alert("Download failed. Please check the file or try again.");
      });
  };

  return (
    <button className="btn mt-2 " id="down-btn" onClick={handleDownload}>
      Download Processed Image
    </button>
  );
};
export default DownloadLink;
