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
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
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
          href="https://www.instagram.com/heal_inside_out__?utm_source=qr&igsh=cTdrdXZ1ZDk3OXg1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="instagram-color.svg" alt="Insta" className="social-icon"/>
        </a>
        <a
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="gmail-color.svg" alt="Gmail" className="social-icon"/>
        </a>
      </div>
    </div>
  );
};

export default JoinForm;
