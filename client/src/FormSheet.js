import React, { Component } from 'react';


class FormSheet extends Component {
    constructor(props){
        super(props);
        this.state = {UserName: "",
            UserPassword: "",
            UserBalance: 0}
    }

    submitChange =(event) =>{

        fetch('/api/accs',
            {
                method: "POST",
                body: JSON.stringify(
                    {UserName: this.state.UserName,
                        UserPassword: this.state.UserPassword,
                        UserBalance: this.state.UserBalance}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
        event.stopPropagation();

    };

    nameTitleChange = (event) => {
        this.setState({UserName: event.target.value})
    };

    passwordChange = (event) => {
        this.setState({UserPassword: event.target.value})
    };

    balanceChange = (event) => {
        this.setState({UserBalance: event.target.value})
    };

    submitFunction = (event) =>{
        console.log("Submitted Form.");
        document.getElementById("PatientWriteDown").innerHTML+=
            // console.log
            ("Hello "+this.state.UserName+". Your password is "+this.state.UserPassword+" and you're Balance is "+this.state.UserBalance+`<br/>`);

        //This prevent the form from reloading
        event.preventDefault();
        event.stopPropagation();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitChange}>
                    <h1>Your Account Info</h1>
                    <label htmlFor="gameTitle">Account Form: </label>
                    <input name="Patient_Title_Information" type="Text" placeholder="Your Name" value={this.state.UserName} onChange={this.nameTitleChange}/>
                    <label>Password</label>
                    <input name="Patient_Age_Rating" type="password" placeholder="Your Password" value={this.state.UserPassword} onChange={this.passwordChange}/>
                    <label>Balance</label>
                    <input type="number" placeholder="Your Balance" value={this.state.UserBalance} onChange={this.balanceChange}/>
                    <button title="Submit Button" onSubmit={this.submitFunction}>Submit</button>
                </form>

            </div>
        );

    }
}

export default FormSheet