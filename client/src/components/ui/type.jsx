import React from 'react';
import PropTypes from 'prop-types';

const Type = ({ type }) => {
  /*
    // блок получения типа по ID
    const URL_TYPES = 'http://localhost:3001/types/'
    const [types, setTypes] = useState([])
    // console.log(types, 'Список возможных типов товара');
    useEffect(() => {
      fetch(URL_TYPES).then((response) => (response.json()).then((types) => setTypes(types)))
    }, [])
    const getTypeById = (typeId) => {
      return types.find(type => type._id === typeId)
    }
    const type = getTypeById(furniture.type)
    // console.log(type, 'type');
  */

  return (
    <span>{type.type}</span>
  );
}
Type.propTypes = {
  type: PropTypes.object.isRequired
}
export default Type;
