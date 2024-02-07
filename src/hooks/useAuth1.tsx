import { useContext } from 'react'
import { authContext1 } from 'src/context/authContext1'

export const useAuth1 = () => useContext(authContext1)
