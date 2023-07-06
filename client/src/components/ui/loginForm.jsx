import React, { useEffect, useState } from 'react';
import TextField from '../common/form/textField';
import { validator } from '../../utils/validator';

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
    setData((prevstate) => ({
      ...prevstate,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    email: {
      isRequared: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    password: {
      isRequared: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать заглавные буквы'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      minWord: {
        message: 'Пароль должен состоями минимум из 8 символов',
        value: 8
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
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()

    if (!isValid) return
    console.log(data)
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
      <button
        type='submit'
        disabled={!isValid}
        className='btn btn-primary'
      >Submit</button>
    </form>

  );
}

export default LoginForm;
