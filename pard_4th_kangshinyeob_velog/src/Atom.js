import {atom} from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    name: '',
    email: '',
    password: '',
    intro: '',
  },
});

export const postList = atom({
  key: 'post',
  default: [
    { 
      title: "개",
      content: "개",
      date: "2024년 8월 14일",
      author_id: "oksk6681",
      author_name: "살",
      commentNum: 24,
      likeNum: 49
    },   
    {
      title:"개강",
      content:"개처",
      date:"2024년 8월 14일",
      author_id: "oksk6682",
      author_name:"살로",
      commentNum:23,
      likeNum: 3
    },
    {
      title:"개강은",
      content:"개처럼",
      date:"2024년 8월 14일",
      author_id: "oksk6683",
      author_name:"살로몬",
      commentNum:23,
      likeNum:6
    },
    {
      title:"개강은 왜",
      content:"개처럼 강",
      date:"2024년 8월 14일",
      author_id: "oksk6684",
      author_name:"살",
      commentNum:23,
      likeNum:99
    },
    {
      title:"개강은 왜 하",
      content:"개처럼 강해",
      date:"2024년 8월 14일",
      author_id: "oksk6685",
      author_name:"살로",
      commentNum:23,
      likeNum:50
    },
    {
      title:"개강은 왜 하는",
      content:"개처럼 강해지",
      date:"2024년 8월 14일",
      author_id: "oksk6686",
      author_name:"살로몬",
      commentNum: 23,
      likeNum: 1
    }
  ]
});