import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col, Accordion, Tab, Tabs } from 'react-bootstrap';

export const Faq = (props) => {
    return (
        <div className='faqRow'>
            <div className="tabContentsOuter">
                <Tabs
                    defaultActiveKey="socialMedia"
                    id="uncontrolled-tab-example"
                >
                    <Tab
                        eventKey="socialMedia"
                        title={<>Minimum Investment Amount?</>}
                    >
                        <div className='tabContentDiv'>
                            <Row>
                                <Col lg={12}>
                                    <div className='tabContentInfo'>
                                        <h3>Minimum Investment Amount?</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="Who pays for maintenance expenses?"
                        title={<>Who pays for maintenance expenses?</>}
                    >
                        <div className='tabContentDiv'>
                            <Row>
                                <Col lg={12}>
                                    <div className='tabContentInfo'>
                                        <h3>Who pays for maintenance expenses?</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="Do I need to be accredited to invest??"
                        title={<>Do I need to be accredited to invest?</>}
                    >
                        <div className='tabContentDiv'>
                            <Row>
                                <Col lg={12}>
                                    <div className='tabContentInfo'>
                                        <h3>Do I need to be accredited to invest?</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="How often are dividends sent to holders?"
                        title={<>How often are dividends sent to holders?</>}
                    >
                        <div className='tabContentDiv'>
                            <Row>
                                <Col lg={12}>
                                    <div className='tabContentInfo'>
                                        <h3>How often are dividends sent to holders?</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    <Tab
                        eventKey="website"
                        title={<>What are my tax obligations?</>}
                    >
                        <div className='tabContentDiv'>
                            <Row>
                                <Col lg={12}>
                                    <div className='tabContentInfo'>
                                        <h3>What are my tax obligations?</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}