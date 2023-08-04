import React, { useEffect, useState } from 'react';
import TextField from '../common/form/textField';
import { validator } from '../../utils/validator';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const history = useHistory()
  const { logIn } = useAuth()
  const [errors, setErrors] = useState({})
  const [enterError, setEnterError] = useState(null)
  const handleChange = ({ target }) => {
    setData((prevstate) => ({
      ...prevstate,
      [target.name]: target.value
    }))
    setEnterError(null)
  }

  const validatorConfig = {
    email: {
      isRequared: {
        message: 'Электронная почта обязательна для заполнения'
      }
    },
    password: {
      isRequared: {
        message: 'Пароль обязателен для заполнения'
      }
    }
  }

  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0
  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()

    if (!isValid) return
    console.log(data)
    try {
      await logIn(data)
      history.push('furniturs/')
    } catch (error) {
      setEnterError(error.email)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email} />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password} />
      {enterError && (<p className='text-danger'>{enterError}</p>)}
      <button
        type='submit'
        disabled={!isValid || enterError}
        className='btn btn-primary'
      >Submit</button>
    </form>
  );
}

export default LoginForm;
