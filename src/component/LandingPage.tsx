import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../store/reducers/chatSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
const dispatch=useDispatch();
const navigate=useNavigate();

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
});

const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = () => {

  console.log(formData);
  dispatch(userSignUp(formData.firstName,formData.lastName));
  navigate('/home');

};

  return (
    <section>
      <div className="container-loging">
        <h3>Welcome to the Para Shift</h3>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="success"
        onClick={()=>{handleSubmit()}}>Sign Up</Button>
      </div>
    </section>
  )
}

export default LandingPage;