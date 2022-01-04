import { CurrentUser } from '../../Types/Types';

export const AddComment = async (text: string, currentUser: CurrentUser) => {
  return {
    id: Math.floor(Math.random() * 10000),
    content: text,
    createdAt: new Date().toISOString(),
    score: 0,
    user: {
      image: {
        png: currentUser?.image?.png,
        webp: currentUser?.image?.webp,
      },
      username: currentUser?.username,
    },
    replies: [] as any,
  };
};

const getDate = () => {
  let day = new Date().toISOString;
  console.log(day);
};

export const AddReply = async (
  text: string,
  currentUser: CurrentUser,
  replyingTo: string
) => {
  return {
    id: Math.floor(Math.random() * 10000),
    content: text,
    createdAt: new Date().toISOString(),
    score: 0,
    replyingTo: replyingTo,
    user: {
      image: {
        png: currentUser?.image?.png,
        webp: currentUser?.image?.webp,
      },
      username: currentUser?.username,
    },
    replies: [] as any,
  };
};
