import React from 'react';
import './service.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TfiAndroid } from 'react-icons/tfi';
import { FaReact, FaGamepad } from 'react-icons/fa';
import Artificial from '../../Images/artificial.png';

const Service = () => {

    return (
        <>
            <Container id='service'>
                <div><h2 className='service_title'>Our Services</h2></div>
                <Row className='set_service_icon'>

                    <Col md={4}>
                        <Col>
                            <div className='service_box'>
                                <TfiAndroid className='service_icon' /><br />
                            </div>
                        </Col>

                        <Col>
                            <h2>App Development</h2>
                        </Col>
                    </Col>

                    <Col md={4}>
                        <Col>
                            <div className='service_box'>
                                <FaReact className='service_icon' /><br />
                            </div>
                        </Col>

                        <Col>
                            <h2>Web Development</h2>
                        </Col>
                    </Col>

                    <Col md={4}>
                        <Col>
                            <div className='service_box'>
                                <img src={Artificial} className='service_icon' /><br />
                            </div>
                        </Col>

                        <Col>
                            <h2>Artificial Intelligence</h2>
                        </Col>
                    </Col>

                </Row>

                <Row className='set_service_icon'>
                    <Col md={{span:4, offset:2}}>
                        <Col>
                            <div className='service_box'>
                                <FaGamepad className='service_icon' /><br />
                            </div>
                        </Col>

                        <Col>
                            <h2>Game Development</h2>
                        </Col>
                    </Col>

                    <Col md={4}>
                        <Col>
                            <div className='service_box'>
                                <FaReact className='service_icon' /><br />
                            </div>
                        </Col>

                        <Col>
                            <h2>Degital Marketing</h2>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Service;