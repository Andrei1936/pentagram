"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var RegisterForm = React.createClass({
	render: function() {
        document.body.style.backgroundImage = "url('bla1.jpg')";
        document.body.style.backgroundPosition = "top center";
        document.body.style.fontFamily="Papyrus";
        
        return (
			<form>
                <br></br>
               

                 <br></br> <br></br>
                <label htmlFor="Username">Username:</label>
                <input type="text" name="Username"
                className="form-control"
                placeholder="Username"
                ref="Username"
                />
                <br />

                <label htmlFor="Password">Password:</label>
                <input type="password"
                       name="Password"
                       className="form-control"
                       placeholder="Password"
                       ref="password"
                       />
                <br />
                <label htmlFor="E-Mail">E-Mail</label>
                <input type="text"
                       name="E-Mail"
                       className="form-control"
                       placeholder="E-Mail"
                       ref="E-Mail"
                       />

                    <br></br>
                 <input type="image" src="b3.png" value="Register" className="btn btn-default" alt="Submit" width="200" height="60"  />

                    <br></br><br></br>
                <Link to = "Login">
                       <label htmlFor="Login">Go back to Login Page</label>
                    </Link>



            </form>

		);
	}
});

module.exports = RegisterForm;