import "./styles/Landingpage.css"
import { Link } from "react-router-dom"

function Landingpage(){

return(
<div className="container">
<h1>Welcome to PopX</h1>
<h3>Lorem ipsum dolor sit amet&comma;<br /> consectetur adipisicing elit.</h3>


<Link to='/signup'><button className="create">Create Account </button></Link>
<Link to='/signin'><button className="login" >Already Registered? Login</button></Link>
</div>
)

}

export default Landingpage