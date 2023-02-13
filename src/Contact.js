import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import * as Icon from 'react-bootstrap-icons'
import {AnimationOnScroll} from "react-animation-on-scroll";

function Contact() {
    return (
        <section id="contact" className="contact">
            <Row xs={1} sm={1} lg={2}>
                <Col className="l">
                    <div>
                        <AnimationOnScroll animateIn="animate__backInDown" duration={0.5} animateOnce={true}>
                            <h2>Contact</h2>
                        </AnimationOnScroll>

                        <AnimationOnScroll animateIn="animate__backInLeft" duration={0.5} animateOnce={true}>
                            <div>
                                <h3>Got a problem to solve?</h3>
                                <p>Feel free to contact me by email, then we can talk about it together</p>

                                <a className="mail" href="mailto:beastle9end@outlook.de">
                                    <Icon.Envelope/> beastle9end@outlook.de
                                </a>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </Col>
                <Col className="r">
                    <Form className="w-100 animate__animated animate__backInUp">
                        <AnimationOnScroll animateIn="animate__backInRight" duration={0.5} animateOnce={true}>
                            <FloatingLabel controlId="nameInput" label="Your name" className="mb-5">
                                <Form.Control type="name" placeholder="Max Mustermann"/>
                            </FloatingLabel>

                            <FloatingLabel controlId="emailInput" label="Email address" className="mb-5">
                                <Form.Control type="email" placeholder="max@mustermann.com"/>
                            </FloatingLabel>

                            <FloatingLabel controlId="messageTextArea" label="Message" className="mb-5">
                                <Form.Control as="textarea" placeholder="Leave a comment here"
                                              style={{height: '150px'}}/>
                            </FloatingLabel>

                            <Button className="btn-secondary" style={{paddingLeft: '35px', paddingRight: '35px'}}
                                    onClick={() => {
                                        let subject = encodeURIComponent(`Hey, my name is ${document.getElementById("nameInput").value}`);
                                        let body = encodeURIComponent(`${document.getElementById("messageTextArea").value}\nMy email is: ${document.getElementById("emailInput").value}`);

                                        let link = `mailto:beastle9end@outlook.de?subject=${subject}&body=${body}`;
                                        window.open(link, "_blank");
                                    }}>Submit</Button>
                        </AnimationOnScroll>
                    </Form>
                </Col>
            </Row>
        </section>
    )
}

export default Contact;