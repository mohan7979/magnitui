import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';


function PreviewModal({company, salary, personal}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={styles.orangeBtn} onClick={handleShow} className='ms-2'>
                Preview
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={styles.modaltitle}>Survey Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, textAlign: 'center' }}>
                        <div>
                            <span style={{backgroundColor: "#f16752", width: "20px", height: "20px", display: 'inline-block'}}></span>
                            <span style={styles.modaltitle}>Company</span>
                        </div>
                        <div>
                        <span style={{backgroundColor: "#1226aa", width: "20px", height: "20px", display: 'inline-block'}}></span>
                            <span style={styles.modaltitle}>Salary</span>
                        </div>
                        <div>
                        <span style={{backgroundColor: "#ccc", width: "20px", height: "20px", display: 'inline-block'}}></span>
                            <span style={styles.modaltitle}>Personal</span>
                        </div>
                    </div>
                    <div style={{width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: `conic-gradient(#f16752 0% ${company}%, #1226aa ${company}% ${salary}%, #ccc ${salary}% 100%)`}}></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" style={styles.redBtn} onClick={handleClose}>
                        Print
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PreviewModal;

const styles = {
    orangeBtn: {
        backgroundColor: '#f16752',
        borderColor: '#f16752',
        fontSize: 14,
    },
    redBtn: {
        backgroundColor: '#730b03',
        borderColor: '#730b03',
        color: '#fff',
        fontSize: 14,
    },
    modaltitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    pie : {
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "conic-gradient(red 4%, gray 0 8%, blue 0 17%,yellow 0 48%,purple 0 54%, orange 0)"
    }
};
