import React from "react";
import './ourproducts.css';
import { Container, Row, Col } from 'react-bootstrap';
import box1 from '../../Images/box1.png';
import box2 from '../../Images/box2.png';
import box3 from '../../Images/box3.png';
import box4 from '../../Images/box4.png';
       
const Products = () => { 

        return (
                <section>
                        <Container id="ourproducts">
                                <div className="productstyle"><h3>Our Products</h3></div>

                                <Row className="boxstyle">
 
                                        <Col md={3}>
                                                <div className="product_box textcol col1">
                                                        <img src={box1} />
                                                        <h2>Memo Note Book</h2>
                                                        <p>Your quick notes app where user can add small notes, lists before it sleep in mind.</p>

                                                </div>
                                        </Col>

                                        <Col md={3}>
                                                <div className="product_box textcol col2">
                                                        <img src={box2} />
                                                        <h2>The Virtual Shop</h2>
                                                        <p>You can use mobile device to pay with simple steps in value compellingly</p>

                                                </div>
                                        </Col>

                                        <Col md={3}>
                                                <div className="product_box textcol col3">
                                                        <img src={box3} />
                                                        <h2>My Caller</h2>
                                                        <p>Real users identify unknown numbers and protect them from scam calls, telemarketers, and malicious callers.</p>

                                                </div>
                                        </Col>

                                        <Col md={3}>
                                                <div className="product_box textcol col4">
                                                        <img src={box4} />
                                                        <h2>Sale My Shop</h2>
                                                        <p>You can use mobile device to pay with simple steps in value compellingly</p>

                                                </div>
                                        </Col>

                                </Row>
                                {/* <div>

                                </div> */}

                        </Container>
                </section>
        );
}

export default Products;