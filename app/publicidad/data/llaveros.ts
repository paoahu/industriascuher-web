import type { LlaveroCategoria } from "../types/publicidad";

export const llaveros: LlaveroCategoria[] = [
  {
    key: "acrilicos",
    label: "Llaveros acrílicos",
    previewImages: [
      "/IMG_Publicidad/llaveros/acrilicos/1.jpg",
      "/IMG_Publicidad/llaveros/acrilicos/2.jpg",
      "/IMG_Publicidad/llaveros/acrilicos/3.jpg",
      "/IMG_Publicidad/llaveros/acrilicos/4.jpg",
      "/IMG_Publicidad/llaveros/acrilicos/5.jpg",
      "/IMG_Publicidad/llaveros/acrilicos/6.jpg",
    ],
    subcats: [
      {
        key: "redondos",
        label: "Redondos",
        href: "/publicidad/llaveros?cat=acrilicos&sub=redondos",
        previewImage: "/IMG_Publicidad/llaveros/acrilicos/redondos/cover.jpg",

        modelos: ["CR-37","CR-33","CR-25","LAZ-25","GP25DC","CR-Z D","R-25 RUEDA"],
      },
      {
        key: "rectangulares",
        label: "Rectangulares",
        href: "/publicidad/llaveros?cat=acrilicos&sub=rectangulares",
        previewImage: "/IMG_Publicidad/llaveros/acrilicos/redondos/cover.jpg",

        modelos: ["CR-30","CR-45","CR-70","CR-18","CR-32","CK-40","CR-40","CF-40","CR-50","CR-OP","CR-SOFT"],
      },
      {
        key: "formas",
        label: "Formas",
        href: "/publicidad/llaveros?cat=acrilicos&sub=formas",
        previewImage: "/IMG_Publicidad/llaveros/acrilicos/redondos/cover.jpg",

        modelos: ["CR-COR","CR-X","CR-Y","CR-MD 25 MOSQUETON"],
      },
      {
        key: "pulsera",
        label: "Pulsera",
        href: "/publicidad/llaveros?cat=acrilicos&sub=pulsera",
        previewImage: "/IMG_Publicidad/llaveros/acrilicos/redondos/cover.jpg",

        modelos: ["WRT-25"],
      },
      {
        key: "abrebotellas",
        label: "Abrebotellas",
        href: "/publicidad/llaveros?cat=acrilicos&sub=abrebotellas",
        previewImage: "/IMG_Publicidad/llaveros/acrilicos/redondos/cover.jpg",

        modelos: ["CR-AB"],
      },
      {
        key: "tira",
        label: "Tira",
        href: "/publicidad/llaveros?cat=acrilicos&sub=tira",
        previewImage: "/IMG_Publicidad/llaveros/acrilicos/redondos/cover.jpg",

        modelos: ["AR-25 S","AR-25 T"],
      },
    ],
    
  },
  {
    key: "metalicos",
    label: "Llaveros metálicos",
    previewImages: [
      "/IMG_Publicidad/llaveros/metalicos/1.jpg",
      "/IMG_Publicidad/llaveros/metalicos/2.jpg",
      "/IMG_Publicidad/llaveros/metalicos/3.jpg",
      "/IMG_Publicidad/llaveros/metalicos/4.jpg",
      "/IMG_Publicidad/llaveros/metalicos/5.jpg",
      "/IMG_Publicidad/llaveros/metalicos/6.jpg",
    ],
    subcats: [{
      key: "redondos",
      label: "Redondo",
      href: "/publicidad/llaveros?cat=metalicos&sub=redondos",
      previewImage: "/IMG_Publicidad/llaveros/metalicos/redondos/cover.jpg",

      modelos: ["AR-25 S","AR-25 T"],
    },
    {
      key: "rectangulares",
      label: "Rectangulares",
      href: "/publicidad/llaveros?cat=metalicos&sub=rectangulares",
      previewImage: "/IMG_Publicidad/llaveros/metalicos/rectangulares/cover.jpg",
      modelos: ["SM-10D","SM-40D","MA-18 D","MK-25","ML-40","MF-25","MG-40"],
    },
    {
      key: "formas",
      label: "Formas",
      href: "/publicidad/llaveros?cat=metalicos&sub=formas",
      previewImage: "/IMG_Publicidad/llaveros/metalicos/formas/cover.jpg",
      modelos: ["MFT","MBK","MGF","MTN","MPD","MRB","MULTI 3","MV FURGO","MY CASA","MX CAMISETA","MPC"],
    },
    
  ],
  },
  {
    key: "carro",
    label: "Llavero carro",
    previewImages: [
      "/IMG_Publicidad/llaveros/carro/1.jpg",
      "/IMG_Publicidad/llaveros/carro/2.jpg",
      "/IMG_Publicidad/llaveros/carro/3.jpg",
      "/IMG_Publicidad/llaveros/carro/4.jpg",
      "/IMG_Publicidad/llaveros/carro/5.jpg",
      "/IMG_Publicidad/llaveros/carro/6.jpg",
    ],
    subcats: [],
  },
  {
    key: "simil_piel",
    label: "Llaveros símil piel",
    previewImages: [
      "/IMG_Publicidad/llaveros/simil_piel/1.jpg",
      "/IMG_Publicidad/llaveros/simil_piel/2.jpg",
      "/IMG_Publicidad/llaveros/simil_piel/3.jpg",
      "/IMG_Publicidad/llaveros/simil_piel/4.jpg",
      "/IMG_Publicidad/llaveros/simil_piel/5.jpg",
      "/IMG_Publicidad/llaveros/simil_piel/6.jpg",
    ],
    subcats: [],
  },
];
