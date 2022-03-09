export class Product {

  id: string;

  name: string;

  shortDescription: string;

  longDescription: string;

  imageUrls: string[];

  active: boolean;

  constructor(pId: string, pName: string, pShortDesc: string, pLognDesc: string, pImageUrls: string[], pActive: boolean) {
    this.id = pId;
    this.name = pName;
    this.shortDescription = pShortDesc;
    this.longDescription = pLognDesc;
    this.imageUrls = pImageUrls;
    this.active = pActive;
  }


}
