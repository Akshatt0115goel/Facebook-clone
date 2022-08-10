import React  from 'react';
import './Login.css'
import { Button } from '@mui/material';
import {auth,provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';


const Login = () =>{

  const [state,dispatch] = useStateValue();

  const signIn = () =>{
auth.signInWithPopup(provider)
.then((result)=>{
  dispatch({
    type:actionTypes.SET_USER,
    user:result.user,
  })
})
.catch((error)=>{alert(error.message);})
  }

return (

<div className = "login">

<div className="login__logo">

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/300px-Facebook_f_logo_%282021%29.svg.png" / >

<img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" />

</div>

<Button type="submit" onClick={signIn}>Sign In</Button>


</div>

)


}

export default Login;
