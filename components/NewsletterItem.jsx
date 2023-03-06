import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Newsletter } from './Newsletter';

import { SectionHeading } from './SectionHeading';

export const NewsletterItem = (props) => {
    return (
        <>
            <section id="newsletter" className='newsletterBlock sectionPadding'>
                <Container>
                    <div className="newsletterCol">
                        <SectionHeading
                            title="Launching Soon!"
                            description="Join the waitlist to receive updates. Be one of the first to create a free account and instantly access high-yield properties."
                            customClass="text-center white desktop"
                        />
                        <SectionHeading
                            title="Launching Soon!"
                            description={<>Join the waitlist by <strong>April 3</strong> to be apart of the <strong>Alpha Launch</strong>. Spots are limited!</>}
                            customClass="text-center white mobile"
                        />
                        <Newsletter />
                    </div>
                </Container>
            </section>     
        </>
    )
}