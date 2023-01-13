import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SectionHeading } from './SectionHeading';
import { InvestPropertyCard } from './InvestPropertyCard';
import { MainButton } from './Button';

import Img1 from '../public/assets/propertyImg1.png'
import Img2 from '../public/assets/propertyImg2.png'
import Img3 from '../public/assets/propertyImg3.png'

export const InvestPropertyItem = (props) => {
    return (
        <>
            <section className='investPrprtyBlock bgGrey sectionPadding pb-0'>
                <Container>
                    <Row className='g-4 align-items-center'>
                        <Col lg={5}>
                            <SectionHeading
                                title={<><span>Invest Your Money,</span> Not Your Time.</>}
                                description={<>Savant&apos;s team of experts does all the work for you!<br/>
                                All you have to do is invest and we&apos;ll take care of everything from finding properties to managing tenants and collecting rent checks.</>}
                            />
                            <MainButton
                                title="Join the Waitlist"
                                btnURL="#newsletter"
                                customClass="btnRadius widthAuto"
                            />
                        </Col>
                        <Col lg={7}>
                            <div className='investPrprtyList'>
                                <InvestPropertyCard
                                    dividend="112.36"
                                    imgSrc1={Img1}
                                    imgSrc2={Img2}
                                    imgSrc3={Img3}
                                    title="Masontry"
                                    address="Tuscon, AZ"
                                    price="50.00"
                                    share="7,450"
                                    customClass="card1"
                                />
                                <InvestPropertyCard
                                    dividend="213.10"
                                    imgSrc1={Img2}
                                    imgSrc2={Img3}
                                    imgSrc3={Img1}
                                    title="Sun Ridge"
                                    address="Tuscon, AZ"
                                    price="11.25"
                                    share="7,450"
                                    customClass="card2"
                                    dividendPosition="right"
                                />
                                <InvestPropertyCard
                                    dividend="152.42"
                                    imgSrc1={Img3}
                                    imgSrc2={Img1}
                                    imgSrc3={Img2}
                                    title="Potomac"
                                    address="Bowie, MD"
                                    price="25.00"
                                    share="3,218"
                                    customClass="card3"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>     
        </>
    )
}