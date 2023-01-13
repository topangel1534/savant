import React, { useState, useRef } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';

import { SectionHeading } from './SectionHeading';
import { MainButton } from './Button';

import mapImg from '../public/assets/map.svg'

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
                                    customClass="white"
                                />
                                <MainButton
                                    title="Join the Waitlist"
                                    btnURL="#newsletter"
                                    customClass="btnRadius"
                                />
                            </Col>
                            <Col lg={6}>
                                <div className='investMarketsImg'>
                                    <Image src={mapImg} alt="Map" width={694} height={440}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>     
        </>
    )
}