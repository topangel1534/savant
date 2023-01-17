import React, { useState, useRef } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import form from '../../styles/Form.module.css'

export const Newsletter = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Form className={`${form.getStartedForm} ${form.commonForm}`}>
                <Form.Group className={`form-group d-md-flex align-items-center gap-3 ${form.formGroup}`} controlId="formContactName">
                    <Form.Control className={`form-control ${form.formControl}`} type="text" placeholder="Enter Your Email" />
                    <Button className={`mt-3 mt-md-0 ${form.mainFrmBtn} ${form.btnRadiusNo}`} variant="primary" type="button" onClick={handleShow}>Join the Waitlist</Button>
                </Form.Group>
            </Form>

            <Modal show={show} onHide={handleClose} className="joinWaitlistModal" centered dialogClassName="joinWaitlistModalDialog">
                <Modal.Header closeButton>
                <Modal.Title>Join the Waitlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className={`${form.joinWaitlistForm} ${form.commonForm}`}>
                        <Form.Group className={`form-group mb-4 ${form.formGroup}`} controlId="formContactName">
                            <Form.Label className={`${form.formLabel}`}>First Name*</Form.Label>
                            <Form.Control className={`form-control ${form.formControl}`} type="text" placeholder="Enter Your First Name" />
                        </Form.Group>
                        <Form.Group className={`form-group mb-4 ${form.formGroup}`} controlId="formContactName">
                            <Form.Label className={`${form.formLabel}`}>Last Name*</Form.Label>
                            <Form.Control className={`form-control ${form.formControl}`} type="text" placeholder="Enter Your Last Name" />
                        </Form.Group>
                        <Form.Group className={`form-group mb-4 ${form.formGroup}`} controlId="formContactName">
                            <Form.Label className={`${form.formLabel}`}>Email*</Form.Label>
                            <Form.Control className={`form-control ${form.formControl}`} type="text" placeholder="Enter Your Email" />
                        </Form.Group>
                        <Button className={`mt-3 mt-md-0 w-100 ${form.mainFrmBtn} ${form.disable} ${form.btnRadiusNo}`} variant="primary" type="button">Send</Button>
                    </Form>    
                </Modal.Body>
            </Modal>
        </>
    )
}