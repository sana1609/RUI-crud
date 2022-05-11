import { useFormik } from "formik";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as yup from 'yup';

const formValidationSchema = ()=> yup.object({
  name: yup.string().required("Required Field"),
  displaypic: yup.string().required("Required Field").url("Enter a valid URL"),
  username: yup.string().required("Required Field").min(5,"Min 5 Characters"),
 email: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Email Invalid").required("Required Field"),
 about: yup.string().required("Required Field"),
 address:yup.string().required("Required Field"),
 country:yup.string().required("Required Field"),
  phone:yup.string().matches(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,"Phone number not valid").required("Required Field"),
})

export function EditProfile() {

 const { id } = useParams();
 const [user, setUser] = useState(null);
 const getUser = () => {
  fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/list-users/${id}`)
   .then((response) => response.json())
   .then((data) => setUser(data));
 };
 useEffect(getUser, [id]);

 return user ? <UpdateUser user={user} /> : ''
}
 function UpdateUser({ user }) {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched }
   = useFormik({
    initialValues: {
     name:user.name, displaypic:user.displaypic, username:user.username, email:user.email,
     about:user.about,address:user.address,country:user.country,phone:user.phone,
    },
    validationSchema: formValidationSchema,
    onSubmit: (updatedUser) => {
     updateUser(updatedUser)
    },
   })
  const history = useHistory();
  const updateUser = (updatedUser) => {
   fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/list-users/${user.id}`,
    {
     method: "PUT",
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(updatedUser)
    }).then(() => history.push(`/profile/${user.id}`))
  }

  const styles = { style: { fontSize: "1.8rem", margin: "1.2rem 0" } }
  const btnstyles = { margin: "2rem", fontSize: "1.5rem",width: '70%' }
  const helperTextStyle = {
   style: {
    fontSize: '1.5rem', margin: "0"
   }
  };

  return (

   <form onSubmit={handleSubmit} className="editUser-Form">
    <h1 className="TITLE"><EditIcon style={{ fontSize: "4rem" }} />Edit Profile</h1>
    <TextField style ={{width: '70%'}} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.name && touched.name} helperText={errors.name && touched.name && errors.name} variant="standard" value={values.name} id="name" name="name" onChange={handleChange} onBlur={handleBlur} label="Name" />
    <TextField style ={{width: '70%'}} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.displaypic && touched.displaypic} helperText={errors.displaypic && touched.displaypic && errors.displaypic} variant="standard" value={values.displaypic} id="displaypic" name="displaypic" onBlur={handleBlur} onChange={handleChange} label="Display Picture URL" />
    <TextField style ={{width: '70%'}} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.email && touched.email} helperText={errors.email && touched.email && errors.email} variant="standard" value={values.email} id="email" name="email" onBlur={handleBlur} onChange={handleChange} label="Email" />
    <TextField style ={{width: '70%'}} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.username && touched.username} helperText={errors.username && touched.username && errors.username} variant="standard" value={values.username} id="username" name="username" onBlur={handleBlur} onChange={handleChange} label="Username" />
    <TextField style ={{width: '70%'}} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.about && touched.about} helperText={errors.about && touched.about && errors.about} variant="standard" value={values.about} id="about" name="about" onBlur={handleBlur} onChange={handleChange} label="Bio" />
            <TextField style={{ width: '70%' }} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.address && touched.address} helperText={errors.address && touched.address && errors.address} variant="standard" value={values.address} id="address" name="address" onBlur={handleBlur} onChange={handleChange} label="Address" />
        <TextField style={{ width: '70%' }} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.country && touched.country} helperText={errors.country && touched.country && errors.country} variant="standard" value={values.country} id="country" name="country" onBlur={handleBlur} onChange={handleChange} label="Country" />
        <TextField style ={{width: '70%'}} FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.phone && touched.phone} helperText={errors.phone && touched.phone && errors.phone} variant="standard" value={values.phone} id="phone" name="phone" onBlur={handleBlur} onChange={handleChange} label="Phone Number" />
    <Button type="submit" style={btnstyles} color="success" variant="contained">Save Edit</Button>
   </form>
  );

}
