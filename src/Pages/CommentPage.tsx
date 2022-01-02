import React, { useEffect, useState, createContext } from 'react';

import { CurrentUser, Comment } from '../Types/Types';
import CommentBox from './Components/CommentBox';
import CreateComment from './Components/CreateComment';
import ReplyBox from './Components/ReplyBox';

export const AuthorizationContext = createContext<CurrentUser | null>(null);

const CommentPage: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<CurrentUser | null>(null);
  const [publicComments, setPublicComments] = useState<Comment[]>([]);
  console.log(AuthorizationContext);

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
      <div className="min-w-[730px] min-h-[896px] flex flex-col">
        {publicComments.length >= 1
          ? publicComments?.map((comment, index) => {
              let updatedComment = { ...comment, showReply: false };
              console.log(updatedComment.showReply);
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
                  {updatedComment.showReply && loggedInUser ? (
                    <ReplyBox
                      image={loggedInUser.image}
                      username={loggedInUser.username}
                    />
                  ) : null}
                </div>
              );
            })
          : null}
        {loggedInUser ? (
          <CreateComment
            image={loggedInUser.image}
            username={loggedInUser.username}
          />
        ) : null}
      </div>
    </AuthorizationContext.Provider>
  );
};

export default CommentPage;

//button -> Open ReplyBox at Comment Page
