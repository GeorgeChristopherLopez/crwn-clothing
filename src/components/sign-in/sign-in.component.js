import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""

        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error){
            console.log(error)
            alert("Invalid Sign In Details")
        }
       
    }

    // works with any input via derefencing
    handleChange = event =>{
        const {value, name } = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
           <div className="sign-in">
           <h2>I already have an accout</h2>
           <span>Sign in with your username and passwords</span>
       
            <form onSubmit={this.handleSubmit}>
            <FormInput name="email" type="email" label="email" required value={this.state.email} handleChange={this.handleChange}/>
          
            <FormInput name="password" type="password" label="password" required value={this.state.password} handleChange={this.handleChange}/>
          
            <div className="buttons">
            <CustomButton type="submit" name="submit" value="Submit Form">Sign In</CustomButton>
            <CustomButton isGoogleSignIn="true" onClick={signInWithGoogle}>Sign In With Google</CustomButton>

            
            </div>
         
            </form>

            </div> 


        );
    }

}

export default SignIn;