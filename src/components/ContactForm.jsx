import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xrgvannb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, 
        email,
        message  
      })
    });

    const data = await response.json();
    setShowModal(true);
    setName('');
    setEmail(''); 
    setMessage('');
    console.log(data);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
     <div  className="form-group  mb-3"> 
      <input  
        type="text"
        placeholder="Please Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control" required />
      </div>
      <div className="form-group  mb-3">
      <input
        type="email"
        placeholder="Please Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}  
        className="form-control" required />
      </div>
      
      <div className="form-group  mb-3">
      <textarea
        rows="4"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-control" required></textarea>
      </div>
      <div className="form-group  mb-3">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
    <Modal show={showModal} className="my-modal">
  <Modal.Header closeButton>
    <Modal.Title>Thank You!🙏</Modal.Title>
  </Modal.Header>

  <Modal.Body>Your 📩 message has been sent!</Modal.Body>

  <Modal.Footer>
    <Button variant="primary" onClick={closeModal}>
      OK
    </Button>
  </Modal.Footer>

</Modal>
    </>
  );
}

export default ContactForm;