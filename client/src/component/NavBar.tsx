import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { SearchIcon } from "lucide-react";

function NavBar() {
  return (
    <div className="fixed top-0 left-0  w-full   border-2 border-red-500 items-center               justify-between px-6 md:px-16 lg:px-36">
      
              <Link to="/" className="max-md:flex-1">
               <img src={logo} className="w-36h-auto" />
              </Link>

              {/* nav links */}
              <div className="flex-row border-1 border-yellow-400">
                <Link to="/"> Home </Link>
                <Link to="/"> Movies </Link>
                <Link to="/"> Theatre </Link>
              </div>

               {/* searchbutton and  */}
               <div>
                 <SearchIcon className="w-10 h-10 color-white-500" />
               </div>

                {/* menu buttto forsmaller device */}
    </div>
  );
}
export default NavBar;
