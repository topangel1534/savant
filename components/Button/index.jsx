import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col, } from 'react-bootstrap';
import style from './style.module.css'


export const MainButton = (props) => {
    return ( 
        <div className={`${style.button} ${props.customClass}`}>
            <a href={props.btnURL} passHref>
                {props.title}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    )
}