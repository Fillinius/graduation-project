import React from 'react';
import PropTypes from 'prop-types';
import Size from './sizes';

const SizesList = ({ sizes }) => {
  // console.log(sizes);
  return (
    <div>
      {sizes.map((s) => (
        <span key={s._id}> <Size {...s} /> </span>
      ))}
    </div>
  );
}
SizesList.propTypes = {
  sizes: PropTypes.array
}

export default SizesList;
