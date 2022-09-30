import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/MemberSlice";

const useLogout = () => {

    const { expirationTime } = useSelector(state => state.member);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const timeout = expirationTime - Date.now();
      const timer = setTimeout(() => {
        dispatch(logout());
      }, timeout);
  
      return () => {
        clearTimeout(timer);
      }
    }, [expirationTime])
}
 
export default useLogout;