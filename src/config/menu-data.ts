import type { Colors } from "../global-types";

export interface Link {
  label: string;
  url: string;
  color?: Colors;
  icon?: string;
  links?: Link[];
}

export interface NavItem {
  id: string;
  label: string;
  url: string;
  color?: Colors;
  icon?: string;
  children?: NavItem[];
}

export const navItems = [
  {
    id: "home",
    title: "Home",
    url: "/",
  },
  {
    id: "about",
    title: "About",
    url: "/about",
  },
  {
    id: "services",
    title: "Services",
    children: [
      {
        id: "web-design",
        title: "Web Design",
        url: "/services/web-design",
      },
      {
        id: "seo",
        title: "SEO",
        children: [
          {
            id: "local-seo",
            title: "Local SEO",
            url: "/services/seo/local",
          },
          {
            id: "national-seo",
            title: "National SEO",
            url: "/services/seo/national",
          },
        ],
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    url: "/contact",
  },
];

export const topLinks: NavItem[] = [
  {
    id: "home",
    label: "Home",
    url: "/",
    color: "primary",
    children: [
      {
        id: "home-a",
        label: "- Home a",
        url: "/",
        color: "accent1",
      },
      {
        id: "home-b",
        label: "- Home b",
        url: "/",
        color: "accent2",
      },
    ],
  },
  {
    id: "about",
    label: "About",
    url: "/about",
    color: "secondary",
    // children: [],
  },
  {
    id: "services",
    label: "Contact",
    url: "/contact",
    color: "accent1",
    // children: [],
  },
  {
    id: "blog",
    label: "Blog",
    url: "/blog",
    color: "primary",
    children: [
      {
        id: "blog-a",
        label: "Option 1",
        url: "/",
        color: "secondary",
        icon: "icon BLOG",
        children: [
          {
            id: "blog-a",
            label: "Option 1-a",
            url: "/",
            color: "accent1",
            icon: "icon1",
          },
          {
            id: "blog-b-2",
            label: "Option 2-b",
            url: "/",
            color: "accent2",
            icon: "icon2",
          },
          {
            id: "blog-a",
            label: "Option 1-c",
            url: "/",
            color: "accent3",
            icon: "icon3",
          },
          {
            id: "blog-b-2",
            label: "Option 2-d",
            url: "/",
            color: "accent4",
            icon: "icon4",
          },
        ],
      },
      {
        id: "blog-b",
        label: "Option 2",
        url: "/",
        color: "accent2",
        icon: "icon2",
        // children: [],
      },
    ],
  },
];
