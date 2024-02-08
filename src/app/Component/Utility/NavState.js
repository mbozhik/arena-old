let nav =true;
function ChangeNav(){
   let newNav= !nav
   nav =newNav;
   console.log(nav);
    return  nav;
}
export {nav,ChangeNav}
