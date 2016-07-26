/**
 * Created by Andrei on 26.07.2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RegisterForm=require('./RegisterForm');


var Register = React.createClass({
	render: function() {
		//noinspection JSDuplicatedDeclaration
        var styles = {
        backgroundImage: "none",
		fontSize: 15,
        width: "290px",
        height: "330px",
            color: "	rgb(0, 128, 255)"
        };

		return (

            <center>
                <img src="register_banner.png" width="800" height="100"></img>
            <div className="Register Form" style={styles}>

				<RegisterForm />
			</div>
             </center>
		);
	}
});



module.exports = Register;

