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
        path: "/categories/earcuffs",
        newTab: false,
      },
      {
        id: 42,
        title: "Body Chains",
        path: "/categories/bodychains",
        newTab: false,
      },
      {
        id: 43,
        title: "Pulseras",
        path: "/categories/pulseras",
        newTab: false,
      },
      {
        id: 44,
        title: "Aretes",
        path: "/categories/aretes",
        newTab: false,
      },
      {
        id: 45,
        title: "Tobilleras",
        path: "/categories/tobilleras",
        newTab: false,
      },
      {
        id: 46,
        title: "Anillos de Uñas",
        path: "/categories/anillosdeunas",
        newTab: false,
      },
      {
        id: 47,
        title: "Anillos de Pie",
        path: "/categories/anillosdepie",
        newTab: false,
      },
      {
        id: 48,
        title: "Cadenas de Cabeza",
        path: "/categories/cadenasdecabeza",
        newTab: false,
      },
      {
        id: 48,
        title: "Cadenas de Vientre",
        path: "/categories/cadenasdevientre",
        newTab: false,
      },
      {
        id: 48,
        title: "Cadenas de Espalda",
        path: "/categories/cadenasdeespalda",
        newTab: false,
      },
      {
        id: 48,
        title: "Piercings",
        path: "/categories/piercings",
        newTab: false,
      },
      {
        id: 48,
        title: "Soportes de Celulares",
        path: "/categories/soportedecelulares",
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
