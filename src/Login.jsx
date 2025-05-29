import './styles/login.css';

function Login() {
    return (
        <div className="login-container">
            <h2>Signin to your <br /> PopX account</h2>
            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
            <form className="login-form">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" placeholder="Enter email address" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter password" required />

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
