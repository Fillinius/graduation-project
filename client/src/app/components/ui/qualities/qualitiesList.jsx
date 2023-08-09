import React from 'react';
import PropTypes from 'prop-types';
import Quality from './quality';
// import { useQuality } from '../../../hooks/useQuality';

const QualitiesList = ({ qualities }) => {
  // const { quality, isLoading } = useQuality()
  // console.log(quality, 'quality');
  // // блок получения качества по ID
  // const getQualityById = (element) => {
  //   const qualityArraw = []
  //   if (!isLoading) {
  //     for (const elem of element) {
  //       for (const qual of quality) {
  //         if (elem === qual._id) {
  //           qualityArraw.push(qual)
  //         }
  //       }
  //     }
  //   }
  //   return qualityArraw
  // }
  // const qualityList = getQualityById(qualities)
  return (
    <>
      {qualities.map((qual) => (
        <Quality key={qual._id} {...qual} />
      )
      )}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array
};

export default QualitiesList;
