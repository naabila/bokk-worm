import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../utils/AuthProvider';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  })

function useAxiosSecure() {
    const navigate=useNavigate();
    const{logOutUser}=useContext(AuthContext);
    useEffect(() => {
        axiosSecure.interceptors.response.use(
          res => {
            return res
          },
          async error => {
            console.log(
              'error caught from our very own axios interceptor-->',
              error.response
            )
            if (error.response.status === 401 || error.response.status === 403) {
              // logout
              logOutUser()
              .then(res=>console.log('user logged out'))
              // navigate to login
              navigate('/login')
            }
          }
        )
      }, [logOutUser, navigate])
     
      return axiosSecure
}

export default useAxiosSecure;