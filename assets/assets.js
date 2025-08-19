import user_image from "./user-image.webp";
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
import header_bg_color from "./header-bg-color.webp";
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
    github: "https://github.com/purnadebpaul64/fit-tracker-client",
    description:
      "FitTracker is a full-stack fitness tracking and booking platform built with MERN Stack and Firebase Authentication, enabling secure role-based access for Members, Trainers, and Admins. Users can book personal training slots, join classes, apply to become trainers, make Stripe payments, and engage with the community forum. Admins get powerful analytics dashboards, trainer management tools, and transaction tracking. The platform features a responsive UI with Material Tailwind, Framer Motion animations, and modern UX.",
    keyHighlights: [
      "🔐 Firebase Auth + JWT-secured routes",
      "📅 Trainer booking & application system",
      "💳 Stripe payment integration",
      "📊 Role-based dashboards & analytics",
      "🧾 Classes, reviews, and community forum",
      "📱 Fully responsive modern design",
    ],
    challengesFaced: [
      "Synchronizing Firebase Authentication with custom JWT token validation for secure API access",
      "Implementing role-based dashboards with completely separate UI/UX for Admin, Trainer, and Member",
      "Managing Stripe payment flow for variable pricing plans and dynamic slot booking",
      "Optimizing database queries in MongoDB without Mongoose while maintaining performance",
      "Ensuring smooth state management and data fetching using React Query",
    ],
    futurePlans: [
      "Add real-time chat between trainers and members",
      "Integrate AI-based fitness recommendations and personalized workout plans",
      "Introduce a mobile app version for iOS and Android",
      "Enable video streaming for live virtual classes",
      "Expand the analytics dashboard with more granular user engagement data",
    ],
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
    github: "https://github.com/purnadebpaul64/cascade-blog-client",
    description:
      "CascadeBlog is a modern, responsive, and feature-rich blogging platform built with the MERN stack and Firebase. It provides a seamless experience for blog readers and creators, offering authentication, wishlist, featured content, and dynamic filtering. Designed for individuals who want to share, explore, and interact with blog content across various categories, it supports commenting, wishlisting, blog management, and more. Developed as part of an assignment challenge focused on real-world frontend and full-stack practices.",
    keyHighlights: [
      "🔐 Firebase Auth (Email + Google login) with JWT-secured routes",
      "📝 Blog creation, management, and commenting system",
      "❤️ Wishlist feature for saving favorite blogs",
      "🌟 Featured content display on the homepage",
      "⚡ Dynamic filtering and category-based browsing",
      "🎨 Modern responsive UI with TailwindCSS & animations",
    ],
    challengesFaced: [
      "Integrating and configuring a rich-text editor for blog creation",
      "Designing and implementing a clean dashboard where users can add, view, update, and delete blogs",
      "Building a dynamic filtering system for multiple categories",
      "Implementing wishlist functionality with seamless sync between client and server",
      "Ensuring smooth animations and scroll-based effects without performance issues",
      "Securing routes and APIs with Firebase Auth and JWT",
    ],
    futurePlans: [
      "Implement AI-powered blog writing assistance",
      "Add a blog recommendation system based on user reading history",
      "Enable image uploads within the rich-text editor",
      "Integrate a blog analytics dashboard for creators",
      "Add social sharing features for blog posts",
      "Develop a mobile app version for wider accessibility",
    ],
  },
  {
    title: "Glow Mart",
    subTitle: "Cosmetics eCommerce Website",
    techStack: [wp, woo],
    image: assets.glowmart,
    liveLink: "https://glowmartpoint.com/",
    description:
      "Glow Mart is a modern and visually appealing cosmetics eCommerce website built for a real client using WordPress. Leveraging WPBakery Page Builder for custom layouts and WooCommerce for seamless online shopping, it showcases beauty products with elegance and functionality. Designed for an optimal user experience, it offers secure checkout, easy product management, and a responsive design for all devices.",
    keyHighlights: [
      "🛒 WooCommerce-powered store with secure checkout",
      "🎨 Custom layouts and styling using WPBakery Page Builder",
      "📦 Product catalog with categories, tags, and filtering options",
      "💳 Multiple payment gateway integration",
      "📱 Fully responsive and mobile-friendly design",
      "⭐ Customer reviews and ratings system",
      "🤝 Delivered as a real client project with tailored requirements",
    ],
    challengesFaced: [
      "Customizing WPBakery components for unique product layouts",
      "Configuring WooCommerce to handle multiple product variations and attributes",
      "Ensuring fast load times with optimized images and caching",
      "Integrating multiple payment gateways and testing transactions",
      "Managing SEO optimization while keeping the design clean",
      "Meeting specific design and functionality requirements from the client",
    ],
    futurePlans: [
      "Implement AI-powered product recommendations",
      "Add a loyalty rewards program for frequent customers",
      "Introduce subscription-based beauty boxes",
      "Integrate a virtual try-on feature for cosmetics",
      "Launch a dedicated mobile app for shopping",
    ],
  },
  {
    title: "LeafLog",
    subTitle: "track and manage care tasks for plants",
    techStack: [react, firebase, tailwind, express, mongodb, nodejs],
    image: assets.leafLog,
    liveLink: "https://leaflog-57c1e.web.app/",
    github: "https://github.com/purnadebpaul64/leaflog-client",
    description:
      "Plant Care Tracker is a mobile-responsive full-stack application designed to help users track and manage care tasks for their indoor and outdoor plants. Users can log watering, fertilizing, check plant health status, and receive reminders — all from a personalized dashboard. With a clean and themed UI, the app ensures an enjoyable and efficient plant care experience.",
    keyHighlights: [
      "🔐 Firebase Auth (Login/Register) with protected routes",
      "🌱 Personal plant dashboard for tracking all plants",
      "💧 Log watering, fertilizing, and health checks",
      "🗓️ Task reminders to maintain plant health",
      "✏️ Add, update, and delete plants",
      "📱 Fully responsive design (mobile, tablet, desktop)",
      "🎨 Themed UI with Tailwind CSS & DaisyUI",
      "💬 Alerts & tooltips using SweetAlert2",
      "🎞️ Smooth UX animations with Lottie",
    ],
    challengesFaced: [
      "Designing a clean and intuitive plant dashboard that works seamlessly on mobile and desktop",
      "Implementing a reliable reminder system for care tasks",
      "Ensuring smooth animations without affecting performance",
      "Securing user-specific data with Firebase Authentication",
      "Managing persistent sessions for logged-in users",
    ],
    futurePlans: [
      "Add AI-based plant care suggestions based on plant type and condition",
      "Implement push notifications for watering and fertilizing reminders",
      "Enable image uploads for plant profiles",
      "Introduce plant community features for sharing tips",
      "Add a calendar view for tracking plant care history",
    ],
  },
  {
    title: "One Pause Solution",
    subTitle: "Watch eCommerce Website",
    techStack: [wp, woo],
    image: assets.onePause,
    liveLink: "https://onepausesolution.com/",
    description:
      "One Pause Solution is a sleek and modern watch eCommerce website built for a real client. Designed to showcase premium timepieces, it delivers a seamless online shopping experience with a visually appealing interface, secure checkout, and intuitive navigation. The site is optimized for both desktop and mobile users, ensuring accessibility and performance across devices.",
    keyHighlights: [
      "🛒 WooCommerce-powered store with secure checkout",
      "🎨 Custom design tailored for a luxury watch brand",
      "📦 Organized product catalog with categories and filtering",
      "💳 Multiple payment gateway integration",
      "📱 Fully responsive and mobile-friendly layout",
      "⭐ Customer reviews and ratings feature",
      "🤝 Delivered as a real client project with brand-specific customization",
    ],
    challengesFaced: [
      "Designing a luxury-focused UI to match the premium watch brand identity",
      "Customizing Elementor layouts for unique product presentation",
      "Ensuring WooCommerce handles multiple product variations smoothly",
      "Integrating and testing multiple payment gateways",
      "Optimizing performance while using high-resolution product images",
    ],
    futurePlans: [
      "Implement AI-powered product recommendations",
      "Introduce a loyalty program for frequent buyers",
      "Enable product customization options",
      "Add a virtual try-on feature for watches",
      "Launch a dedicated mobile app for shopping",
    ],
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
    url: "https://www.linkedin.com/in/purna-deb-paul-sanju",
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
