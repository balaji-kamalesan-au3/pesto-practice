import './Button.css'

export default function Button ({onClick,src,altText,name}){
    return  <button className="btn" onClick={onClick}>
                <img src={src} alt ={altText} /> 
                <div>{name}</div>
            </button>
}