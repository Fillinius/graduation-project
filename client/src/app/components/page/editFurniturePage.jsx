import React, { useEffect, useState } from 'react';
// import { validator } from '../../utils/validator';
// import TextField from '../common/form/textField';
import { useHistory } from 'react-router-dom';
// import SelectField from '../common/form/selectField';
// import RadioField from "../common/form/radioField";
// import MultiSelectField from "../common/form/multiSelectField";
// import CheckBoxField from "../common/form/checkBoxField";

const EditFurniturePage = () => {
  // const { furnitureId } = useParams()
  const history = useHistory()
  console.log(history, 'history');

  const [furniture] = useState({
    type: '',
    vendor_code: '',
    name: '',
    qualities: [],
    size: [],
    image: '',
    price: ''
  });

  useEffect(() => {
    // if (furniture._id) { setLoading(false) }
  }, [furniture])

  // const handleChange = ({ target }) => {
  //   setFurniture((prevState) => ({
  //     ...prevState,
  //     [target.name]: target.value
  //   }));
  // };

  // const validatorConfig = {
  //   vendor_code: {
  //     isRequired: {
  //       message: 'Артикул обязательн для заполнения'
  //     }
  //   },
  //   type: {
  //     isRequired: {
  //       message: 'Пароль обязателен для заполнения'
  //     }
  //   },
  //   profession: {
  //     isRequired: {
  //       message: 'Обязательно выберите вашу профессию'
  //     }
  //   }
  // };
  useEffect(() => {
    validate();
  }, []);
  const validate = () => {
    // const errors = validator(furniture, validatorConfig);
    // setErrors(errors);
    // return Object.keys(errors).length === 0;
  };
  // const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return console.log(furniture);
    // const { profession, qualities } = furniture;
    // console.log({
    //   ...furniture,
    //   profession: getProfessionById(profession),
    //   qualities: getQualities(qualities)
    // api.users.update(userId,{...data,profession:getProfById(proff),qual:getQual(qual)}.then((data)=>history.push('users/${data_.id})))
    // });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {(
            <form onSubmit={handleSubmit}>
              {/* <TextField
                label='Артикул товара'
                name='vendor_code'
                value={furniture.vendor_code}
                onChange={handleChange}
                error={errors.vendor_code}
              />
              <TextField
                label="Тип товара"
                type="text"
                name="type"
                value={furniture.type.type}
                onChange={handleChange}
                error={errors.type}
              /> */}
              {/* <SelectField
                label="Выбери тип товара"
                defaultOption="Choose..."
                options={types}
                name="type"
                onChange={handleChange}
                value={type.type}
                error={errors.type}
              /> */}
              {/* <RadioField
      options={[
        { name: "Male", value: "male" },
        { name: "Female", value: "female" },
        { name: "Other", value: "other" }
      ]}
      value={data.sex}
      name="sex"
      onChange={handleChange}
      label="Выберите ваш пол"
    /> */}
              {/* <MultiSelectField
      options={qualities}
      onChange={handleChange}
      defaultValue={data.qualities}
      name="qualities"
      label="Выберите ваши качества"
    /> */}

              <button
                className="btn btn-primary w-100 mx-auto"
                type="submit"
              // disabled={!isValid}
              >
                Submit
              </button>
            </form>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default EditFurniturePage;
