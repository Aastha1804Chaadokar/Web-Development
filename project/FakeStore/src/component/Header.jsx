import react from "react";
import {Link} from "react-router-dom";
import { RiShoppingBag4Line } from "react-icons/ri";
const Header =() => {
return(
  <>
  <div className="bg-blue-500 flex justify-between p-3">
    <div>
     <RiShoppingBag4Line/>
    </div>
    <div className="flex gap-4 justify-between">
      <Link to={"/"} className="text-white hover:underline">Home</Link>
      <Link to={"/about"} className="text-white hover:underline">About</Link>
      <Link to={"/contact"} className="text-white hover:underline" >Contact</Link>
      <Link to={"/product"}className="text-white hover:underline" >Product</Link>
    </div>

  </div>
  </>
);
};
export default Header;
