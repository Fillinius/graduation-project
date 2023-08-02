import React, { useEffect, useState } from 'react';
import TextField from '../common/form/textField';
import { validator } from '../../utils/validator';
import CheckBoxField from '../common/form/checkBoxField';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    licence: false
  })
  const { singUp } = useAuth()
  const [errors, setErrors] = useState({})
  const history = useHistory()
  const handleChange = ({ target }) => {
    setData((prevstate) => ({
      ...prevstate,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    // name: {
    //   isRequared: {
    //     message: 'Поле обязательно для заполнения'
    //   }
    // },
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
    },
    licence: {
      isRequared: {
        message: 'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
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
      await singUp(data)
      history.push('furniturs/')
    } catch (error) {
      setErrors(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <TextField
        label="Имя"
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name} /> */}
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
      <CheckBoxField
        name='license'
        value={data.licence}
        onChange={handleChange}
        error={errors.licence}
      >Подтвердить <a>лицензионное соглашение</a></CheckBoxField>
      <button
        type='submit'
        disabled={!isValid}
        className='btn btn-primary'
      >Submit</button>
    </form>
  );
}

export default RegisterForm;
