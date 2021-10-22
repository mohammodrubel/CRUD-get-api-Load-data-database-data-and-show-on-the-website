import React,{useState,useEffect} from 'react';


const Users = () => {
    const [users,setUsers] = useState([])

    useEffect (()=>{
        fetch('http://localhost:5000/users')
        .then(Response => Response.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h2>This is Users </h2>
            <ul> 
                {
                    users.map(user => <li key={user._id}>{user.name}  {user.email} <button> delete </button> <button>update</button> </li>)
                }
            </ul>
        </div>
    );
};

export default Users;