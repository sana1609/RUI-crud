import { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { User } from './User';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Button from '@mui/material/Button';
import ClipLoader from "react-spinners/ClipLoader";


export function UsersList() {
  const [users, setUsers] = useState([]);
    //loading animation
     let [Loading, setLoading] = useState(false);
  const getUsers = () => {
        setLoading(true);
    fetch("https://6166c4da13aa1d00170a66f9.mockapi.io/list-users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  };
  useEffect(getUsers, []);



  const deleteUser = (id) => {
    fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/list-users/${id}`,
      {
        method:"DELETE"
      }).then(() => {
       getUsers()
      })

  }

  return (
    <section className="UsersList">
      <h1 className="TITLE"><PersonIcon style={{ fontSize: "5rem" }} /> Users List</h1>
      {Loading ? <ClipLoader color="D0021B" loading={Loading} size={75} /> :
        <div className="Users">
          {
            users.map(({ name, username, email, about, displaypic, id }, index) => <User name={name}
              username={username} email={email} about={about} displaypic={displaypic}
              id={id} key={index} deleteButton={<Button variant="contained" color="error"
                onClick={() => deleteUser(id)} style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}><PersonRemoveIcon style={{ marginRight: "0.5rem" }} /> Delete</Button>} />)
          }

        </div>}
    </section>
  );


}
