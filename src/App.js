import './App.css';
import { Switch, Route} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { UsersList } from './UsersList';
import { Home, NotFound } from './Home';
import { AddUser } from './AddUser';
import { EditUser } from './EditUser';
import { Profile } from './Profile';
import { EditProfile } from './EditProfile';
function App() {

  const history = useHistory();
  const styles = { color: "white", marginRight: "1rem", fontSize: "1.5rem" }
  const [mode, setMode] = useState("light");
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <Paper elevation={4} style={{ minHeight: "100vh"}}>
      <div className="App">
        <nav className="navbar">
          <AppBar position="static" style={{ marginBottom: "2.4rem" }}>
            <Toolbar style={{ flexWrap: "wrap" }}>
              <Button variant="text" style={styles} onClick={() => history.push("/")} >Home</Button>
              <Button variant="text" style={styles} onClick={() => history.push("/users")}>Users List</Button>
              <Button variant="text" style={styles} onClick={() => history.push("/create-user")}>Create User</Button>
                <Button startIcon={Theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                  style={{ margin: "2rem", fontSize: "1.5rem", color: "inherit", marginLeft: "auto" }}
                  variant="text">{mode === "Dark" ? "Light" : "Dark"} Mode</Button>
            </Toolbar>
          </AppBar>
        </nav>

        <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create-user">
              <AddUser />
            </Route>
              <Route path="/edit-user/:id">
              <EditUser />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
             <Route path="/edit/profile/:id">
              <EditProfile />
            </Route>
             <Route path="/users">
              <UsersList />
            </Route>
             <Route path="**">
              <NotFound />
            </Route>
          </Switch>
      </div>
    </Paper>
    </ThemeProvider >
  );
}
export default App;
