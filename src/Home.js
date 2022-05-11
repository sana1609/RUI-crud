import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import wallpaper from './user.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Home() {
  return (
    <div className="Home">
      <div className="TITLEBOX">
        <h1 className="TITLE"><AccountCircleIcon style={{fontSize:'3rem',marginRight:"0.5rem"}}/>User Profile Database</h1>
      </div>
      <img src={wallpaper}
        alt="User" className="galleryPic" />
    </div>
  );
}
export function NotFound() {
  const history = useHistory();
  return (
    <div className="Error">
      <Button variant="contained" style={{ width: "15rem" }} onClick={() => history.push("/")}>Back to Home</Button>
      <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
        alt="404-Error" />
    </div>

  );
}
