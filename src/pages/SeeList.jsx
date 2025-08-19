import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { DisplayImages } from '../services/imageService';
import axios from 'axios';
import  Navbar  from '../components/Navbar';

const UserOperations = () => {
  const [operations, setOperations] = useState([]);
    const { authToken, user } = useContext(AuthContext)
    console.log(`here is authToken ${authToken}`)
    console.log(`here is user :${user._id}`);
  useEffect(() => {
    if (!authToken || !user?._id) 
    {
      console.log("authToken or user._id is null");
    }
    const fetchOperations = async () => {
      try {
        const res = await DisplayImages(authToken,user._id);
        setOperations(res.data);
      } catch (err) {
        console.error('Error fetching user operations:', err);
      }
    };
    fetchOperations();
  }, [authToken,user]);

  return (
    
    // <section className="container my-5">
    //   <h2 className="text-center mb-4">Your Image Operations</h2>
    //   <div className="row justify-content-center">
    //     {operations.length === 0 ? (
    //       <p className="text-center">No operations found yet.</p>
    //     ) : (
    //       operations.map((op, idx) => (
    //         <div key={idx} className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
    //           <div className="card shadow-sm w-100 text-center">
    //             <div className="card-body">
    //               <h5 className="card-title">Operation #{idx + 1}</h5>
    //               <p className="card-text">File Name: {op.filename}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))
    //     )}
    //   </div>
    // </section>
      <div>
        <Navbar/>
     <section className="container my-5">
      <h2 className="text-center mb-4">Your Image Operations</h2>
      <div className="row justify-content-center">
        {operations.length === 0 ? (
          <p className="text-center">No operations found yet.</p>
        ) : (
         operations.map((op, idx) => (
  <div key={idx} className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
    <div className="card shadow-sm w-100 text-center">
      <div className="card-body">
        <img
          src={op.url}
          alt={'The PDF is not directly accessible.'}
          className="img-fluid mb-3"
          style={{ maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
        />
        {/* <h5 className="card-title">Operation #{idx + 1}</h5> */}
        <h5 className="card-title">Operation: {op.operation}</h5>
        {/* <p className="card-text">File Name: {op.filename}</p> */}
        <a href={op.url} target='blank' download className="btn btn-outline-primary">
          See Url Image
        </a>
      </div>
    </div>
  </div>
))

        )}
      </div>
    </section>
    </div>
  );
};

export default UserOperations;
