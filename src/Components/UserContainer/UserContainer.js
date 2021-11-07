import './UserContainer.css';
import {useEffect,useState} from 'react'
import DisplayUser from '../DisplayUser/DisplayUser';
import { apiURL, refreshImage } from '../../Constants/constants';


export default function UserContainer(){

    const [usersList, setUserList] = useState({});
    const [isLoading, setLoading] = useState(true)

    const fetchUsers = () => {
        setLoading(true)
        fetch(apiURL)
            .then((data) => data.json())
            .then ((data) => setUserList(data.results[0]))
            .then(() => setLoading(false))
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return <div className = 'container' >
        <button className="btn" onClick={() => fetchUsers()}>
            <img src={refreshImage.src} alt ={refreshImage.altText} /> 
            <div>Refresh</div>
        </button>
        {!isLoading && <DisplayUser userData={usersList} />}
        
        {isLoading && <h1>Loading....</h1>}

    </div>
}