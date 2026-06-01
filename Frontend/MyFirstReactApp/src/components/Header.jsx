import { Link } from "react-router-dom";



function Header(){
    return(
        <>
       <div className="bg-primary d-flex justify-content-between align-items-center">
        <div className="text-light fs-4 fw-bold  ">My Companies</div>

        <div className="d-flex gap-4">
            <Link to={"/"}>Home</Link>
           <Link to={"/about"}>About</Link>
            <Link to={"/product"}>Product</Link>
             <Link to={"/contactus"}>ConatactUs</Link>
             
              
           
        </div>
        <div className="d-flex gap-3">
             <Link to={"/login"}>
              <button className="btn btn-primary">Login</button>

             </Link>
             <Link to={"/register"}>
            <button className="btn btn-primary">Register</button>
            </Link>
           
        </div>
       </div>
        </>
    );
}

export default Header;