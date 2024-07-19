import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Acerca de",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contacto",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Productos",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Anillos",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Aretes",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Pulseras",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Cadena de Espalda",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Tobillera",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Cadena",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Accesorios",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Ear cuff",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
