import { orderBy } from 'lodash';
import React from 'react';
import AddCommentForm from './addCommentForm';
import CommentsList from './commentsList';
import { useComments } from '../../../hooks/useComments';

const Comments = () => {
  const { createComment, comments, removeComment } = useComments()

  const handleSubmit = (data) => {
    console.log(data);
    createComment(data);
  };
  const handleRemoveComment = (id) => {
    removeComment(id);
  };
  const sortedComments = orderBy(comments, ['created_at'], ['desc']);
  return (
    <>
      <div className="card mb-2">
        {''}
        <div className="card-body ">
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>
      {sortedComments.length > 0 && (
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

//
// "comment": {
//   ".read": "auth !=null",
//     ".indexOn": ["pageId"],
//       "$cid": {
//         ".write": "auth !=null&& ((data.child('userId').val() === auth.uid) || (newData.child('userId').val() === auth.uid))"
//       }
// }
//
