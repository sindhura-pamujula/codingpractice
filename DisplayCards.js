import React,{useEffect,useState} from 'react';
import axios from 'axios';
import ".././App.css";

const DisplayCards = () => {
    const [userAlbums,setUserAlbums]=useState([]);
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/albums');
                console.log("response",response);
                setUserAlbums(response.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
        
    },[]);
    return (
        <div className="album-cards">
           {userAlbums.map(user => (
               <div className="album-card">
                   <h1>{user.id}</h1>
                   <p>{user.title}</p>
               </div>
           ))} 
        </div>
    )
}

export default DisplayCards
