import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from '../Context/AuthContext'
const AdminPrivateRouter = (props) => {

  const firstLogin = localStorage.getItem("firstLogin");
  const {token,profile} =useContext(AuthContext)

 if( firstLogin  && profile.role==='Superadmin' && token){
     return   <Route {...props} />
 }
 else{
     return <Redirect to="/dashboard/admin" /> 
 }
  
//   return firstLogin && token && profile.role==='SuperAdmin' ? <Route {...props} /> : <Redirect to="/dashboard/admin" />;
};

export default AdminPrivateRouter;