import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import RadioGroup from '../components/RadioGroup';
import Rating from '../components/Rating';
import Card from 'react-bootstrap/Card';
import TextBox from '../components/TextBox';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import PreviewModal from './PreviewModal';
import Modal from 'react-bootstrap/Modal';
import { AiFillCheckCircle } from 'react-icons/ai';
import axios from 'axios'

function GridComplexExample() {
    const [rate, setRate] = useState(2);
    const [name, setName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [designation, setDesignation] = useState('');
    const [department, setDepartment] = useState('');
    const [jobSatisfaction, setJobSatisfaction] = useState();
    const [valueAtWork, setValueAtWork] = useState();
    const [valueAtWorkComments, setValueAtWorkComments] = useState();
    const [stressAnxiety, setStressAnxiety] = useState();
    const [stressComments, setStressComments] = useState();
    const [appraisalRating, setAppraisalRating] = useState();
    const [hybridModel, setHybridModel] = useState();
    const [companyPolicy, setCompanyPolicy] = useState();
    const [company, setCompany] = useState();
    const [personal, setPersonal] = useState();
    const [salary, setSalary] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);

    const jobSatisfactionList = [
        { id: 1, value: 'Very satisfied' },
        { id: 2, value: 'Somewhat satisfied' },
        { id: 3, value: 'Neutral' },
        { id: 4, value: 'Somewhat dissatisfied' },
        { id: 5, value: 'Very dissatisfied' },
    ];

    const optionList = [
        { id: 1, value: 'Yes' },
        { id: 2, value: 'No' }
    ];

    const numberList = [
        { id: 1, value: '20%' },
        { id: 2, value: '40%' },
        { id: 3, value: '60%' },
        { id: 4, value: '80%' },
        { id: 5, value: '100%' }
    ];

    const submitSurvey = () => {
        const survey = {}
        survey.empId = employeeId;
        survey.name = name;
        survey.department = department;
        survey.designation = designation;
        jobSatisfactionList.map((item) => {
            if (item.id == jobSatisfaction) {
                survey.jobSatisfaction = item.value;
            }
        });
        survey.valueAtWork = valueAtWork == 1 ? true : false;
        survey.valueAtWorkComments = valueAtWorkComments;
        survey.stressAnxiety = stressAnxiety == 1 ? true : false;
        survey.stressComments = stressComments;
        survey.workBalance = 5;
        survey.appraisalRating = parseInt(appraisalRating);
        survey.hybridModel = parseInt(hybridModel);
        survey.companyPolicy = parseInt(companyPolicy);

        const headers = {
            'Content-Type': 'application/json',
        };

        axios.post('http://localhost:8080/api/surveys/', survey, {headers})
        .then(response => setShow(true));
        
    };

    const handleName = (event) => setName(event.target.value);
    const handleEmployeeId = (event) => setEmployeeId(event.target.value);
    const handleDesignation = (event) => setDesignation(event.target.value);
    const handleDepartment = (event) => setDepartment(event.target.value);
    const handleJobSatisfaction = (id) => {
        setJobSatisfaction(id);
        setPersonal(id);
    };
    const handleValueAtWork = (id) => {
        setValueAtWork(id);
        setPersonal(id == 1 ? personal+id : personal-id);
    };
    const handleValueAtWorkComments = (event) => setValueAtWorkComments(event.target.value);
    const handleStressAnxiety = (id) => {
        setStressAnxiety(id);
        setPersonal(id == 1 ? personal-id : personal+id);
    };
    const handleStressComments = (event) => setStressComments(event.target.value);
    const handleAppraisalRating = (event) => {
        setAppraisalRating(event.target.value);
        setSalary(event.target.value*10);
    };
    const handleHybridModel = (event) => {
        setHybridModel(event.target.value);
        setCompany(event.target.value);
    };
    const handleCompanyPolicy = (event) => {
        setCompanyPolicy(event.target.value);
        let policyPercentage = parseInt(event.target.value);
        let cummulative = (parseInt(company)+policyPercentage)*10;
        let final = cummulative/2;
        setCompany(final);
        setSalary(salary < company ? salary-company : salary);
        setPersonal(personal*10);
    };

    return (
        <>
            <Card className='mt-3 mb-3' style={{ width: '70%' }}>
                <Card.Header style={styles.title}><Card.Title>Employee levels of happiness and satisfaction survey</Card.Title></Card.Header>
                <Card.Body>
                    <>
                        <Row className="mb-3">
                            <TextBox label="Employee ID" handleChild={handleEmployeeId} />
                            <TextBox label="Name" handleChild={handleName} />
                        </Row>

                        <Row className="mb-3">
                            <TextBox label="Designation" handleChild={handleDesignation} />
                            <TextBox label="Department" handleChild={handleDepartment} />
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="formGridEmail">
                                <Form.Label style={styles.questions}>How would you describe your overall level of job satisfaction?</Form.Label>
                                <div className="mb-3">
                                    <RadioGroup data={jobSatisfactionList} group='jobs' handleChild={handleJobSatisfaction} />
                                </div>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="formGridPassword">
                                <Form.Label style={styles.questions}>Do you feel valued at work?</Form.Label>
                                <div className="mb-3">
                                    <RadioGroup data={optionList} group='valued' handleChild={handleValueAtWork} />
                                </div>
                            </Form.Group>
                            <TextArea label='If No, please explain.' handleChild={handleValueAtWorkComments} />
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="formGridPassword">
                                <Form.Label style={styles.questions}>Does your job cause stress or anxiety?</Form.Label>
                                <div className="mb-3">
                                    <RadioGroup data={optionList} group='stress' handleChild={handleStressAnxiety} />
                                </div>
                            </Form.Group>
                            <TextArea label='If Yes, please explain.' handleChild={handleStressComments} />
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Select label='How was your last appraisal' options={numberList} handleChild={handleAppraisalRating} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Select label='Are you ok with hybrid model' options={numberList} handleChild={handleHybridModel} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Select label='Are you ok with company policies' options={numberList} handleChild={handleCompanyPolicy} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">

                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I agree the terms and conditions" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" id="formGridCheckbox">
                        <Rating rating={rate} onClick={(i) => setRate(i + 1)} style={styles.pointer} />
                    </Form.Group> */}

                        <Button style={styles.navyBtn} onClick={() => submitSurvey()}>
                            Submit
                        </Button>
                        {/* <SubmitModal /> */}
                        <PreviewModal company={company} salary={salary} personal={personal} />

                    </>

                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={styles.modaltitle}>Submit Survey</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ textAlign: 'center' }}>
                        <AiFillCheckCircle fontSize="50px" color="green" />
                        <div><span style={styles.modaltitle}>Thanks for submitting</span></div>
                        <div className='mt-3'><span style={styles.modaltitle}>Rate our application</span></div>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Rating rating={rate} onClick={(i) => setRate(i + 1)} style={styles.pointer} />
                        </Form.Group>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default GridComplexExample;

const styles = {
    questions: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    inputLabels: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1226aa'
    },
    orangeBtn: {
        backgroundColor: '#f16752',
        borderColor: '#f16752',
        fontSize: 14,
    },
    navyBtn: {
        backgroundColor: '#1226aa',
        borderColor: '#1226aa',
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
};