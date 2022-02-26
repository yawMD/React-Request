import React from 'react';
import logo from './logo-reiss.png';
import './login.css';

function Login() {
    return (
        <div className="login">
            <div className="header">

            </div>
            <div className="body">
                <div className="form-card">
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={logo} width="150" height="80"/>
                    </div>

                    <div className="down">
                    <div className="wel">
                        Welcome Back
                    </div>

                    <form className="form-side" action="/" method="post">
                        <div>
                            <input className="mail"  placeholder="email" name="username" type="text" required/>
                        </div>
                        <div>
                            <input className="mail"  placeholder="passcode" name="password" type="password" required/>
                        </div>

                        <div>
                            <p className="write">Enter email and password</p>
                            <button className="btns">Login</button>
                        </div>
                    </form>
                    </div>

                </div>
                {/*<div className="nextside">*/}
                {/*    <form action="/" method="post">*/}
                {/*        <img src={logo} width="200" height="80" id="logo"/>*/}
                {/*        <p className="logportal">Request Portal</p>*/}
                {/*        <p className="welcome">Welcome Back</p>*/}
                {/*        <input className="mail" placeholder="email" name="username" type="text" required/>*/}
                {/*        <input className="mailpass" placeholder="passcode" name="password" type="password" required/>*/}
                {/*        <p className="write">Enter email and password</p>*/}
                {/*        <button className="btns">Login</button>*/}
                {/*    </form>*/}

                {/*</div>*/}

            </div>

        </div>
    );
}

export default Login;
