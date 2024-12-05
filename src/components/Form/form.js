import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './form.css';
import { VscLocation } from 'react-icons/vsc';
import { BsTelephoneFill, BsMailbox } from 'react-icons/bs';
    
const FormPage = () => { 

    return (
        <>
            <Container id="contactform"> 
                <Row>
                    <Col md={8} className="formstyle">
                        <div >
                            <h3>Contact Us</h3>
                            <form>
                                <input type="text" placeholder="Your Name" className="inputstyle" />
                                <input type='text' placeholder="Your Email" className="inputstyle" />
                                <input type='text' placeholder="Phone Number" className="inputstyle" />
                                <textarea type="text" placeholder="Your message here" className="inputstyle messagebox" />
                            </form>

                            <input type="button" className="inputstyle btnstyle" value="Send Message" />
                        </div>
                    </Col>

                    <Col md={4} className="contactinfo">
                        <div>
                            <h3>Visit Our Company</h3>
                            <div>

                                <div>
                                    <div className="iconstyle"><VscLocation className="icon" />
                                        <Col className="formcol">
                                            <h4>Minty Applications</h4>
                                            <p></p>
                                        </Col>
                                    </div>
                                    <div className="iconstyle"><BsTelephoneFill className="icon" />
                                        <Col className="formcol">
                                            <h4>Telephone Number</h4>
                                            <p>+91 9322008604 </p>
                                            <p>+91 8860033237</p>
                                        </Col><br />
                                    </div>
                                    <div className="iconstyle"><BsMailbox className="icon" />
                                        <Col className="formcol">
                                            <h4>E-Mail Us</h4>
                                            <p>mintyapplications@gmail.com</p>
                                        </Col><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FormPage;