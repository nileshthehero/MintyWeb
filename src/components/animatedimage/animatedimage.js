import React from 'react';
import './animatedimage.css';
import { BsArrowRightShort } from 'react-icons/bs';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import img1 from '../../Images/main-img.png';

const Animatedimage = () => {

    return (

        <>
            <Container fluid id='image_section'>
                <Row>
                    <Col md={6}>
                        <div className='imagestyle'>
                            {/* <img src={img1} /> */}


                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img1}
                                        alt="First slide"
                                    />
                                    
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img1}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={img1}
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                            </Carousel>


                        </div>
                    </Col>
                    <Col md={6} className="textstyle">
                        <div className='titlestyle'>
                            <div>
                                <h2>Powering the Future of <span>IT</span></h2>
                                <p>Powering IT Solution is an ambitious concept that encompasses the use of current and emerging technologies to create more efficient, cost-effective and innovative solutions for businesses. </p>

                                <div className='mainbutton'><a href='#'>View more<BsArrowRightShort className='btnicon' /></a></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Animatedimage;