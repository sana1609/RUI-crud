import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export function User({ name, username, email, about, displaypic, id,deleteButton }) {


  const history = useHistory();
  return (
   <section className="User">
    <Card sx={{
        maxWidth: 300,padding:"1.5rem",boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      }}>
     <img className="dp" src={displaypic} alt="profilepic" />
     <h1 className="name">{name}</h1>
     <CardContent>
    <Button variant="contained" style={{marginBottom:"1rem"}} onClick={()=> history.push(`/profile/${id}`)}>View Profile</Button>
      <h2 className="sub-head">Username</h2>
      <p className="info">{username}</p>
       <h2 className="sub-head">Email</h2>
      <p className="info">{email}</p>
       <h2 className="sub-head">Bio</h2>
          <p className="info">{about}</p>
          <Button variant="contained"
            onClick={() => history.push(`/edit-user/${id}`)} style={{ marginTop:"1.5rem",marginRight: "1rem" }}><EditIcon style={{ marginRight: "5px" }}/>Edit</Button>
          {deleteButton}
     </CardContent>
     <CardActions >
     </CardActions>
 </Card>
    </section>
  );

}
