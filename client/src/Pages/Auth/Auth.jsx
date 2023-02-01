import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'

const Auth = () => {
    const [isSignup,setIsSignup] =useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch =() =>{
        setIsSignup(!isSignup)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email && !password){
            alert('Enter email an password')
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signup({ name, email, password}, navigate))
        }else{
            dispatch(login({ email, password}, navigate))
        }
        console.log({ name, email, password})
    }

    return (

        <section class = 'auth-section'>
            { isSignup && <AboutAuth />}
             <div class = 'auth-container-2'>
                { !isSignup && <img src={icon} alt = 'stack overflow' className='login-logo'/>}
                <form onSubmit ={handleSubmit}>
                    {
                        isSignup && (
                            <label htmlfor = 'name'>
                                <h4>Display name</h4>
                                <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}}/>
                            </label>
                        )


                    }
                    <label html for ="email">
                        <h4>Email</h4>
                        <input type ="email" name="email" id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                <label html for ="password">
                    <div style={{display : 'flex' , justifyContent : 'space-between'}}>
                        <h4>Password</h4>
                        { !isSignup && <p style={{color:"#007ac6", fontSize:'13px'}}>Forget password</p>}
                    </div>
                        <input type="password" name="password" id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                    {isSignup && <p style={{color : "#666767",fontSize:"13px"}}>Password must contains one letter<br/> one uppercase with one character<br/> and differnt symbol
                        
                        </p>}


                </label>
                    {
                        isSignup &&(
                            <label html for ='check'>
                                <input type="checkbox" id='check'/>
                                <p style={{fontSize:"13px"}}>opt-in to recieve occasional <br/>product updates,user research invitations,<br/>company announcements, and digets</p>

                            </label>
                        )
        
                        
                    }
                <button type ='submit' className='auth-btn'>{ isSignup ? 'Sign up':'Log in'}</button>
                {
                    isSignup&&(
                        <p style={{color : "#666767",fontSize:"13px"}}>
                            by clicking "sign up", you agree to  
                            <span style={{color:"#007ac6"}}>our terms of<br/> service</span> 
                            <span style={{color:"#007ac6"}}>privacy policy </span>and 
                            <span style={{color:"#007ac6"}}>cookie policy </span>
                        </p>
                    )
                }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                <button type = 'button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup?"Log in" : 'signup'}</button>

                </p>
            </div>
         </section>     
      )
    }         
export default Auth

