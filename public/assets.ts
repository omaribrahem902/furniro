import { v4 as uuidv4 } from "uuid";
export const navLinks = [{
  "name": "Home",
  "link": "/",
},
{
  "name": "Shop",
  "link": "/shop",
},
{
  "name": "Blog",
  "link": "/blog",
},
{
  "name": "Contact",
  "link": "/contact",
}];


export interface Products {
    id: string,
    image: string,
    title: string,
    subtitle: string,
    category: string,
    price: number,
    description?: string,
    SalePercentage?: number
    beforeSalePrice?: number
    badgeText?: string
}


export const products: Products[] = [
    {
      id: "1",
      image: "syltherine.png",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      category: "chairs",
      price: 2500,
      description: "A chic and ergonomic cafe chair designed for comfort and style, perfect for modern dining or casual seating areas.",
      SalePercentage: -30,
      beforeSalePrice: 3500,
      badgeText: "-30%",
    },
    {
      id: uuidv4(),
      image: "leviosa.png",
      title: "Leviosa",
      subtitle: "Stylish cafe chair",
      category: "chairs",
      description: "An elegant cafe chair with a sleek design, ideal for adding a touch of sophistication to any indoor or outdoor setting.",
      price: 2500,
    },
    {
      id: uuidv4(),
      image: "lolito.png",
      title: "Lolito",
      subtitle: "Luxury big sofa",
      category: "luxury_sofas",
      description: "A spacious and luxurious sofa offering ultimate comfort with premium upholstery, perfect for a lavish living room.",
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
      category: "outdoor_furniture",
      description: "A stylish and durable bar table and stool set designed for outdoor entertaining, blending functionality with modern aesthetics.",
      price: 5000,
      badgeText: "New",
    },
    {
      id: uuidv4(),
      image: "grifo.png",
      title: "Grifo",
      subtitle: "Night lamp",
      category: "lamp",
      description: "A sleek and modern night lamp that provides soft, ambient lighting, ideal for bedrooms or cozy reading corners.",
      price: 1500,
    },
    {
      id: uuidv4(),
      image: "muggo.png",
      title: "Muggo",
      subtitle: "Small mug",
      category: "outdoor_furniture",
      description: "A compact and stylish mug designed for outdoor use, perfect for enjoying a hot beverage in any setting.",
      price: 1500,
      badgeText: "New",
    },
    {
      id: uuidv4(),
      image: "pingky.png",
      title: "Pingky",
      subtitle: "Cute bed set",
      category: "outdoor_furniture",
      description: "An adorable and comfortable bed set tailored for outdoor relaxation, combining cute design with sturdy construction.",
      price: 7000,
      beforeSalePrice: 14000,
      badgeText: "-50%"
    },
    {
      id: uuidv4(),
      image: "potty.png",
      title: "Potty",
      subtitle: "Minimalist flower pot",
      category: "luxury_sofas",
      description: "A minimalist flower pot with a sleek design, perfect for enhancing indoor or outdoor spaces with a touch of greenery.",
      price: 5000,
      badgeText: "New",
    }
  ];