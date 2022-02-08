import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ConfirmModal from './ConfirmModal';

function ContactForm() {
  const [nameInputInvalid, setNameInputInvalid] = useState();
  const [emailInputInvalid, setEmailInputInvalid] = useState();
  const [messageInputInvalid, setMessageInputInvalid] = useState();

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  function setFormField(e) {
    switch (e.target.type) {
      case 'text':
        console.log(`TEXT CHANGE REGISTERED`);
        setNameValue(e.target.value);
        if (nameInputInvalid) {
          validateName(e);
        }
        break;
      case 'email':
        console.log(`EMAIL CHANGE REGISTERED`);
        setEmailValue(e.target.value);
        if (emailInputInvalid) {
          validateEmail(e);
        }
        break;
      case 'textarea':
        console.log(`TEXTAREA CHANGE REGISTERED`);
        setMessageValue(e.target.value);
        if (messageInputInvalid) {
          validateMessage(e);
        }
        break;
    }
  }

  function validateName(e) {
    const name = e.target.value;
    console.log(name);
    console.log(name.length);
    if (name.length < 3) {
      setNameInputInvalid(true);
      return;
    }
    setNameInputInvalid(false);
  }

  function validateEmail(e) {
    const emailRegex = /^([a-zA-Z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([a-z\.]{2,6})$/;
    const email = e.target.value;
    console.log(email);
    if (!emailRegex.test(email)) {
      setEmailInputInvalid(true);
      return;
    }
    setEmailInputInvalid(false);
  }

  function validateMessage(e) {
    const message = e.target.value;
    console.log(message);
    if (message.length < 3) {
      setMessageInputInvalid(true);
      return;
    }
    setMessageInputInvalid(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(nameInputInvalid);
    console.log(emailInputInvalid);
    console.log(messageInputInvalid);
    if (nameInputInvalid || nameInputInvalid === undefined) {
      setNameInputInvalid(true);
      return false;
    } else if (emailInputInvalid || emailInputInvalid === undefined) {
      setEmailInputInvalid(true);
      return false;
    } else if (messageInputInvalid || messageInputInvalid === undefined) {
      setMessageInputInvalid(true);
      return false;
    }

    const messageData = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };
    console.log(messageData);
    return true;
  }

  function clearForm() {
    setNameValue('');
    setEmailValue('');
    setMessageValue('');
    setNameInputInvalid();
    setEmailInputInvalid();
    setMessageInputInvalid();
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <h2>Or send me a message directly here!</h2>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            required
            onBlur={validateName}
            onChange={setFormField}
            value={nameValue}
            isInvalid={nameInputInvalid}
          />
          <Form.Control.Feedback type="invalid">
            Must be at least 3 characters.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            onBlur={validateEmail}
            onChange={setFormField}
            value={emailValue}
            isInvalid={emailInputInvalid}
          />
          <Form.Control.Feedback type="invalid">
            Must be a valid Email Address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            required
            onBlur={validateMessage}
            onChange={setFormField}
            value={messageValue}
            isInvalid={messageInputInvalid}
          />
          <Form.Control.Feedback type="invalid">
            Must be at least 3 characters
          </Form.Control.Feedback>
        </Form.Group>
        {/* <button className="btn btn-primary col-sm-12 col-md-4 mx-auto">
          Submit
        </button> */}
        <ConfirmModal
          fn={handleFormSubmit}
          clearForm={clearForm}
          name={nameValue}
          email={emailValue}
          message={messageValue}
        />
      </Form>
    </>
  );
}

export default ContactForm;
