'use client'
import Delete from "../Profile/Cookies";
const LogOut = () => {
const cookiesdelete=()=>{
    Delete()
}
    return (
        <div>
             <span className="navBtn cursor-pointer" onClick={cookiesdelete}>Log Out</span>
        </div>
    );
};

export default LogOut;