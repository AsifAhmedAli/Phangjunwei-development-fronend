import { Route, Redirect } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from '../Context/AuthContext'
const AdminPrivateRouter = (props) => {

  // const firstLogin = localStorage.getItem("firstLogin");
  // const { token, profile } = useContext(AuthContext)

  // if (firstLogin) {
  //   return (token && profile.role === 'Superadmin' || profile.role === "Admin") &&
  //     <Route {...props} exact >
  //       {props.children}
  //     </Route>
  // }
  // else {
  //   return <Redirect to="/" exact />
  // }

  return <Route {...props} exact >
    {props.children}
  </Route>

  //   return firstLogin && token && profile.role==='SuperAdmin' ? <Route {...props} /> : <Redirect to="/dashboard/admin" />;
};

export default AdminPrivateRouter;