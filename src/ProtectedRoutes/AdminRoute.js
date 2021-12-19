import { Route, Redirect } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from '../Context/AuthContext'
const AdminPrivateRouter = (props) => {

  const firstLogin = localStorage.getItem("firstLogin");
  const {token,profile} =useContext(AuthContext)
  useEffect(()=>{
     
  })

 if( firstLogin  ){
    //  console.log(profile)
     return   <Route {...props}  exact >
                    {props.children}
               </Route>
 }
 else{
     return <Redirect to="/dashboard/admin"  exact/> 
 }
  
//   return firstLogin && token && profile.role==='SuperAdmin' ? <Route {...props} /> : <Redirect to="/dashboard/admin" />;
};

export default AdminPrivateRouter;