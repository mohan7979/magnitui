import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import GridComplexExample from "./Survey";

function Location() {
    return (
        <div>
            <Header filter={false} />
            <header className="App-header">
                <GridComplexExample />
            </header>
        </div>
    );
}

export default Location;

const styles = {
    floatingLabel: {
        color: '#000',
        width: '250px'
    },
    title: {
        color: '#091644',
        fontSize: 30,
        marginBottom: 10
    }
};