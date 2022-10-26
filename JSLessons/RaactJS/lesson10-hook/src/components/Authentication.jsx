import { useState } from "react"
import data from '../data/auth';
const Authentication = props => {
    const [uname,setUname]=useState();
    const [pass,setPass]=useState();
    const [alert,setAlert]=useState();
    const [text,setText]=useState();

    const formSubmit=(e)=>{
        e.preventDefault();
        if (!uname || !pass) {
            setAlert("alert alert-warning");
            setText("fill in the input");
        }else{
            setText("");
            if (data.dataname === uname && data.datapass === pass) {
                setAlert("alert alert-success");
                setText("login successfully");
                props.history.push('/app');
            }else{
                setAlert("alert alert-danger");
                setText("login is wrong!");
            }
        }

    }
    
  return (
<form className="container col-3 mt-5" onSubmit={formSubmit}>
    <h2 className={`text-center ${alert}`}>{text}</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
    <input onChange={(e)=>{setUname(e.target.value.trim())}} type="text" className="form-control"  aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>{setPass(e.target.value.trim())}} type="password" className="form-control"  />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}

export default Authentication