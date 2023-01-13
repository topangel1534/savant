import Image from 'next/image'
import style from './style.module.css'

export const InvestCard = (props) => {
    return ( 
        <div className={`${style.investCard} ${props.customClass} `}>
           <i><Image src={props.imgSrc} alt={props.title} /></i>
           <h3>{props.title}</h3>
           <p>{props.description}</p>
        </div>
    )
}