import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'

import { SectionHeading } from './SectionHeading';
import { MainButton } from './Button';

import tablet from '../public/assets/tab.png'

export const Offering = (props) => {
    return (
        <div className='mobile'>
            <section className='offering bgGrey sectionPadding pb-0'>
                <Container>
                    <Row className='g-4 align-items-center'>
                        <Col lg={5}>
                            <div className='mobile'>
                                <SectionHeading
                                    title={<><span>Curated offerings tailored to your investment style.</span></>}
                                />
                            </div>
                            <MainButton
                                title="Join the Waitlist"
                                btnURL="#newsletter"
                                customClass="btnRadius widthAuto mobile force learnmore white"
                            />
                        </Col>
                        <Image src={tablet} alt="Login" className='' />
                    </Row>
                </Container>
            </section>     
        </div>
    )
}