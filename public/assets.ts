import { v4 as uuidv4 } from "uuid";
export const navLinks = ["Home","Shop","Blog","Contact"];

export interface Products {
    id: string,
    image: string,
    title: string,
    subtitle: string,
    price: number,
    SalePercentage?: number
    beforeSalePrice?: number
    badgeText?: string
}


export const products: Products[] = [
    {
      id: uuidv4(),
      image: "syltherine.png",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: 2500,
      SalePercentage: -30,
      beforeSalePrice: 3500,
      badgeText: "-30%",
    },
    {
      id: uuidv4(),
      image: "leviosa.png",
      title: "Leviosa",
      subtitle: "Stylish cafe chair",
      price: 2500,
    },
    {
      id: uuidv4(),
      image: "lolito.png",
      title: "Lolito",
      subtitle: "Luxury big sofa",
      price: 7000,
      SalePercentage: -50,
      beforeSalePrice: 14000,
      badgeText: "-50%",
    },
    {
      id: uuidv4(),
      image: "respira.png",
      title: "Respira",
      subtitle: "Outdoor bar table and stool",
      price: 5000,
      badgeText: "New",
    },
    {
      id: uuidv4(),
      image: "grifo.png",
      title: "Grifo",
      subtitle: "Night lamp",
      price: 1500,
    },
    {
      id: uuidv4(),
      image: "muggo.png",
      title: "Muggo",
      subtitle: "Small mug",
      price: 1500,
      badgeText: "New",
    },
    {
      id: uuidv4(),
      image: "pingky.png",
      title: "Pingky",
      subtitle: "Cute bed set",
      price: 7000,
      beforeSalePrice: 14000,
      badgeText: "-50%"
    },
    {
      id: uuidv4(),
      image: "potty.png",
      title: "Potty",
      subtitle: "Minimalist flower pot",
      price: 5000,
      badgeText: "New",
    },
  ];