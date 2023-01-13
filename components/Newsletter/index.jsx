import { Form, Button } from 'react-bootstrap';
import form from '../../styles/Form.module.css'

export const Newsletter = (props) => {
    return ( 
        <Form className={`${form.getStartedForm} ${form.commonForm}`}>
            <Form.Group className={`form-group d-md-flex align-items-center gap-3 ${form.formGroup}`} controlId="formContactName">
                <Form.Control className={`form-control ${form.formControl}`} type="text" placeholder="Enter Your Email" />
                <Button className={`mt-3 mt-md-0 ${form.mainFrmBtn} ${form.btnRadiusNo}`} variant="primary" type="submit">Join the Waitlist</Button>
            </Form.Group>
        </Form> 
    )
}