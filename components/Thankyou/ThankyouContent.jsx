import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SectionHeading } from '../SectionHeading';
import YouTube from 'react-youtube';

import Image from 'next/image'
import Bell from "../../public/assets/thankyouBell.svg";
import style from "./style.module.css"

export const ThankyouContent = (props) => {
    const videoId = 'T-dTy9eb3-w';
    const opts = {
        height: '526',
        playerVars: {
          autoplay: 0,
          controls: 0,
        },
      };
      
    return (
        <>
            <section className='investPrprtyBlock bgGrey sectionPadding pb-0 thankBack'>
                <Container>
                    <Row className='g-4 align-items-center'>
                        <Col lg={5} className={style.content}>
                            <Image src={Bell} width={233} height={233} />
                            <span className={style.smSpacer}></span>
                            <SectionHeading
                                title={<><span>Thank you for joining the waitlist</span></>}
                            />
                        </Col>
                        <Col lg={7}>
                            <YouTube videoId={videoId} opts={opts} className={style.video} />
                        </Col>
                    </Row>
                </Container>
            </section>     
        </>
    )
}
