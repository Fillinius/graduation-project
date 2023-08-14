import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FurnitursListPage = ({ furnitustList, onChange }) => {
  return (
    <>
      {furnitustList ? (furnitustList.map((furniture) => (
        <Link key={furniture._id} to={`furniturs/${furniture._id}`} >
          <div className="container text-center">
            <div className=" block p-2 g-col-6">
              <img className="w-50 h-50" src={furniture.image} alt="foto" />
              <h5>{furniture.name}</h5>
              <p>Описание товара и прочее</p>
              <p>{furniture.price},руб.</p>
              <button
                className="btn btn-primary"
                onClick={onChange} >Buy</button>
            </div>
          </div>
        </Link>
      ))
      ) : 'Loading list...'}</>
  );
}
FurnitursListPage.propTypes = {
  furnitustList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func
}
export default FurnitursListPage;
