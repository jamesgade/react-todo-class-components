import { Component } from "react";
import Footer from "./Footer";

class About extends Component {
    render() {
        return (
            <div>
                <h3>About</h3>
                <p>This is a React CRUD Application built using Class-Components & JavaScript.</p>
                <h5>How to use?</h5>
                <p> - Click on <span style={{color: 'green'}}>'Add'</span> to add a task</p>
                <p> - Double click on a task to <span style={{color: 'green'}}>toggle</span> reminder</p>
                <p> - Click on <span style={{color: 'red'}}>'X'</span> to delete a task</p>
                <Footer goto="/" label="Go to Tasks" />
            </div>
        )
    }
}

export default About;
