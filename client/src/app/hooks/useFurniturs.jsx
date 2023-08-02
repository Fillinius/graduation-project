import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import { useAuth } from './useAuth';
import furnitursService from '../services/furnitursService';
import Loader from '../utils/loader';

const FurnitursContext = React.createContext()

export const useFurniturs = () => {
  return useContext(FurnitursContext)
}

const FurnitureProvider = ({ children }) => {
  const [furniturs, setFurniturs] = useState([])
  // const { currentUser } = useAuth()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getFurniturs()
  }, [])

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  async function getFurniturs() {
    try {
      const content = await furnitursService.get()
      setFurniturs(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }
  // useEffect(() => {
  //   if (!isLoading) {
  //     const newUsers = [...users]
  //     const indexUser = newUsers.findIndex((u) => u._id === currentUser._id)
  //     newUsers[indexUser] = currentUser
  //     setFurniturs(newUsers)
  //   }

  // }, [currentUser])
  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
  }
  // function getUserById(userId) {
  //   return users.find((user) => user._id === userId)
  // }
  // return (
  //   <FurnitursContext.Provider value={{ users, getUserById }}>
  //     {!isLoading ? children : "Loading ..."}
  //   </FurnitursContext.Provider>
  // )

  return (
    <FurnitursContext.Provider value={{ furniturs }}>
      {!isLoading ? children : (<Loader />)}
    </FurnitursContext.Provider>
  )
}

FurnitureProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
export default FurnitureProvider
