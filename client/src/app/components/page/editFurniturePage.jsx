import React, { useEffect, useState } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import { useHistory, useParams } from 'react-router-dom';
// import SelectField from '../common/form/selectField';
// import RadioField from "../common/form/radioField";
// import MultiSelectField from "../common/form/multiSelectField";
// import CheckBoxField from "../common/form/checkBoxField";

const EditFurniturePage = () => {
  const { furnitureId } = useParams()
  const history = useHistory()
  console.log(history, 'history');
  const [isLoading, setLoading] = useState(false)
  const [errors, setErrors] = useState({});
  const [furniture, setFurniture] = useState({
    type: '',
    vendor_code: '',
    name: '',
    qualities: [],
    size: [],
    image: '',
    price: ''
  });
  // console.log(furniture.type, 'furniture.type');
  const [qualities, setQualities] = useState([]);
  const [professions] = useState([]);

  // const typesList = Object.keys(furniture.type).map((typeName) => ({
  //   label: furniture.type[typeName].type,
  //   value: furniture.type[typeName]._id
  // }));
  // const types = typesList

  // api адреса
  const URL_FURNITURES = 'http://localhost:3001/furniturs/'
  const URL_QUALITY = 'http://localhost:3001/qualities/'
  // const URL_TYPES = 'http://localhost:3001/types/'
  // const URL_SIZES = 'http://localhost:3001/sizes/'

  useEffect(() => {
    setLoading(true)
    fetch(URL_FURNITURES).then((response) => (response.json()).then((furniturs) => setFurniture(getDataById(furniturs, furnitureId))))

    // fetch(URL_TYPES).then((response) => (response.json()).then((data) => {
    //   const typesList = data.map((typeName) => ({
    //     label: typeName.type,
    //     value: typeName._id
    //   })
    //   )
    //   setTypes(typesList)
    // }
    // ))
    // fetch(URL_TYPES).then((response) => (response.json()).then((types) => setTypes(types)))

    fetch(URL_QUALITY).then((response) => (response.json()).then((qualities) => setQualities(qualities)))
    // api.professions.fetchAll().then((data) => {
    //   const professionsList = Object.keys(data).map((professionName) => ({
    //     label: data[professionName].name,
    //     value: data[professionName]._id
    //   }));
    //   setProfession(professionsList);
    // });
    // api.qualities.fetchAll().then((data) => {
    //   const qualitiesList = Object.keys(data).map((optionName) => ({
    //     value: data[optionName]._id,
    //     label: data[optionName].name,
    //     color: data[optionName].color
    //   }));
    //   setQualities(qualitiesList);
    // });
  }, []);
  useEffect(() => {
    if (furniture._id) { setLoading(false) }
  }, [furniture])

  const getDataById = (datas, dataId) => {
    return datas.find(data => data._id === dataId)
  }
  // const getTypeById = (typeId) => {
  //   return types.find(type => type._id === typeId)
  // }
  // const type = getTypeById(furniture.type)
  // console.log(type);

  const getProfessionById = (id) => {
    for (const prof of professions) {
      if (prof.value === id) {
        return { _id: prof.value, name: prof.label };
      }
    }
  };

  const getQualities = (elements) => {
    const qualitiesArray = [];
    for (const elem of elements) {
      for (const quality in qualities) {
        if (elem.value === qualities[quality].value) {
          qualitiesArray.push({
            _id: qualities[quality].value,
            name: qualities[quality].label,
            color: qualities[quality].color
          });
        }
      }
    }
    return qualitiesArray;
  };

  const handleChange = ({ target }) => {
    setFurniture((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const validatorConfig = {
    vendor_code: {
      isRequired: {
        message: 'Артикул обязательн для заполнения'
      }
    },
    type: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      }
    },
    profession: {
      isRequired: {
        message: 'Обязательно выберите вашу профессию'
      }
    }
  };
  useEffect(() => {
    validate();
  }, [furniture]);
  const validate = () => {
    const errors = validator(furniture, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const { profession, qualities } = furniture;
    console.log({
      ...furniture,
      profession: getProfessionById(profession),
      qualities: getQualities(qualities)
      // api.users.update(userId,{...data,profession:getProfById(proff),qual:getQual(qual)}.then((data)=>history.push('users/${data_.id})))
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {!isLoading && (
            <form onSubmit={handleSubmit}>
              <TextField
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
              />
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
                disabled={!isValid}
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
