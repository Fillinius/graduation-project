import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';

const EditUserPage = () => {
  const { currentUser } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState()
  const [data, setData] = useState()

  const history = useHistory()
  const handleEdit = () => {
    history.push(history.location.pathname + '/edit')

    useEffect(() => {
      console.log(currentUser, 'currentUser');
      console.log(data, 'data');
      console.log(errors, 'errors')
      if (!data) setData(currentUser)
    }, [data])
    console.log(currentUser, 'currentUser');
    console.log(data, 'data');
    console.log(errors, 'errors');

    useEffect(() => {
      if (data && isLoading) {
        setIsLoading(false)
      }
    }, [data])
  }
  console.log(handleEdit);
  // блок событие ввода данных в форму
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  // блок отправки данных
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    console.log(isValid);
    // if (!isValid) return
  }
  // блок валидации по полю
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  // const isValid = Object.keys(errors).length === 0

  // блок валидатор
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна  к заполнению'
      }
    },
    name: {
      isRequired: {
        message: 'Поле обязательно  к заполнению'
      },
      isMinWord: {
        message: 'Имя должено содержать минимум 3 символа',
        value: 3
      }
    }
  }
  return (
    <div className='m-5'>
      {currentUser ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label='Почта'
            value={data.email}
            name='email'
            onChange={handleChange} />
          {/* error={errors.email}  */}

          <TextField
            label='Выберите Ваше имя'
            type='text'
            value={data.name}
            name='name'
            onChange={handleChange}
          // error={errors.name}
          />

          <button
            className="btn btn-primary w-100 mx-auto"
            type='submit'
          // disabled={!isValid}
          >
            Submit</button>
        </form>
      ) : 'Loading...'
      }
    </div>
  );
}

export default EditUserPage;
