import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FurnitureCard from '../ui/furnitureCard';
import QualityCard from '../ui/qualityCard';
import SizeCard from '../ui/sizeCard';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const FurniturePage = ({ furniture }) => {
  const { currentUser } = useAuth()
  console.log(currentUser, 'currentUser');
  const history = useHistory()
  const handleEdit = () => {
    history.push(history.location.pathname + '/edit')
  }
  // start
  return (
    <div className='container'>
      <FurnitureCard furniture={furniture} />
      <QualityCard furniture={furniture} />
      <SizeCard furniture={furniture} />
      {currentUser && (<><button
        className="btn btn-danger"
        onClick={handleEdit}>Изменить</button>
        <NavLink to='logout'>LogOut</NavLink> </>)
      }
    </div>
  );
}
FurniturePage.propTypes = {
  furniture: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default FurniturePage;
