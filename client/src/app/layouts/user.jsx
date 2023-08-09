import React from 'react';
import { useParams } from 'react-router-dom';
import UserPage from '../components/page/userPage';
import EditUserPage from '../components/page/editUserPage';

const User = () => {
  const params = useParams()
  const { userId, edit } = params
  return (
    <>
      {userId && <UserPage id={userId} />}
      {edit && <EditUserPage />}
    </>
  )
}
export default User;
