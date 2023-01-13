import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

import { SectionHeading } from './SectionHeading';
import { Faq } from './Faq';
import { FaqMobile } from './FaqMobile';

export const FaqItem = (props) => {
    return (
        <>
            <section className='faqBlock sectionPadding'>
                <Container>
                    <SectionHeading
                       title="FAQ"
                        description="Commonly asked questions about Savant, and how our platform works!"
                    />
                    <div className='d-none d-lg-block'>
                        <Faq />
                    </div>
                    <div className='d-lg-none'>
                        <FaqMobile />
                    </div>
                </Container>
            </section>    
        </>
    )
}