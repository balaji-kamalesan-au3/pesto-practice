import './UserContainer.css';
import {useEffect,useState} from 'react'
import DisplayUser from '../DisplayUser/DisplayUser';
import { apiURL, refreshImage } from '../../Constants/constants';
import Button from '../General Components/Button/Button';


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

        <Button src = {refreshImage.src} altText = {refreshImage.altText} name="Refresh" onClick = {() => fetchUsers()} />
        {!isLoading && <DisplayUser userData={usersList} />}
        
        {isLoading && <h1>Loading....</h1>}

    </div>
}