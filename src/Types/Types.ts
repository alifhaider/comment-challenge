export interface CurrentUser {
  image: Image;
  username: string;
}
interface Image {
  png: string;
  webp: string;
}

export interface RefObject {
  handleReplyButton: () => void;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replies?: [];
  user: {
    image: Image;
    username: string;
  };
}

export interface UpdatedComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replies?: [];
  user: {
    image: Image;
    username: string;
  };
  showReply: boolean;
  LoggedInUserName?: string;
  LoggedInUserImage?: Image;
}

export interface ReplyCardType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: Image;
    username: string;
  };
  showReply: boolean;
  replyButtonClick?: (val: boolean) => void;
  // addReply?: (event: React.MouseEvent<HTMLButtonElement>) => {
  //   text: string;
  //   replyingTo: string;
  // };
}

export interface ReplyType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: {
    image: Image;
    username: string;
  };
}

export interface InputReplyType {
  image: Image;
  username: string;
  addReply: (text: string, replyingTo: string) => void;
}

export interface CommentSubmitType {
  image: Image;
  username: string;
  addComment: (text: string) => void;
}
