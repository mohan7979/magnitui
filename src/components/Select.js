import { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Select({ options, label, handleChild }) {
    
    return (
        <>
            <Form.Label style={styles.questions}>{label}</Form.Label>
            <Form.Select aria-label="How was your last appraisal" style={styles.inputLabels} onChange={(event) => handleChild(event)}>
                <option style={styles.inputLabels}>Please select</option>
                {options.map((item, index) => (
                    <option key={`inline-${index}`}value={item.id} style={styles.inputLabels}>{item.value}</option>
                ))}
            </Form.Select>
        </>

    );
}

export default Select;

const styles = {
    questions: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    inputLabels: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5,
        width: '60%'
    }
};