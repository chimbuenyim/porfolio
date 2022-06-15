import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    path: "",
  },
  {
    id: 2,
    icon: <FaGithub />,
    path: "",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    path: "",
  },
];

const Copyrights = `Copyright © ${new Date().getFullYear()}. All rights reserved `;

const FooterConfig = { SocialLinks, Copyrights };
export default FooterConfig;
