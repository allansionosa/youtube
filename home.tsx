import { HomeOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { GrChannel } from "react-icons/gr";
import { BsCameraReels } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
export const categories = [
  "All",
  "Javascript",
  "Typescript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Web Development",
  "Coding",
];

export const videos = [
  {
    id: "1",
    title: "Web Development for beginners",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/laptop.jpg",
    },
    views: 12313123,
    postedAt: new Date("2023-10-27"),
    duration: 938,
    thumbnailUrl: "http://i3.ytimg.com/vi/HfTXHrWMGVY/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    title: "React for 40 Minutes",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/programming.jpg",
    },
    views: 876654,
    postedAt: new Date("2020-10-27"),
    duration: 2400,
    thumbnailUrl: "http://i3.ytimg.com/vi/Rh3tobg7hEo/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "3",
    title: "React Crash course",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/computer.jpg",
    },
    views: 395674,
    postedAt: new Date("2019-8-16"),
    duration: 9567,
    thumbnailUrl: "http://i3.ytimg.com/vi/b9eMGE7QtTk/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "4",
    title: "Tailwind Guide",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/top.jpg",
    },
    views: 7645645,
    postedAt: new Date("2020-11-28"),
    duration: 69978,
    thumbnailUrl: "http://i3.ytimg.com/vi/pfaSUYaSgRo/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "5",
    title: "Animate on Scroll",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/what.png",
    },
    views: 70989980,
    postedAt: new Date("2022-10-26"),
    duration: 938,
    thumbnailUrl: "http://i3.ytimg.com/vi/T33NN_pPeNI/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "6",
    title: "CSS Scroll trick",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/seven.jpg",
    },
    views: 2465324,
    postedAt: new Date("2021-8-26"),
    duration: 978,
    thumbnailUrl: "http://i3.ytimg.com/vi/ytl6TrroGis/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "7",
    title: "Flexbox for beginners",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/c.jpg",
    },
    views: 7646536,
    postedAt: new Date("2019-8-6"),
    duration: 900,
    thumbnailUrl: "http://i3.ytimg.com/vi/fYq5PXgSsbE/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: "8",
    title: "Learn Flexbox in 10 minutes",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl: "./src/assets/robot.jpg",
    },
    views: 542322,
    postedAt: new Date("2018-11-29"),
    duration: 600,
    thumbnailUrl: "http://i3.ytimg.com/vi/daES7aQqjHY/hqdefault.jpg",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
];
export const items: MenuProps["items"] = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: "2",
    icon: <BsCameraReels />,
    label: "Reels",
  },
  {
    key: "3",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
  {
    key: "4",
    icon: <GrChannel />,
    label: "Your Channel",
  },
  {
    key: "5",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
  {
    key: "6",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
  {
    key: "7",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
];

export const others: MenuProps["items"] = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: "2",
    icon: <BsCameraReels />,
    label: "Reels",
  },
  {
    key: "3",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
  {
    key: "4",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
  {
    key: "4",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
  {
    key: "4",
    icon: <MdOutlineSubscriptions />,
    label: "Subscription",
  },
];
