import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">IVFUTURE</h3>
                    <span className="loginDesc">Is a Romanian IT company emerged from the desire to generate innovative, useful and productive software.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <input placeholder="Password again" className="loginInput"/>
                       
                        <span className="loginForgot">Sing Up</span>
                        <button className="loginRegisterButton">Log in to Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
