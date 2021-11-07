import DetailsForm from '../DetailsForm/DetailsForm';
import './DisplayUser.css'

export default function DisplayUser ({userData}){
    console.log(userData)
    const {name, email,gender,picture,location,phone,login} = userData;
    const age =userData.dob.age;
    const {username ,password} = login;
    const detailsForm = {username,password,gender,age}

    return <div className="userDetailsContainer">

        <div className='mainUserDetails'>
            <div className='mainUserDetails-div'><img src={picture.large}  className="avatar" alt="User Avatar"/></div>
            <div className='mainUserDetails-div'> {`${name.first} ${name.last}`}</div>
            <div className='mainUserDetails-div'>{phone}</div>
            <div className='mainUserDetails-div'>{email}</div>
        </div>
        <div className="accountDetails">
            <h3>Account Details</h3>
            <DetailsForm  detailsForm={detailsForm} />
        </div>
        <div className="locationDetails">
            <h3>Address</h3>
            <div>
                <p>{`${location.street.number} / ${location.street.name}, `}</p>
                <p>{`${location.city}, `}</p>
                <p>{`${location.state}, `}</p>
                <p>{`${location.country} - ${location.postcode}, `}</p>
            </div>
        </div>
        
    </div>
}