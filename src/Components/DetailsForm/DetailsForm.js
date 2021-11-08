import './DetailsForm.css'

export default function DetailsForm({detailsForm}){
    const {username, password, gender, age} = detailsForm;
    return <>
        <div>
            <input  type ='text' value={username} disabled className='form-control' />
        </div>
        
        <div>
            <input  type ='password' value={password} disabled className='form-control' />
        </div>
       
        <div>
            <input  type ='text' value={gender} disabled className='form-control' />    
        </div>
        
        <div>
            <input  type ='text' value={age} disabled className='form-control' />
        </div> 
    </>

    
}