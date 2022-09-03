import { useContext } from 'react'
import { DbContext } from '../context/Dbcontext'



export function useDb() {
  const value = useContext(DbContext)
  return value
}
