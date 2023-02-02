import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function RadioGroup({data, group, handleChild}) {
    
    return (
        <section className='radio-content-brand'>
            {data.map((item, index) => (
                <div key={`inline-${index}`} className="mb-1 smallFont">
                    <Form.Check
                        label={item.value}
                        name={group}
                        type='radio'
                        id={`inline-radio-index`}
                        onChange={() => handleChild(item.id)}
                    />
                </div>
            ))}
        </section>
    );
}

export default RadioGroup;

const styles = {
    radioLabels: {
        fontSize: 14,
        fontWeight: 'bold'
    }

};

