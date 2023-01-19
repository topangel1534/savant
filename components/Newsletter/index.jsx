import React, { useState, useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import form from '../../styles/Form.module.css'
import validator from 'validator'
import MailchimpSubscribe from "react-mailchimp-subscribe"

export const Newsletter = (props) => {
    const [show, setShow] = useState(false);

    const [emailInput, setemailInput] = useState('');
    const [emailInput2, setemailInput2] = useState('');
    const [isWarning, setIsWarning] = useState(false);

    const mailchimp_url = "https://business.us21.list-manage.com/subscribe/post?u=75fd4cc388e3814166a8552a9&amp;id=68ba20e6af&amp;f_id=0099dae1f0";

    const handleClose = () => setShow(false);
    const handleShow = e => {
        if(validator.isEmail(emailInput)){
            setShow(true);
            setIsWarning(false);
        }else{
            setShow(false);
            setIsWarning(true);
        }
    }

    const handleTextbox1Change = e => {
        setemailInput(e.target.value);
        setemailInput2(e.target.value);
        setIsWarning(false);
    }

    return (
        <>
            <Form className={`${form.getStartedForm} ${form.commonForm}`}>
                <Form.Group className={`form-group d-md-flex align-items-center gap-3 ${form.formGroup}`} controlId="formContactName">
                    <Form.Control className={`form-control ${form.formControl}`} type="text" placeholder="Enter Your Email" onChange={handleTextbox1Change} value={emailInput} />
                    <Button className={`mt-3 mt-md-0 ${form.mainFrmBtnEmail} ${form.mainFrmBtn} ${form.btnRadiusNo}`} variant="primary" type="button" onClick={handleShow}>Join the Waitlist</Button>
                </Form.Group>
                <spam className={(isWarning) ? form.error : form.hide }>Please enter a valid email</spam>
            </Form>

            <Modal show={show} onHide={handleClose} className="joinWaitlistModal" centered dialogClassName="joinWaitlistModalDialog">
                <Modal.Header closeButton>
                <Modal.Title>Join the Waitlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MailchimpSubscribe
                        url={mailchimp_url}
                        render={({ subscribe, status, message }) => (
                            <>
                                <MailchimpForm
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                    emailInput2={emailInput2}
                                />
                                {
                                    (status == "success") ?
                                        setemailInput('')
                                    : ''
                                }
                            </>
                        )}
                    />  
                </Modal.Body>
            </Modal>
        </>
    )
}

// a basic form
const MailchimpForm = ({ status, message, onValidated, emailInput2 }) => {
    let email, fname, lname;
    
    const [isValidInputs, setisValidInputs] = useState(true);

    const submit = () => {
      email &&
      fname.value != '' &&
      lname.value != '' &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
        LNAME: lname.value
      });

      if(email &&
        fname.value != '' &&
        lname.value != '' &&
        email.value.indexOf("@") > -1) {
            setisValidInputs(true)
        }else{
            setisValidInputs(false)
        }
    }

    if(status == "success") {
        const form = document.querySelector('.modal-body');
        const inputElements = form.querySelectorAll('input');
        emailInput2 = "";
        console.log(inputElements)
        inputElements.forEach(input => (input.value = ''));
    }
  
    return (
      <div className={`${form.joinWaitlistForm} ${form.commonForm}`}>
        <Form.Group className={`form-group mb-4 ${form.formGroup}`} controlId="formContactName">
            <Form.Label className={`${form.formLabel}`}>First Name*</Form.Label>
            <input
                className={`form-control ${form.formControl} ${form.mc_inp}`}
                ref={node => (fname = node)}
                type="text"
                placeholder="Enter Your First Name"
                required
            />
        </Form.Group>
        <Form.Group className={`form-group mb-4 ${form.formGroup}`} controlId="formContactName">
            <Form.Label className={`${form.formLabel}`}>Last Name*</Form.Label>
            <input
                className={`form-control ${form.formControl} ${form.mc_inp}`}
                ref={node => (lname = node)}
                type="text"
                placeholder="Enter Your Last Name"
                required
            />
        </Form.Group>
        <Form.Group className={`form-group mb-4 ${form.formGroup}`} controlId="formContactName">
            <Form.Label className={`${form.formLabel}`}>Email*</Form.Label>
            <input
                className={`form-control ${form.formControl} disabled ${form.mc_inp}`}
                ref={node => (email = node)}
                type="email"
                placeholder="Enter Your Email"
                value={emailInput2}
                required
            />
        </Form.Group>
        <Button className={`mt-3 mt-md-0 w-100 ${form.pop_button} ${(status === "success") ? form.dis : ''} ${form.mainFrmBtn} ${form.btnRadiusNo}`} variant="primary" type="button" onClick={submit}>{(status === "success") ? 'Sent' : 'Send'}</Button>

        <span class={form.warning}>
            {status === "sending" && <div style={{ color: "blue" }}>Please wait...</div>}
            {status === "error" && (
            <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
            {!isValidInputs && (
            <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: "Please fill all required fields." }}
            />
            )}
            {status === "success" && (
            <div
                style={{ color: "green" }}
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
        </span>
      </div>
    );
  };