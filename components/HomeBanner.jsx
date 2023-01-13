import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Home.module.css'

import { SectionHeading } from './SectionHeading';
import { Newsletter } from './Newsletter';

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
		</div>
    )
}