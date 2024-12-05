import './footer.css';
import { Container, Grid, Typography } from "@mui/material";
import { Row, Col } from 'react-bootstrap';
import React from "react";
import Logofooter from '../../Images/logofooter.png';

const Footer = () => {

    return (
        <div id='footerstyle'>  
            <Container> 
                <Grid>
                    <Row>

                        <Col>

                                <div className='footer_text'>
                                    Copyright © mintyapplications.com all rights reserved.
                                </div>
                    
                        </Col>
                    </Row>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;