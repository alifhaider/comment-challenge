import React, { useState } from 'react';
import { CurrentUser } from '../../Types/Types';

const ReplyBox: React.FC<CurrentUser> = ({ username, image }) => {
  let name = username.replace(/^"(.*)"$/, '$1');
  const [commentInputValue, setCommentInputValue] = useState('@' + name);
  return (
    <div className="w-full flex h-[120px] bg-white rounded-2xl p-6 mb-4">
      <img className="w-[40px] h-[40px] mr-4" src={image?.png} alt="" />
      <textarea
        className="resize-none flex-1 h-full mr-4 rounded-lg border-2  p-4 border-veryLightGray"
        onChange={(e) => setCommentInputValue(e.target.value)}
        value={commentInputValue}
        rows={3}
        cols={5}
      />
      <button className="px-8 py-4 h-[52px] bg-moderateBlue text-white text-xs rounded-lg">
        Reply
      </button>
    </div>
  );
};

export default ReplyBox;
