import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import reply from '../../images/icon-reply.svg';

import DeleteIcon from '../../images/icon-delete.svg';
import editIcon from '../../images/icon-edit.svg';
import { ReplyCardType, ReplyType, UpdatedComment } from '../../Types/Types';
import { useContext, useState } from 'react';
import ReplyBox from './ReplyBox';
import ReplyCard from './ReplyCard';
import { AddReply } from '../Utils/utils';
import { AuthorizationContext } from '../CommentPage';

const CommentBox: React.FC<UpdatedComment> = (props) => {
  let {
    score,
    user,
    content,
    createdAt,
    replies,
    showReply,
    LoggedInUserName,
  } = props;

  const Auth = useContext(AuthorizationContext);
  const [showReplyBox, setShowReplyBox] = useState<boolean>(showReply);

  const [updatedScore, setUpdatedScore] = useState<number>(score);
  const [triggeredScore, setTriggeredScore] = useState<boolean>(false);

  const [showTextArea, setShowTextArea] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>(content);
  const [updatedContent, setUpdatedContent] = useState<string>(content);

  const [updatedReplies, setUpdatedReplies] = useState<any>(replies);

  const addReply = (text: string, replyingTo: string) => {
    if (Auth === null) return;
    AddReply(text, Auth, replyingTo).then((reply) => {
      setUpdatedReplies([...updatedReplies, reply]);
    });
  };

  const handleIncrement = () => {
    if (!triggeredScore) {
      setUpdatedScore((s) => s + 1);
      setTriggeredScore(!triggeredScore);
    } else {
      setUpdatedScore(score);
      setTriggeredScore(!triggeredScore);
    }
  };

  const handleDecrement = () => {
    if (LoggedInUserName) {
      if (!triggeredScore) {
        setUpdatedScore((s) => s - 1);
        setTriggeredScore(!triggeredScore);
      } else {
        setUpdatedScore(score);
        setTriggeredScore(!triggeredScore);
      }
    }
  };

  const handleEdit = () => {
    setShowTextArea(!showTextArea);
    console.log(showTextArea);
  };

  const handleUpdate = () => {
    setUpdatedContent(editedContent);
    setShowTextArea(false);
  };

  const handleReplyInput = () => {
    setShowReplyBox(!showReplyBox);
  };

  return (
    <div className="w-full mb-[20px]">
      <div className="flex min-h-40 w-full bg-white rounded-2xl p-6 mb-[5px]">
        <div className="flex flex-col justify-around items-center h-[100px] w-[40px] px-4 py-[10px] bg-veryLightGray rounded-xl mr-6">
          <button onClick={handleIncrement} className="flex-1">
            <img className="w-[12px] h-[10px] " src={plus} alt="icon" />
          </button>

          <p className="text-center text-xs font-bold text-moderateBlue ">
            {updatedScore}
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
            {user?.username === Auth?.username ? (
              <div className="flex">
                <button className="hidden flex justify-center items-center mr-4">
                  <img
                    className="w-[14px] h-[12px] mr-2 mr-6"
                    src={DeleteIcon}
                    alt="icon"
                  />
                  <p className="text-sm font-bold text-softRed">Delete</p>
                </button>
                <button
                  onClick={handleEdit}
                  className="flex justify-center items-center "
                >
                  <img
                    className="w-[14px] h-[12px] mr-2 mr-6"
                    src={editIcon}
                    alt="icon"
                  />
                  <p className="text-sm font-bold text-moderateBlue">Edit</p>
                </button>
              </div>
            ) : (
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
            )}
          </div>
          {showTextArea ? (
            <div>
              <textarea
                className="leading-5  text-xs font-medium text-lightGray resize-none w-full mr-4 rounded-lg border-2 p-2 border-veryLightGray"
                rows={2}
                onChange={(e) => setEditedContent(e.target.value)}
                value={editedContent}
              />
              <div className="flex justify-end items-end">
                <button
                  onClick={handleUpdate}
                  className="flex justify-center items-center px-6 py-3 h-[52px] bg-moderateBlue  rounded-lg"
                >
                  <p className="text-white text-xs">UPDATE</p>
                </button>
              </div>
            </div>
          ) : (
            <p className="leading-5 text-xs font-medium text-lightGray">
              {updatedContent}
            </p>
          )}
        </div>
      </div>

      {updatedReplies?.length === 0
        ? null
        : updatedReplies?.map((reply: ReplyType) => {
            let updatedReply: ReplyCardType = { ...reply, showReply: false };
            return (
              <div key={reply?.id} className="flex">
                <div className="flex items-center justify-center w-[10%] min-h-[120px]">
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
          addReply={addReply}
          username={JSON.stringify(user?.username)}
          image={user?.image}
        />
      ) : null}
    </div>
  );
};

export default CommentBox;
