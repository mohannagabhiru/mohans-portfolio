
import { MdOutlineContacts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdContacts } from "react-icons/io";
import { MdDynamicFeed } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";

import { RiNewspaperLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { TbListNumbers } from 'react-icons/tb';
import { FaDog } from 'react-icons/fa';


const PROJECTS_DATA = [
  {
    id: 1,
    title: "Portfolio website",
    category: "react",
    showOnHome: false,
    description:
      "My personal portfolio website which showcase all of  Me, My Skills, My Work, My Contact Information, etc. ",
    toolsUsed: "React, CSS, JSX",
    icon: <CgProfile />,
    githubLink: "https://github.com/mohannagabhiru/presence",
    liveLink: "https://mohans23.netlify.app",
  },
  {
    id: 2,
    title: "Cook Fast",
    category: "react",
    showOnHome: true,
    description:
      "One stop solution to entry level folks for recipes with ingredients to servings",
    toolsUsed: "ReactJS, Material UI, Firebase",
    icon: <CgProfile />,
    githubLink: "https://github.com/mohannagabhiru/CookFast",
    liveLink: "https://cookfast.netlify.app/",

  },
  {
    id: 3,
    title: "Crypto Tracker",
    category: "react",
    showOnHome: true,

    description:
      "All crypto lovers, this is the site to check where is our portfolio heading to",
    toolsUsed: "ReactJS, Material UI, Firebase",
    icon: <MdOutlineLocalMovies />,
    githubLink: "https://github.com/mohannagabhiru/myCrypto",
    liveLink: "https://gotocrypto.netlify.app/",
  },
  {
    id: 4,
    title: "Furniture Store",
    category: "react",
    showOnHome: true,
    description:
      "A mini Store where you can purchase furniture of different brands",
    toolsUsed: "ReactJS, Styled Components",
    icon: <MdDynamicFeed />,
    githubLink: "https://github.com/mohannagabhiru/furniture-store",
    liveLink: "https://furniture-store23.netlify.app/",
  },
  {
    id: 5,
    title: "Elon Site",
    category: "javaScript",
    showOnHome: false,
    description:
      "A site with all the current projects being driven by Elon Musk",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <FaCalculator />,
    githubLink: "https://github.com/mohannagabhiru/Elon_site",
  },
  {
    id: 6,
    title: "Saloon",
    category: "javaScript",
    showOnHome: false,
    description:
      "A simple site with barber and other information",
    toolsUsed: "HTML, CSS, JavaScript",
    icon: <FaCalculator />,
    githubLink: "https://github.com/mohannagabhiru/saloon/tree/master",
  },

];

export default PROJECTS_DATA;
