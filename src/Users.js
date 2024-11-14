import { Box } from "@mui/material";
import Userform from "./Userform";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const  [users,setUsers] = useState([]);
    const [submitted,setSubmitted] = useState(false);
    
    const [selectedUser,setSelectedUser] = useState({});
    const [isEdit,setIsEdit] = useState(false);

    useEffect(() => {
        getUsers();
    },[]);
    

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
        .then(response => {
            setUsers(response.data?.response || []);
        })    
            .catch(error => {
                console.error('Axios error : ',error);
            });
        
    }

    const adduser = (data) => {
        setSubmitted(true);

        const payload = {
            id:data.id,
            name:data.name,
        }
        Axios.post('http://localhost:3001/api/adduser',payload)
        .then(response => {
            getUsers();
            setSubmitted(false);
            isEdit(false);
        })    
            .catch(error => {
                console.error('Axios error : ',error);
            });
        }   
        
        const updateuser = (data) => {
            setSubmitted(true);
    
            const payload = {
                id:data.id,
                name:data.name,
            }
            Axios.post('http://localhost:3001/api/updateuser',payload)
        .then(response => {
            getUsers();
            setSubmitted(false);
            isEdit(false);
        })    
            .catch(error => {
                console.error('Axios error : ',error);
            });
        } 
        
        const deleteUser = (data) => {
            Axios.post('http://localhost:3001/api/deleteeuser',data)
        .then(() => {
            getUsers();
        })    
            .catch(error => {
                console.error('Axios error : ',error);
            });
        } 

            

    return(
        <Box
            sx={{
                width:'calc(100%-100px)',
                margin:'auto',
                marginTop:'100px',
            }}

        >

          <Userform
            addUser={adduser}
            updateUser={updateuser}
            submitted={submitted}
            data={selectedUser}
            isEdit={isEdit}
          />
          <UsersTable 
          
                rows={users}
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)}
          />

        </Box>


    );


}

export default Users;