import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AnimationOnScroll} from "react-animation-on-scroll";

import AboutImage from './assets/about.jpg';

function About() {
    return (
        <section id="about">
            <Row xs={1} sm={1} lg={2}>
                <AnimationOnScroll animateIn="animate__slideInLeft" duration={0.5} animateOnce={true}>
                    <Col>
                        <img src={AboutImage} style={{width: '100%'}}/>
                    </Col>
                </AnimationOnScroll>
                <Col className="about-right">
                    <div className="inner">
                        <AnimationOnScroll animateIn="animate__backInDown" duration={0.5} animateOnce={true}>
                            <h2>About me</h2>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__backInUp" duration={0.5} animateOnce={true}>
                            <p>I am a 23 year old software developer from Zell (Mosel), Germany. <br></br>
                                I wrote my first program at the age of 14 and have been passionate about developing
                                software
                                ever since. <br></br>During this time I have independently acquired a wide knowledge by
                                working on many projects.<br></br>I really enjoy finding simple and well thought out
                                solutions to complex problems and regularly expand my horizons more and more.<br></br>When
                                I'm not programming, I'm usually jogging, hanging out with friends, or spending time
                                with my
                                Greek tortoises.</p>
                        </AnimationOnScroll>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default About;