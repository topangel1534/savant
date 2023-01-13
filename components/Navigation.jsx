import React, { useState, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Container, Row, Col, Offcanvas, Form, Button } from 'react-bootstrap';
import header from '../styles/Header.module.css'
import { MainButton } from '../components/Button';
import logo from '../public/assets/logo.svg'
import searchIcon from '../public/assets/searchIcon.svg'
import loginIcon from '../public/assets/loginIcon.svg'

export const Header = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchShow, setSearchShow] = useState("false");
    const searchToggle = () => {
        setSearchShow(!searchShow);
    };
    return (
        <>
        <Offcanvas show={show} onHide={handleClose} className="offcanvasOuter">
            <Offcanvas.Header closeButton className="offcanvasHeader">
            <div className="offcanvasLogo">
                <Link href="/" passHref>
                    <Image src={logo} alt="logo" width={189} height={42}/>
                </Link> 
            </div>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvasBody">
                <div className={`${header.navMenuOutr}`}>
                    <ul>
                        <li className={`${props.homeActive}`}>
                            <Link href="/">Invest</Link>
                        </li>
                        <li className={`${props.faqActive}`}>
                            <Link href="/">FAQs</Link>
                        </li>
                        <li className={`${props.aboutActive}`}>
                            <Link href="/">About</Link>
                        </li>
                    </ul>       
                </div>
                <div className='d-flex align-items-center justify-content-center gap-4 my-3'>
                    <span className={`${header.loginBtn}`}>
                        <Link href="/" passHref>
                            <Image src={loginIcon} alt="Login" width={28} height={28} />
                        </Link>
                    </span>
                </div>
                <MainButton
                    title="Join the Waitlist"
                    btnURL="#newsletter"
                    customclassName="btnSmall"
                />
            </Offcanvas.Body>
        </Offcanvas>
        
        <div className={`${header.navBarMain}`}>
            <Container>
                <Row className='align-items-center justify-content-between g-3'>
                    <Col className='col-auto'>
                        <div className={header.logo}>
                            <Link href="/" passHref>
                                <Image src={logo} alt="logo" width={189} height={42}/>
                            </Link>                  
                        </div>
                    </Col>
                    <Col>
                        <div className='d-none d-md-block'>
                            <div className={`${header.navMenuOutr}`}>
                                <ul>
                                    <li className={`${props.homeActive}`}>
                                        <Link href="/">Invest</Link>
                                    </li>
                                    <li className={`${props.faqActive}`}>
                                        <Link href="/">FAQs</Link>
                                    </li>
                                    <li className={`${props.aboutActive}`}>
                                        <Link href="/">About</Link>
                                    </li>
                                </ul>       
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`d-none d-md-flex gap-3 gap-xl-4 align-items-center justify-content-end ${header.hdrBtns}`}>
                            <span className={`${header.srchBtn}`}>
                                <a onClick={searchToggle}>
                                    <Image src={searchIcon} alt="Search" width={24} height={24} />
                                </a>
                                <div className={`srchCol ${header.srchCol} ${searchShow ? null : "visible"}`}>
                                    <Form action="" method="GET">
                                        <Form.Control type="text" name="search" placeholder="Search" />      
                                    </Form>
                                </div>
                            </span>
                            <span className={`${header.loginBtn}`}>
                                <a>
                                    <Image src={loginIcon} alt="Login" width={28} height={28} />
                                </a>
                            </span>
                            <MainButton
                                title="Join the Waitlist"
                                btnURL="#newsletter"
                                customClass="btnRadius"
                            />
                        </div>
                        <div className="d-flex d-md-none align-items-center justify-content-end gap-3">
                            <span className={`${header.srchBtn}`}>
                                <a onClick={searchToggle}>
                                    <Image src={searchIcon} alt="Search" width={24} height={24} />
                                </a>
                                <div className={`srchCol ${header.srchCol} ${searchShow ? null : "visible"}`}>
                                    <Form action="" method="GET">
                                        <Form.Control type="text" name="search" placeholder="Search" />      
                                    </Form>
                                </div>
                            </span>
                            <div className="offcanvasBtn">
                                <Button variant="" className="btn-menuBar" onClick={handleShow}>
                                    <span className="bar1"></span>
                                    <span className="bar2"></span>
                                    <span className="bar3"></span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>      
        </>
    )
}