import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FurniturePage from '../page/furniturePage';
import { useFurniturs } from '../../hooks/useFurniturs';

const Furniture = ({ id }) => {
  const history = useHistory()
  const { furniturs, isLoading } = useFurniturs()
  const getFurnitureById = (id) => {
    return furniturs.find((furniture) => furniture._id === id)
  }
  const furniture = getFurnitureById(id)
  const handleReturn = () => {
    history.push('/furniturs')
  }
  return (
    <div className='container'>
      <div>
        {furniture && !isLoading
          ? <FurniturePage furniture={furniture} />
          : `Furniture with id ${id} not found`}
      </div>

      <button
        className="btn btn-primary"
        onClick={handleReturn}
      > Вернуться к списку</button>
    </div>
  );
}
Furniture.propTypes = {
  id: PropTypes.string.isRequired,
  furniturs: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Furniture;
