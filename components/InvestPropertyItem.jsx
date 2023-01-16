import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SectionHeading } from './SectionHeading';
import { InvestPropertyCard } from './InvestPropertyCard';
import { MainButton } from './Button';

import PelhamImg1 from '../public/assets/Pelham_Img1.jpg'
import PelhamImg2 from '../public/assets/Pelham_Img2.jpg'
import PelhamImg3 from '../public/assets/Pelham_Img3.jpg'

import SunRidgeImg1 from '../public/assets/SunRidge_Img1.jpg'
import SunRidgeImg2 from '../public/assets/SunRidge_Img2.jpg'
import SunRidgeImg3 from '../public/assets/SunRidge_Img3.jpg'

import PotomacImg1 from '../public/assets/Potomac_Img1.jpg'
import PotomacImg2 from '../public/assets/Potomac_Img2.jpg'
import PotomacImg3 from '../public/assets/Potomac_Img3.jpg'

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
                                    imgSrc1={PelhamImg1}
                                    imgSrc2={PelhamImg2}
                                    imgSrc3={PelhamImg3}
                                    title="Pelham"
                                    address="Westchester, NY"
                                    price="50.00"
                                    share="7,450"
                                    customClass="card1"
                                />
                                <InvestPropertyCard
                                    dividend="213.10"
                                    imgSrc1={SunRidgeImg1}
                                    imgSrc2={SunRidgeImg2}
                                    imgSrc3={SunRidgeImg3}
                                    title="Sun Ridge"
                                    address="Tuscon, AZ"
                                    price="11.25"
                                    share="7,450"
                                    customClass="card2"
                                    dividendPosition="right"
                                />
                                <InvestPropertyCard
                                    dividend="152.42"
                                    imgSrc1={PotomacImg1}
                                    imgSrc2={PotomacImg2}
                                    imgSrc3={PotomacImg3}
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