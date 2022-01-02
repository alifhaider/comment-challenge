import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import reply from '../../images/icon-reply.svg';
import React, { useState, useContext } from 'react';
import { ReplyCardType } from '../../Types/Types';
import ReplyBox from './ReplyBox';
import { AuthorizationContext } from '../CommentPage';

const ReplyCard: React.FC<ReplyCardType> = (props) => {
  let { id, score, user, content, createdAt, showReply } = props;
  const [showReplyBox, setShowReplyBox] = useState<boolean>(showReply);
  const Auth = useContext(AuthorizationContext);
  console.log(Auth?.username);
  const handleIncrement = () => {
    console.log('Iam clicked');
  };

  const handleDecrement = () => {};
  const handleReplyButton = () => {
    setShowReplyBox(!showReplyBox);
  };
  return (
    <div>
      <div className="flex h-[130px] w-full bg-white rounded-2xl p-6 mb-[5px]">
        <div className="flex flex-col justify-around items-center h-[80px] w-[40px] px-4 py-[6px] bg-veryLightGray rounded-xl mr-6">
          <button onClick={handleIncrement} className="flex-1">
            <img className="w-[12px] h-[10px] " src={plus} alt="icon" />
          </button>

          <p className="text-center text-xs font-bold text-moderateBlue ">
            {score}
          </p>
          <button onClick={handleDecrement} className="flex-1">
            <img className="w-[12px] h-[3px]" src={minus} alt="icon" />
          </button>
        </div>
        <div className="w-full">
          <div className="flex justify-between mb-3">
            <div className="flex items-center">
              <img
                className="w-[32px] h-[32px] mr-4"
                src={user?.image.png}
                alt={user?.username}
              />
              <p className="text-xs font-bold text-grayishBlue mr-4">
                {user?.username}
              </p>
              <p className="text-xs font-medium text-lightGray">{createdAt}</p>
            </div>
            <button onClick={handleReplyButton} className="flex items-center">
              <img
                className="w-[14px] h-[12px] mr-3 mr-6"
                src={reply}
                alt="icon"
              />
              <p className="text-sm font-bold text-moderateBlue">Reply</p>
            </button>
          </div>
          <div>
            <p className="leading-5 text-xs font-medium text-lightGray">
              {content}
            </p>
          </div>
        </div>
      </div>
      {showReplyBox ? (
        <ReplyBox
          username={JSON.stringify(user?.username)}
          image={Auth?.image}
        />
      ) : null}
    </div>
  );
};

export default ReplyCard;
