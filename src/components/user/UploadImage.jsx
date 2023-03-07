import React, { useState } from 'react';
import axios from 'axios';

function UploadImage({ setPost }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSelectFile = (e) => {
    setMessage('');
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('image', file);
    axios
      .post(
        `http://localhost:5001/users/uploadImage`, // url for replace
        data
      )
      .then((res) => {
        console.log(res);
        setMessage(res.data.msg);
        setPost((prev) => ({ ...prev, img: res.data.url }));
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <input
        id='file'
        type='file'
        onChange={handleSelectFile}
        multiple={false}
        name='image'
      />
      {file && (
        <>
          <button onClick={handleUpload} className=''>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </>
      )}
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadImage;
