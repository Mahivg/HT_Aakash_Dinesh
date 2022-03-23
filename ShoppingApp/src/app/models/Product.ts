export class Product {

  id: string;
  name: string;
  description: string;
  imageUrls: string[];

  constructor(pId: string, pName: string, pDesc: string, pImages: string[]) {
    this.id = pId;
    this.name = pName;
    this.description = pDesc;
    this.imageUrls = pImages;
  }

}
