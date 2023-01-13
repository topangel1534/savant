import style from './style.module.css'

export const SectionHeading = (props) => {
    return ( 
        <div className={`mainHeading ${style.mainHeading} ${props.customClass}`}>        
           <h2>{props.title}</h2>
           <p>{props.description}</p>
        </div>
    )
}