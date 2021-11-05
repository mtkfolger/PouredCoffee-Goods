import React from 'react';
import '/Users/_roban/Desktop/PouredCoffee-Goods/client/src/login.css'

    export default function Login() {

        return (
            <div className="app-area">
                <form className="box">
                    <div className="form-inner">
                        <h2>Login Here</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input  type="text" name="name" id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input  type="email" name="email" id="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password"/>
                        </div>
                        <input type="submit" value="SUBMIT"/>
                    </div>
                </form>
            </div>
        );
    }


