import React from 'react';
import { useHistory } from 'react-router-dom';

const EditUserPage = () => {
  const history = useHistory()
  const handleEdit = () => {
    history.push(history.location.pathname + '/edit')
  }
  return (
    <>
      <p>Edit user page</p>
      <button
        className="btn btn-danger"
        onClick={handleEdit}>Изменить</button>
    </>

  );
}

export default EditUserPage;
