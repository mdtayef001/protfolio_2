import { socialLinks } from "@/assets/assets";

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed top-1/2 left-3 -translate-y-1/2 flex-col gap-4 z-50">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border border-gray-400 rounded-full text-gray-700 hover:text-black hover:border-black socialHover hover:-translate-y-1 duration-500 backdrop-blur-2xl"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
