import React from 'react';
import PropTypes from 'prop-types';
import { useType } from '../../hooks/useType';

const Type = ({ type }) => {
  const { getType } = useType()
  const typeList = getType(type)
  return (
    <span>{typeList.type}</span>
  );
}
Type.propTypes = {
  type: PropTypes.object.isRequired
}
export default Type;
