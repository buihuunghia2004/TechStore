import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/Auth/authThunks'

export const useAuth = () => {

  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.auth.user)
  
  const handleLogin = async (credentials) => {   
    try {
      await dispatch(login(credentials)).unwrap()
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return { token, user, handleLogin, handleLogout }
}
