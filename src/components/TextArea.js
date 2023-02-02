import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';

function TextArea({ label, handleChild }) {
    
    return (
        <FloatingLabel controlId="floatingTextarea2" label={label} style={styles.inputLabels}>
            <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={styles.inputLabels}
                onChange={(event) => handleChild(event)}
            />
        </FloatingLabel>
    );
}

export default TextArea;

const styles = {
    inputLabels: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5,
        height: 100
    }
};