"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;




var LoginForm = React.createClass({
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
                
                <input type="image" src="bl2.png" value="Login" className="btn btn-default" alt="Submit" width="120" height="60"  />


                <Link to = "Register">
                     <label htmlFor="Register">Don't have account? Register NOW</label>
                    </Link>
            </form>
        );
	}
});

module.exports = LoginForm;