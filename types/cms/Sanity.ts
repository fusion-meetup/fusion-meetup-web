export interface SanityDocumentBase {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export interface SanityObjectBase {
  _key: string;
  _type: string;
}

export interface SanityImg {
  _type: "img";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt: string;
  height: number;
  width: number;
}

export interface SanityImgMapped {
  src: string;
  alt: string;
  width: number;
  height: number;
}
