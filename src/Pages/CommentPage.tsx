import React, { useEffect, useState, createContext } from 'react';

import { CurrentUser, Comment } from '../Types/Types';
import CommentBox from './Components/CommentBox';
import CreateComment from './Components/CreateComment';
import { AddComment } from './Utils/utils';

export const AuthorizationContext = createContext<CurrentUser | null>(null);

const CommentPage: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<CurrentUser | null>(null);
  const [publicComments, setPublicComments] = useState<Comment[]>([]);

  const addComment = (text: string) => {
    if (loggedInUser === null) return;
    AddComment(text, loggedInUser).then((comment) => {
      setPublicComments([...publicComments, comment]);
      console.log(publicComments);
    });
  };

  const fetchAPI = () => {
    fetch('data.json')
      .then((res) => res.json())
      .then(({ currentUser, comments }) => {
        setLoggedInUser(currentUser);
        setPublicComments(comments);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <AuthorizationContext.Provider value={loggedInUser}>
      <div className="min-w-[730px] min-h-[896px] relative flex flex-col">
        {publicComments.length >= 1
          ? publicComments?.map((comment, index) => {
              let updatedComment = { ...comment, showReply: false };
              return (
                <div className="w-full" key={index}>
                  <CommentBox
                    id={updatedComment.id}
                    score={updatedComment.score}
                    user={updatedComment.user}
                    content={updatedComment.content}
                    createdAt={updatedComment.createdAt}
                    replies={updatedComment?.replies}
                    showReply={updatedComment.showReply}
                    LoggedInUserName={loggedInUser?.username}
                    LoggedInUserImage={loggedInUser?.image}
                  />
                </div>
              );
            })
          : null}
        {loggedInUser ? (
          <CreateComment
            image={loggedInUser.image}
            username={loggedInUser.username}
            addComment={addComment}
          />
        ) : null}
      </div>
    </AuthorizationContext.Provider>
  );
};

export default CommentPage;

//button -> Open ReplyBox at Comment Page
