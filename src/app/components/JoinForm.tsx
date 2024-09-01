import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    batch: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      setFormData({
        name: "",
        email: "",
        message: "",
        batch: "",
      });
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
      <h1>Join Our Wellness Journey</h1>
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
          <label htmlFor="name">Your Full Name</label>
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
          <label htmlFor="email">Your Email Address</label>
        </div>
        <div className="form-group">
          <select
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Your Batch
            </option>
            <option value="Holistic Healing Morning Batch">
              Holistic Healing Morning Batch
            </option>
            <option value="Holistic Healing Evening Batch">
              Holistic Healing Evening Batch
            </option>
            <option value="Weight Loss Morning Batch">
              Weight Loss Morning Batch
            </option>
            <option value="Weight Loss Evening Batch">
              Weight Loss Evening Batch
            </option>
          </select>
          <label htmlFor="batch">Preferred Batch</label>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <label htmlFor="message">
            How can we assist you on your wellness journey?
          </label>
        </div>
        <button type="submit">Begin Your Journey</button>
      </form>
      {showNotification && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Thank You!</h2>
            <p>
              Your journey towards wellness has begun. We have received your
              response and we will review your information shortly. We look
              forward to guiding you on this path to a healthier, more balanced
              life.
            </p>

            <p>
              If you have any further questions, feel free to reach out to us
              through our social media handles.
            </p>
            <button onClick={handleCloseNotification}>Close</button>
          </div>
        </div>
      )}
      <div className="social-media-links">
        <a
          href="https://www.instagram.com/heal_inside_out__?utm_source=qr&igsh=cTdrdXZ1ZDk3OXg1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="instagram-color.svg" alt="Insta" className="social-icon" />
        </a>
        <a
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="gmail-color.svg" alt="Gmail" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default JoinForm;
