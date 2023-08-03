import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import qualityService from '../services/qualityService';
import { toast } from 'react-toastify';

const QualityContext = React.createContext()

export const useQuality = () => {
  return useContext(QualityContext)
}

export const QualityProvider = ({ children }) => {
  const [quality, setQualities] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getQualityList = async () => {
      try {
        const content = await qualityService.get()
        setQualities(content)
        setLoading(false)
      } catch (error) {
        errorCatcher(error)
      }
    }
    getQualityList()
  }, [])

  const getQuality = (id) => {
    return quality.find((q) => q._id === id)
  }

  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
  }
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])
  return (
    <QualityContext.Provider
      value={{
        quality,
        isLoading,
        getQuality
      }}>
      {children}
    </QualityContext.Provider>
  )
}
QualityProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
