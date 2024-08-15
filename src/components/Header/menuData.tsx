import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "Productos",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Ear Cuffs",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Body Chains",
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
        title: "Aretes",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Tobilleras",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Anillos de Uñas",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Anillos de Pie",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Cadenas de Cabeza",
        path: "/error",
        newTab: false,
      },
      {
        id: 48,
        title: "Cadenas de Vientre",
        path: "/error",
        newTab: false,
      },
      {
        id: 48,
        title: "Cadenas de Espalda",
        path: "/error",
        newTab: false,
      },
      {
        id: 48,
        title: "Piercings",
        path: "/error",
        newTab: false,
      },
      {
        id: 48,
        title: "Soportes de Celulares",
        path: "/error",
        newTab: false,
      },

    ],
    },
    {
      id: 33,
      title: "Servicios",
      path: "/services",
      newTab: false,
    },
    {
      id: 3,
      title: "Contacto",
      path: "/contact",
      newTab: false,
    },
          /*  {
      id: 2,
      title: "Acerca",
      path: "/about",
      newTab: false,
    },
  */
];

export default menuData;
