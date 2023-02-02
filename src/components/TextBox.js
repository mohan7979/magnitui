import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';

function TextBox({ label, setName, handleChild }) {

    return (
        <FloatingLabel
            required
            as={Col}
            size="sm"
            controlId="floatingInput"
            label={label}
            className="mb-3"
            style={styles.inputLabels}
        >
            <Form.Control size="sm" type="text" placeholder={label}  style={styles.inputLabels} onChange={(event) => handleChild(event)} />
            <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </FloatingLabel>
    );
}

export default TextBox;

const styles = {
    inputLabels: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5
    }
};