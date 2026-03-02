import { USER } from "@/portfolio/data/user";
import type { NavItem } from "@/portfolio/types/nav";

export const SITE_INFO = {
    name: USER.displayName,
    url: process.env.APP_URL || "https://ashishkumar.tech",
    ogImage: USER.ogImage,
    description: USER.bio,
    keywords: USER.keywords,
};

export const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Projects",
        href: "/projects",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export const GITHUB_USERNAME = "ashishDevv";
export const SOURCE_CODE_GITHUB_REPO = "portfolio-repo";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ashishDevv";
