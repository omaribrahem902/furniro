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
    quantity: number,
    description?: string,
    SalePercentage?: number
    beforeSalePrice?: number
    badgeText?: string
}


export const products: Products[] = [
  {
    id: "b58e1d79-f8ab-47fc-b43b-01d50c43d001",
    image: "syltherine.png",
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    category: "chairs",
    price: 2500,
    quantity:1,
    description: "A chic and ergonomic cafe chair designed for comfort and style, perfect for modern dining or casual seating areas.",
    SalePercentage: -30,
    beforeSalePrice: 3500,
    badgeText: "-30%",
  },
  {
    id: "9cbb935f-9310-4b82-9c4a-cf712a6c0667",
    image: "leviosa.png",
    title: "Leviosa",
    subtitle: "Stylish cafe chair",
    category: "chairs",
    description: "An elegant cafe chair with a sleek design, ideal for adding a touch of sophistication to any indoor or outdoor setting.",
    price: 2500,
    quantity:1,
  },
  {
    id: "30aeb8b6-60a2-40a0-b3b1-1040d9a9a88d",
    image: "lolito.png",
    title: "Lolito",
    subtitle: "Luxury big sofa",
    category: "luxury_sofas",
    description: "A spacious and luxurious sofa offering ultimate comfort with premium upholstery, perfect for a lavish living room.",
    price: 7000,
    quantity:1,
    SalePercentage: -50,
    beforeSalePrice: 14000,
    badgeText: "-50%",
  },
  {
    id: "cd0b6799-7b04-4207-9963-fd87a26399a4",
    image: "respira.png",
    title: "Respira",
    subtitle: "Outdoor bar table and stool",
    category: "outdoor_furniture",
    description: "A stylish and durable bar table and stool set designed for outdoor entertaining, blending functionality with modern aesthetics.",
    price: 5000,
    quantity:1,
    badgeText: "New",
  },
  {
    id: "10de0a49-c2b5-407b-9355-dc3d181accc9",
    image: "grifo.png",
    title: "Grifo",
    subtitle: "Night lamp",
    category: "lamp",
    description: "A sleek and modern night lamp that provides soft, ambient lighting, ideal for bedrooms or cozy reading corners.",
    price: 1500,
    quantity:1,
  },
  {
    id: "79064095-8a95-439a-bd1e-7fd2ecdd9914",
    image: "muggo.png",
    title: "Muggo",
    subtitle: "Small mug",
    category: "outdoor_furniture",
    description: "A compact and stylish mug designed for outdoor use, perfect for enjoying a hot beverage in any setting.",
    price: 1500,
    quantity:1,
    badgeText: "New",
  },
  {
    id: "c39a5e8d-9d2e-4c38-9d30-c71c15e04bb9",
    image: "pingky.png",
    title: "Pingky",
    subtitle: "Cute bed set",
    category: "outdoor_furniture",
    description: "An adorable and comfortable bed set tailored for outdoor relaxation, combining cute design with sturdy construction.",
    price: 7000,
    quantity:1,
    beforeSalePrice: 14000,
    badgeText: "-50%"
  },
  {
    id: "62ea2b5a-e03c-4d3c-b558-7b6ddbd71d42",
    image: "potty.png",
    title: "Potty",
    subtitle: "Minimalist flower pot",
    category: "luxury_sofas",
    description: "A minimalist flower pot with a sleek design, perfect for enhancing indoor or outdoor spaces with a touch of greenery.",
    price: 5000,
    quantity:1,
    badgeText: "New",
  },
  {
  id: "c1e8b5c7-3f5b-4e3a-901c-8fbd9f5c5d9a",
  image: "grey_chair.jpg",
  title: "Nordic Charm",
  subtitle: "Modern grey fabric chair",
  category: "chairs",
  description: "A Scandinavian-inspired chair with a soft grey fabric seat and backrest, paired with sleek wooden legs. Perfect for stylish dining or home office settings.",
  price: 3200,
  quantity:1,
  badgeText: "New",
},
// {
//   id: "ff7812a4-b62f-4cc7-b37b-4db2a13be591",
//   image: "wooden_chair.jpg",
//   title: "Aurelio",
//   subtitle: "Vintage wooden lounge chair",
//   category: "chairs",
//   description: "A handcrafted lounge chair with classic cane weaving and rich teak wood finish, perfect for adding timeless elegance to any living space.",
//   price: 1600,
//   badgeText: "New",
// }
];
