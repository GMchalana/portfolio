import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name === '',
      email: formData.email === '',
      message: formData.message === ''
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      setIsLoading(true);
      try {
        await emailjs.send(
          "service_xqtbr43",
          "template_q2vrumd",
          formData,
          'I0tRf0wvL-UVty1G4'
        );
        
        // Show success message using SweetAlert2
        await Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#1976d2',
          timer: 3000,
          timerProgressBar: true,
        });

        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        // Show error message using SweetAlert2
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#1976d2',
        });
        console.log('FAILED...', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div id="contact" style={{ padding: '20px' }}>
      <h1>Contact Me</h1>
      <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
      
      <form onSubmit={sendEmail} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.name && <span style={{ color: 'red' }}>Please enter your name</span>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            name="email"
            placeholder="Email / Phone"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.email && <span style={{ color: 'red' }}>Please enter your email or phone</span>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={10}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
          {errors.message && <span style={{ color: 'red' }}>Please enter your message</span>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: '#1976d2',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: isLoading ? 0.7 : 1
          }}
        >
          {isLoading ? (
            <CircularProgress size={24} style={{ color: 'white' }} />
          ) : (
            <>
              Send <SendIcon />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;