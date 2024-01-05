import "./login.css"
import { Link } from "react-router-dom";
const signup = () =>
{
    return(
        <div style={{textAlign:"center"}}>
        <h1>signup</h1>
        <div style={{border: '2px solid #3498db',
    borderRadius: '5px',
    width: '50%',
    textAlign:'center',
    margin:"auto",
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
    padding:'10px',}}>
        
        <input type="text" placeholder="username" className="inp"></input>
        <br/>
        <input type="email" placeholder="Email"className="inp"></input><br/>
        <input type="password" placeholder="password"className="inp"></input>
        <br/>
        
        <input type="password" placeholder="confirm password" className="inp"></input>
        <br/>
        <br/>
        <button>create account</button>
        
        
        <div>
        <p>Already a member ? <Link to="/">Login</Link></p>
        </div>
        </div>
        </div>
    );
};
export default signup;