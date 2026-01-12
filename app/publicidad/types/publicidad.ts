export type GrupoPublicidad =
  | "Chapas"
  | "Llaveros"
  | "Imanes"
  | "Máquinas y moldes"
  | "Otros";

export type ProductoPublicidad = {
  id: string;
  grupo: GrupoPublicidad;
  subgrupo: string;
  nombre: string;
  ref?: string;
  medidas?: string;
  acabado?: string;
  descripcionCorta?: string;
  descripcionLarga?: string;
  imageSrc: string;
  imageDetailSrc?: string;
  moq?: number;
};

export type LlaveroCategoriaKey = "acrilicos" | "metalicos" | "carro" | "simil_piel";

export type LlaveroSubcat = {
  key: string;
  label: string;
  href: string;
  previewImage: string;
  modelos: string[];
};

export type LlaveroCategoria = {
  key: LlaveroCategoriaKey;
  label: string;
  previewImages: string[];
  subcats: LlaveroSubcat[];
};

export type ModalView =
  | { type: "producto"; producto: ProductoPublicidad }
  | { type: "llaveros"; categoria?: LlaveroCategoriaKey };
