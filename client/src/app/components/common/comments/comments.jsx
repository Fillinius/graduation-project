import { orderBy } from 'lodash';
import React from 'react';
import AddCommentForm from './addCommentForm';
import CommentsList from './commentsList';
import { useComments } from '../../../hooks/useComments';
import { useAuth } from '../../../hooks/useAuth';

const Comments = () => {
  const { createComment, comments, removeComment } = useComments()
  const { currentUser } = useAuth()
  const handleSubmit = (data) => {
    // console.log(data);
    createComment(data);
  };
  const handleRemoveComment = (id) => {
    removeComment(id);
  };
  const sortedComments = orderBy(comments, ['created_at'], ['desc']);
  return (
    <>
      {currentUser && (<div className="card mb-2">
        {''}
        <div className="card-body ">
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>)}
      {currentUser && sortedComments.length > 0 && (
        <div className="card mb-3">
          <div className="card-body ">
            <h2>Comments</h2>
            <hr />
            <CommentsList
              comments={sortedComments}
              onRemove={handleRemoveComment}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
