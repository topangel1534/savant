import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { InvestCard } from './InvestCard';
import Icon1 from '../public/assets/investIcons/Icon1.svg'
import Icon2 from '../public/assets/investIcons/Icon2.svg'
import Icon3 from '../public/assets/investIcons/Icon3.svg'

export const InvestItem = (props) => {
    return (
        <>
            <section className='investBlock bgGrey'>
                <div className='investBlockInner sectionPadding'>
                    <Container>
                        <div className="investRow">
                            <Row className='g-4'>
                                <Col className='desktop' lg={4}>
                                    <InvestCard
                                        imgSrc={Icon1}
                                        title="Invest with as little as $25"
                                        description="Access high-yield real estate investments, typically only available to accredited investors."
                                    />
                                </Col>
                                <Col className='mobile' lg={4}>
                                    <InvestCard
                                        imgSrc={Icon1}
                                        title="Invest with less"
                                        description="Access high-yield real estate investments without needing a ton of money or experience."
                                    />
                                </Col>
                                <Col className='desktop' lg={4}>
                                    <InvestCard
                                        imgSrc={Icon2}
                                        title="Simple and secure"
                                        description="Protect your investments with the best long-run asset class in modern history, without any of the operational headache."
                                    />
                                </Col>
                                <Col className='mobile' lg={4}>
                                    <InvestCard
                                        imgSrc={Icon2}
                                        title="Simple and secure"
                                        description="Invest confidently with Savant's   SEC-regulated platform - start your investment journey in just 5 minutes!"
                                    />
                                </Col>
                                <Col className='desktop' lg={4}>
                                    <InvestCard
                                        imgSrc={Icon3}
                                        title="Trade anytime, anywhere"
                                        description="Achieve financial flexibility and freedom through our exchange, which allow you to trade real estate like stocks."
                                    />
                                </Col>
                                <Col className='mobile' lg={4}>
                                    <InvestCard
                                        imgSrc={Icon3}
                                        title="Trade anytime, anywhere"
                                        description="Trade your shares anytime, from anywhere, just like you would with a REIT."
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>     
        </>
    )
}