import React, { useState } from 'react';
import { CurrentUser } from '../../Types/Types';

const CreateComment: React.FC<CurrentUser> = ({ username, image }) => {
  const [commentInputValue, setCommentInputValue] = useState('');
  return (
    <div className="flex h-[144px] w-full bg-white rounded-2xl p-6">
      <img className="w-[40px] h-[40px] mr-4" src={image?.png} alt="" />
      <textarea
        className="resize-none flex-1 h-full mr-4 rounded-lg border-2 border-veryLightGray"
        onChange={(e) => setCommentInputValue(e.target.value)}
        value={commentInputValue}
        rows={3}
        cols={5}
      />
      <button className="px-8 py-4 h-[52px] bg-moderateBlue text-white text-xs rounded-lg">
        SEND
      </button>
    </div>
  );
};

export default CreateComment;
