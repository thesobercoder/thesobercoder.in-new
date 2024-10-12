import IconDev from "../components/icons/dev.astro";
import IconGithub from "../components/icons/github.astro";
import IconLinkedin from "../components/icons/linkedin.astro";
import IconTwitter from "../components/icons/twitter.astro";

export const SOCIALS = [
  {
    name: "Github",
    url: "https://github.com/thesobercoder",
    icon: IconGithub,
    target: "_blank",
    rel: "noreferrer noopener",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sohamdasgupta",
    icon: IconLinkedin,
    target: "_blank",
    rel: "noreferrer noopener",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/thesobercoder",
    icon: IconTwitter,
    target: "_blank",
    rel: "noreferrer noopener",
  },
  {
    name: "Dev.to",
    url: "/blog",
    icon: IconDev,
    target: "_self",
    rel: "",
  },
];
