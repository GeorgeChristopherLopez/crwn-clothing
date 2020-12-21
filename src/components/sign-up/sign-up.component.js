import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import { Component } from 'react'

class SignUp extends Component {
    constructor(){
        super()

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit= async event => {
        event.preventDefault();
        const  {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error){
            console.error(error);
        }
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    render (){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
                <div className='sign-up'>

                   <h2 className="title">I do not have an account</h2>
                   <span >Sign up with your email and password</span>
                   <form className="sign-up-form" onSubmit={this.handleSubmit}>
                   <FormInput name="displayName" type="text" label="Display Name" required value={displayName} handleChange={this.handleChange}/>
                   <FormInput name="email" type="email" label="email" required value={email} handleChange={this.handleChange}/>
                   <FormInput name="password" type="password" label="Password" required value={password} handleChange={this.handleChange}/>
                   <FormInput name="confirmPassword" type="password" label="Confirm Password" required value={confirmPassword} handleChange={this.handleChange}/>
             
                     <CustomButton type="submit">
                     Sign Up
                     </CustomButton>
                   </form>
                </div>


        );

    }
}

export default SignUp;