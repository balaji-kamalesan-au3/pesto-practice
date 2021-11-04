import './UserContainer.css';
import {useEffect,useState} from 'react'
import DisplayUser from './DisplayUser';


export default function UserContainer(){

    const [usersList, setUserList] = useState({});
    const [isLoading, setLoading] = useState(true)

    const fetchUsers = () => {
        setLoading(true)
        fetch('https://randomuser.me/api')
            .then((data) => data.json())
            .then ((data) => setUserList(data.results[0]))
            .then(() => setLoading(false))
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return <div className = 'container' >
        <button className="btn" onClick={() => fetchUsers()}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/refresh--v2.png" alt ="Refresh_Icon" /> 
            <div>Refresh</div>
        </button>
        {!isLoading && <DisplayUser userData={usersList} />}
        
        {isLoading && <h1>Loading....</h1>}

    </div>
}