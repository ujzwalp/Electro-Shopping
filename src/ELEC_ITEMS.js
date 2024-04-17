import images from "../assets/*.jpg";
import images1 from "../assets/*.png";

const ELECT_ITEMS = [
  {
    id: Math.random(),
    name: "Apple iPhone 15 Pro Max",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("apple"))
      .map((subArray) => subArray[1]),
    price: "1,48,900",
    images: Object.entries(images)
      .filter((image) => image[0].includes("iphone"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Apple 2023 MacBook Pro",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("apple"))
      .map((subArray) => subArray[1]),
    price: "1,54,990",
    images: Object.entries(images)
      .filter((image) => image[0].includes("macbook"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Apple iPad Pro 11",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("apple"))
      .map((subArray) => subArray[1]),
    price: "89,900",
    images: Object.entries(images)
      .filter((image) => image[0].includes("ipad"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Sony WH-1000XM5",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("sony"))
      .map((subArray) => subArray[1]),
    price: "26,990",
    images: Object.entries(images)
      .filter((image) => image[0].includes("sony"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Samsung Galaxy Z Fold5 5G",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("samsung"))
      .map((subArray) => subArray[1]),
    price: "1,54,999",
    images: Object.entries(images)
      .filter((image) => image[0].includes("fold"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Samsung Galaxy S24 Ultra 5G AI Smartphone",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("samsung"))
      .map((subArray) => subArray[1]),
    price: "1,39,999",
    images: Object.entries(images)
      .filter((image) => image[0].includes("ultra"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Fitbit Versa 4 Fitness Watch",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("fitbit"))
      .map((subArray) => subArray[1]),
    price: "18,449",
    images: Object.entries(images)
      .filter((image) => image[0].includes("fitbit"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Keychron Q3 Wired Custom Mechanical Keyboard",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("keychron"))
      .map((subArray) => subArray[1]),
    price: "21,249",
    images: Object.entries(images)
      .filter((image) => image[0].includes("keychron"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Logitech MX Master 3S",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("logitech"))
      .map((subArray) => subArray[1]),
    price: "8,995",
    images: Object.entries(images)
      .filter((image) => image[0].includes("logi"))
      .map((subArray) => subArray[1]),
  },
];

export default ELECT_ITEMS;
