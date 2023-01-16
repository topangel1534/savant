import React, { useState, useRef } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css'

import { SectionHeading } from './SectionHeading';
import { Newsletter } from './Newsletter';

import bannerImg from '../public/assets/bannerImg.png'

import graphIcon from '../public/assets/graphIcon.svg'

export const HomeBanner = () => {
    return ( 
        <div className={`bannerPattDiv ${styles.banner}`}>
            <Container>
                <Row className='g-4'>
                    <Col lg>
                        <div className={`banerSlideOuter ${styles.banerSlideOuter}`}>
                            <SectionHeading
                                title={<>The Easiest Way to <span>Invest in Real Estate</span></>}
                                description={<>Join the waitlist to unlock the high returns of real estate, without the hassle of being a landlord. Earn passive income every month, and trade your investments anytime.</>}
                                customClass="big"
                            />
                            <Newsletter />                   
                        </div>
                    </Col>
                    <Col lg className='d-none d-lg-block'></Col>
                </Row>
            </Container>
            <div className={styles.bnrRghtOuter}>
                <div className={styles.bnrRghtTextFrst}>
                    <h3 className='mb-3'>+$302.10</h3>
                    <p>You Received a Dividend!</p>
                </div>
                <div className={styles.bnrRghtTextScnd}>
                    <div className='mb-3'>
                        <Image src={graphIcon} alt="Graph Icon" width={313} height={48}/>
                    </div>
                    <p>Join the waitlist to unlock the high returns of real estate</p>
                </div>
                <div className={styles.bnrRghtTextThrd}>
                    <p>Earn passive income every month!</p>
                </div>
                <div className={styles.bnrRghtImg}>
                    <Image src={bannerImg} alt="Banner Image" width={944} height={510}/>
                </div>
            </div>
		</div>
    )
}