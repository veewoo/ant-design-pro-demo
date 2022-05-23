export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export type BasicListItemDataType = {
  id: string;
  owner: string;
  title: string;
  avatar: string;
  cover: string;
  status: 'normal' | 'exception' | 'active' | 'success';
  percent: number;
  logo: string;
  href: string;
  body?: any;
  updatedAt: number;
  createdAt: number;
  subDescription: string;
  description: string;
  activeUser: number;
  newUser: number;
  star: number;
  like: number;
  message: number;
  content: string;
  members: Member[];
};

export type GameListItemDataType = {
  id: string;
  genre: any;
  name: string;
  description: string;
  contract: string;
  chain: any;
  websiteurl: string;
  avatarurl: string;
  coverurl: string;
  covervideourl: string;
  whitepaperurl: string;
  explorerurl: string;
  twitterurl: string;
  discordurl: string;
  facebookurl: string;
  tagsList: Array<string>;
  priority: number;
};
