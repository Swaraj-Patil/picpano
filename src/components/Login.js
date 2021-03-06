import React from 'react'
import Footer from './Footer'

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props
    return (
        <div>
            <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <p className="ErrorMsg">{emailError}</p>

                    <label>Password</label>
                    <input
                        type="text"
                        required
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                    <p className="ErrorMsg">{passwordError}</p>

                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Sign in</button>
                                <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignup}>Sign up</button>
                                <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
        
    )
}

export default Login