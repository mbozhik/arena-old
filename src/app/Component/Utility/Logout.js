'use client'
import ClearSession from "../Profile/ClearStirage";
import Delete from "../Profile/Cookies";
const LogOut = () => {
const cookiesdelete=()=>{
    Delete()
    ClearSession()
}
    return (
        <div>
             <span className="navBtn cursor-pointer" onClick={cookiesdelete}>Log Out</span>
        </div>
    );
};

export default LogOut;