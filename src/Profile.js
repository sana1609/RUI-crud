import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
export function Profile() {
 const { id } = useParams();
 const history = useHistory();
  const [user, setUser] = useState([]);
   //loading animation
  let [Loading, setLoading] = useState(false);
  const getUser = () => {
       setLoading(true);
    fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/list-users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data)).finally(() => setLoading(false));
 };
 useEffect(getUser, [id]);

 return (

  <div className="Profile">
   {Loading ? <ClipLoader color="D0021B" loading={Loading} size={75} /> :
    <><div className="header">
     <h1 style={{
      fontSize: "2rem", margin: "0", boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      background: ' rgba( 10, 86, 176, 0.2 '
     }}
     >Welcome to your Profile, <span className="name">{user.name}</span></h1>
     <img className="dp" src={user.displaypic} alt="profilepic" />
     <h2 className="sub-head">Username: </h2>
     <p className="info">{user.username}</p>
     <h2 className="sub-head" style={{marginBottom:"0"}}>Bio</h2>
     <p className="info">{user.about}</p>
<Button variant="contained"
            onClick={() => history.push(`/edit/profile/${id}`)} style={{ fontSize:"1.5rem",marginTop:"2rem",marginRight: "1rem",width:"70%",height:"4rem" }}><EditIcon style={{ marginRight: "5px" }}/>Edit Profile</Button>
    </div>
     <div className="More-Info">
      <h1>More Information</h1>
      <h1 className="sub-head">Address</h1>
      <p className="info">{user.address}</p>
      <h1 className="sub-head">Country</h1>
      <p  className="info">{user.country}</p>
      <h1 className="sub-head">Phone Number</h1>
      <p  className="info">{user.phone}</p>
     </div></>
   }
</div>


  );

}
