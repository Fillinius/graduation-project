import React from 'react';
import PropTypes from 'prop-types';
import Size from './sizes';
import { useSize } from '../../../hooks/useSize';

const SizesList = ({ sizes }) => {
  // console.log(sizes, (sizes));
  const { size } = useSize()
  // const getSizeById = (element) => {
  //   const sizeArray = []
  //   for (const elem of element) {
  //     for (const siz of size) {
  //       if (elem === siz._id) {
  //         sizeArray.push(siz)
  //       }
  //     }
  //   }
  //   return sizeArray
  // }
  // const sizeList = getSizeById(sizes)
  // console.log(sizeList, 'sizeList');
  return (
    <div>
      {size.map((s) => (
        <span key={s._id}> <Size {...s} /> </span>
      ))}
    </div>
  );
}
SizesList.propTypes = {
  sizes: PropTypes.array
}

export default SizesList;
