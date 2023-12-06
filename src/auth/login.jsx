
import { Link } from "react-router-dom";
import "./login.css"

const login = () =>
{
    return(
        <>
        <h1>Login</h1>
        <div style={{border: '2px solid #3498db',
    borderRadius: '5px',
    width: '50%',
    textAlign:'center',
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
    padding:'10px',margin:'10px',}}>
        
        <input type="text" className="inp" placeholder="Username"></input>
        <br/>
        
        <input type="password" className="inp" placeholder="password"></input>
        <br/>
        
        <div className="row">
        <input type="checkbox" />
        <p>Remember me</p>
        
        </div>
        <button>submit</button>
        <p>not a member ? <Link to="/signup ">create account</Link></p>
        </div>
        </>
    );
};
export default login;

