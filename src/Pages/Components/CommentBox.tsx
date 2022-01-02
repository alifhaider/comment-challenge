import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import reply from '../../images/icon-reply.svg';
import { ReplyCardType, ReplyType, UpdatedComment } from '../../Types/Types';
import { useState } from 'react';
import ReplyBox from './ReplyBox';
import ReplyCard from './ReplyCard';

const CommentBox: React.FC<UpdatedComment> = (props) => {
  let {
    id,
    score,
    user,
    content,
    createdAt,
    replies,
    showReply,
    LoggedInUserName,
    LoggedInUserImage,
  } = props;
  const [showReplyBox, setShowReplyBox] = useState<boolean>(showReply);
  const handleIncrement = () => {
    console.log('Iam clicked');
  };

  const handleReplyInput = () => {
    setShowReplyBox(!showReplyBox);
  };

  const handleDecrement = () => {
    console.log(showReplyBox);
  };

  return (
    <div className="w-full mb-[20px]">
      <div className="flex h-40 w-full bg-white rounded-2xl p-6 mb-[5px]">
        <div className="flex flex-col justify-around items-center h-[100px] w-[40px] px-4 py-[10px] bg-veryLightGray rounded-xl mr-6">
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
          <div className="flex justify-between mb-5">
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
            <button
              onClick={() => setShowReplyBox(!showReplyBox)}
              className="flex items-center"
            >
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

      {replies?.length === 0
        ? null
        : replies?.map((reply: ReplyType) => {
            let updatedReply: ReplyCardType = { ...reply, showReply: false };
            return (
              <div key={reply?.id} className="flex justify-between">
                <div className="flex items-center justify-center w-[10%] h-[120px]">
                  <div className=" w-[2px] h-full bg-[#E8E9ED]"></div>
                </div>
                <ReplyCard
                  id={updatedReply.id}
                  score={updatedReply.score}
                  user={updatedReply.user}
                  content={updatedReply.content}
                  createdAt={updatedReply.createdAt}
                  showReply={updatedReply.showReply}
                  replyButtonClick={handleReplyInput}
                />
              </div>
            );
          })}
      {showReplyBox ? (
        <ReplyBox
          username={JSON.stringify(user?.username)}
          image={LoggedInUserImage}
        />
      ) : null}
    </div>
  );
};

export default CommentBox;
