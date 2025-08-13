import user_image from "./user-image.svg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import react from "./react.png";
import nextjs from "./nextjs.png";
import tailwind from "./tailwind.png";
import typescript from "./typescript.png";
import framer from "./framer.png";
import nodejs from "./nodejs.png";
import express from "./express.png";
import firebase from "./firebase.png";
import jwt from "./jwt.png";
import wp from "./wp.png";
import woo from "./woo.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import cascade from "./cascade.jpg";
import fitTracker from "./fit-tracker.jpg";
import glowmart from "./glowmart.jpg";
import leafLog from "./leaflog.png";
import onePause from "./onepause.png";
import funnelHacker from "./funnelhacker.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
export const assets = {
  cascade,
  fitTracker,
  glowmart,
  leafLog,
  onePause,
  funnelHacker,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  react,
  nextjs,
  tailwind,
  framer,
  nodejs,
  jwt,
  express,
  vscode,
  firebase,
  typescript,
  figma,
  git,
  mongodb,
  wp,
  woo,
  right_arrow_white,
  logo,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Fit Tracker",
    subTitle: "Full-Stack Fitness Tracking Platform",
    techStack: [
      react,
      nodejs,
      express,
      mongodb,
      firebase,
      jwt,
      tailwind,
      framer,
    ],
    image: assets.fitTracker,
    liveLink: "https://fit-tracker-2d229.web.app/",
  },
  {
    title: "CascadeBlogs",
    subTitle: "Full-Stack Blogging Platform",
    techStack: [
      react,
      nodejs,
      express,
      mongodb,
      firebase,
      jwt,
      tailwind,
      framer,
    ],
    image: assets.cascade,
    liveLink: "https://cascadeblog-63b21.web.app/",
  },
  {
    title: "Glow Mart",
    subTitle: "Cosmetics eCommerce Website",
    techStack: [wp, woo],
    image: assets.glowmart,
    liveLink: "https://glowmartpoint.com/",
  },
  {
    title: "LeafLog",
    subTitle: "track and manage care tasks for plants",
    techStack: [react, firebase, tailwind, express, mongodb, nodejs],
    image: assets.leafLog,
    liveLink: "https://leaflog-57c1e.web.app/",
  },
  {
    title: "One Pause Solution",
    subTitle: "Watch eCommerce Website",
    techStack: [wp, woo],
    image: assets.onePause,
    liveLink: "https://onepausesolution.com/",
  },
  {
    title: "Funnel Hacker HQ",
    subTitle: "Funnel Building Website",
    techStack: [wp, woo],
    image: assets.funnelHacker,
    liveLink: "https://funnelhackerhq.com/",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    institute: "Institute of Science & Technology",
    description: "B.Sc. in Computer Science and Engineering",
    duration: "Running",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Expriences",
    institute: "TechyPark Technologies, Inc.",
    description: "Junior Frontend Developer",
    duration: "2023 ( jan ) - 2025 ( feb )",
  },
];

export const toolsData = [
  assets.react,
  assets.nextjs,
  assets.tailwind,
  assets.typescript,
  assets.express,
  assets.firebase,
  assets.nodejs,
  assets.mongodb,
  assets.framer,
  assets.git,
  assets.jwt,
  assets.wp,
  assets.woo,
  // assets.vscode,
  assets.figma,
];

export const socialLinks = [
  {
    icon: <IoMailUnreadOutline size={18} />,
    url: "mailto:purnadebpaul64@gmail.com",
  },
  { icon: <FaGithub size={18} />, url: "https://github.com/purnadebpaul64" },
  {
    icon: <FaLinkedinIn size={18} />,
    url: "www.linkedin.com/in/purna-deb-paul-sanju",
  },
  {
    icon: <FaInstagram size={18} />,
    url: "https://www.instagram.com/purna.deb.paul.sanju/",
  },
  {
    icon: <FaFacebookF size={18} />,
    url: "https://www.facebook.com/purna.deb.paul.sanju",
  },
];
