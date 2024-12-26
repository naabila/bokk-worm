import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

function PrivateRout({children}) {
    const{user,loader}=useContext(AuthContext);
    const location=useLocation();
if(loader){
    return <Loading></Loading>
}

if(user){
  return children
}

return <Navigate to="/login" state={location?.pathname}></Navigate>
  
}

export default PrivateRout