import React, { useState, useRef } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';

import { SectionHeading } from './SectionHeading';
import { MainButton } from './Button';

import mapImg from '../public/assets/map.svg'
import mobile_map from '../public/assets/mobile_map.svg'

export const InvestMarketsItem = (props) => {
    return (
        <>
            <section className='investMarketsBlock sectionPadding pb-4'>
                <Container>
                    <div className="investMarketsCol">
                        <Row className='g-4 g-xxl-5 align-items-center'>
                            <Col lg={6}>
                                <SectionHeading
                                    title={<>Invest in Markets Across America, <span>From the Comfort Of Your Home.</span></>}
                                    description={<>Savant is full of high-yield investment opportunities from across America. Invest in exclusive properties across the United States for as little as $25. Receive monthly dividends, and when you’re ready, simply trade your investments as if they were stocks.</>}
                                    customClass="white desktop"
                                />
                                <SectionHeading
                                    title={<>Invest in Markets Across America, <span>From the Comfort Of Your Home.</span></>}
                                    description={<>Unleash the true potential of your investment portfolio with Savant's exclusive properties, sourced from all corners of the US, and enjoy a steady stream of monthly dividends. Plus, with Savant, it's easy to buy, sell and trade your investments like stocks.</>}
                                    customClass="white mobile"
                                />
                                <MainButton
                                    title="Join the Waitlist"
                                    btnURL="#newsletter"
                                    customClass="btnRadius desktop force"
                                />
                                <MainButton
                                    title="Check Out FAQs"
                                    btnURL="#FAQ"
                                    customClass="btnRadius mobile force"
                                />
                            </Col>
                            <Col lg={6}>
                                <div className='investMarketsImg'>
                                    <Image src={mapImg} alt="Map" className='desktop'/>
                                </div>
                            </Col>
                            <Image src={mobile_map} alt="Map" className='mobile map_mobile'/>
                        </Row>
                    </div>
                </Container>
            </section>     
        </>
    )
}