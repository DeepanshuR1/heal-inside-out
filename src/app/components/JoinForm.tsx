// import { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from '@/firebaseConfig';

// const JoinForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, 'submissions'), {
//         ...formData,
//         createdAt: new Date()
//       });
//       console.log('Form submitted successfully');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="join-container">
//       <h1>Join Us</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <div className="social-media-links">
//         <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">WhatsApp</a>
//         <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
//         <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">Gmail</a>
//       </div>
//     </div>
//   );
// };

// export default JoinForm;

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "submissions"), {
        ...formData,
        createdAt: new Date(),
      });
      console.log("Form submitted successfully");
      setFormData({ name: "", email: "", message: "" });
      setShowNotification(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="join-container">
      <h1>Join Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {showNotification && (
        <div className="notification">
          <p>Form submitted successfully!</p>
          <button onClick={handleCloseNotification}>Close</button>
        </div>
      )}
      <div className="social-media-links">
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </a>
      </div>
    </div>
  );
};

export default JoinForm;