import images from "../assets/*.jpg";
import images1 from "../assets/*.png";

const ELECT_ITEMS = [
  {
    id: Math.random(),
    name: "Apple iPhone 15 Pro Max",
    description:
      "Introducing the iPhone 15 Pro Max, the epitome of innovation in the smartphone realm. Boasting a sleek design and powerhouse features, it promises to elevate your daily experiences. With a stunning 6.9-inch Super Retina XDR display, A14 Bionic chip, and a pro-grade triple-camera system, capturing moments with unparalleled clarity has never been easier. ",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("apple"))
      .map((subArray) => subArray[1]),
    price: "₹1,48,900",
    specs: [
      "iPhone 15 Pro Max",
      "6.7-inch Super Retina XDR display",
      "Apple A17 Bionic chip",
      "6GB",
      "128GB, 256GB, 512GB, or 1TB",
      "Triple 12MP rear cameras (Wide, Ultra Wide, Telephoto)",
      "12MP TrueDepth camera",
      "Built-in rechargeable lithium-ion battery",
      "iOS 16",
      "5G, Wi-Fi 6E, Bluetooth 5.2",
      "Silver, Graphite, Gold, Pacific Blue",
      "Height: 160.8mm, Width: 78.1mm, Depth: 7.65mm",
      "Approximately 238 grams",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("iphone"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Apple 2023 MacBook Pro",
    description:
      "The MacBook M3 Pro 2023 model, a marvel of technological advancement in the world of laptops. With its sleek design and powerful performance, it redefines the standards of productivity and creativity. Equipped with the latest M3 chip, this MacBook delivers lightning-fast processing speeds and seamless multitasking.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("apple"))
      .map((subArray) => subArray[1]),
    price: " ₹1,54,990",
    specs: [
      "MacBook Pro (2023)",
      "16-inch Liquid Retina XDR display",
      "Apple M3 Pro chip",
      "16GB or 32GB",
      "512GB, 1TB, 2TB, 4TB, or 8TB",
      "Integrated Apple M3 Pro GPU or optional dedicated graphics",
      "Built-in rechargeable lithium-polymer battery",
      "macOS 13",
      "Wi-Fi 7, Bluetooth 5.3, Thunderbolt 5 ports",
      "Space Gray, Silver",
      "Height: 16.2mm, Width: 35.5cm, Depth: 24.1cm",
      "Approximately 1.9 kg",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("macbook"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Apple iPad Pro 11",
    description:
      "The iPad Pro equipped with the M2 chip signifies a significant advancement in tablet performance and efficiency. Harnessing the power of Apple's cutting-edge M2 architecture, this device delivers unparalleled speed and responsiveness, redefining the boundaries of what's possible with a tablet.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("apple"))
      .map((subArray) => subArray[1]),
    price: " ₹89,900",
    specs: [
      "iPad Pro 11 (2023)",
      "11-inch Liquid Retina display with ProMotion technology",
      "Apple A15X Bionic chip",
      "8GB or 16GB",
      "128GB, 256GB, 512GB, 1TB, or 2TB",
      "12MP Ultra Wide front camera, 12MP Wide rear camera with LiDAR scanner",
      "Built-in rechargeable lithium-polymer battery",
      "iPadOS 17",
      "Wi-Fi 6, Bluetooth 5.3, 5G (optional)",
      "Silver, Space Gray",
      "Height: 247.6mm, Width: 178.5mm, Depth: 5.9mm",
      "Approximately 466 grams (Wi-Fi model), 468 grams (Wi-Fi + Cellular model)",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("ipad"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Sony WH-1000XM5",
    description:
      "The Sony WH-1000XM5 headphones are wireless noise canceling headphones with a lightweight design and up to 30 hours of battery life. They have two processors controlling eight microphones, including four beamforming microphones that use Precise Voice Pickup technology to isolate your voice for hands-free calls.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("sony"))
      .map((subArray) => subArray[1]),
    price: "₹26,990",
    specs: [
      "Sony WH-1000XM5",
      "Over-ear, closed-back",
      "40mm, dome type (CCAW Voice coil)",
      "4Hz - 40,000Hz",
      "47 ohms (1kHz)",
      "104.5dB / mW (1kHz)",
      "5.0",
      "Active noise cancellation (ANC)",
      "Up to 30 hours (with ANC)",
      "Approximately 3 hours (full charge)",
      "Approximately 254g (without cable)",
      "Black, Silver",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("sony"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Samsung Galaxy Z Fold5 5G",
    description:
      "The Samsung Galaxy Z Fold 5 (stylized as Samsung Galaxy Z Fold5) is an Android-based foldable smartphone that was announced by Samsung Electronics on July 26, 2023. The unveiling marked the first time that the Galaxy Unpacked event was held in the company's home country of South Korea. The phone was released on August 11, 2023.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("samsung"))
      .map((subArray) => subArray[1]),
    price: "₹1,54,999",
    specs: [
      "Samsung Galaxy Z Fold5 5G",
      "7.6 inches Dynamic AMOLED 2X, 120Hz",
      "6.2 inches Dynamic AMOLED 2X, 120Hz",
      "Qualcomm Snapdragon 8 Gen 2",
      "12GB",
      "256GB or 512GB (UFS 3.1)",
      "Triple 12MP (Wide, Telephoto, Ultra Wide)",
      "10MP (Wide)",
      "4MP",
      "4400mAh",
      "Android 13 with One UI 5.1",
      "5G, Wi-Fi 6E, Bluetooth 5.2",
      "Phantom Black, Phantom Green, Phantom Silver",
      "67.1 x 158.2 x 16.0mm",
      "128.1 x 158.2 x 6.3mm",
      "Approximately 271g",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("fold"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Samsung Galaxy S24 Ultra 5G AI Smartphone",
    description:
      "the Samsung Galaxy S24 Ultra sets a new standard for flagship smartphones, combining exquisite design, powerful performance, and innovative features to deliver an unmatched user experience. At the heart of this flagship device lies a powerful Exynos 8 series chip, ensuring lightning-fast performance and seamless multitasking.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("samsung"))
      .map((subArray) => subArray[1]),
    price: "₹1,39,999",
    specs: [
      "Samsung Galaxy S24 Ultra 5G AI Smartphone",
      "6.9 inches Dynamic AMOLED 2X, 120Hz",
      "Samsung Exynos 2200",
      "12GB or 16GB",
      "256GB, 512GB, or 1TB (UFS 3.1)",
      "Quad 108MP (Wide), 48MP (Periscope Telephoto), 12MP (Ultra Wide), 5MP (Depth)",
      "40MP (Under Display)",
      "5000mAh",
      "Android 13 with One UI 6.0",
      "5G, Wi-Fi 7, Bluetooth 5.3",
      "Phantom Black, Phantom Blue, Phantom Silver",
      "Height: 165.0mm, Width: 75.6mm, Depth: 8.9mm",
      "Approximately 215g",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("ultra"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Fitbit Versa 4 Fitness Watch",
    description:
      "The Fitbit Versa 4 is a sophisticated yet user-friendly smartwatch designed to help you lead a healthier and more active lifestyle. With its sleek and stylish design, the Versa 4 seamlessly blends into your everyday attire while offering a wealth of features to enhance your fitness journey.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("fitbit"))
      .map((subArray) => subArray[1]),
    price: "₹18,449",
    specs: [
      "Fitbit Versa 4 Fitness Watch",
      "1.58 inches AMOLED display",
      "Up to 6 days (varies with use)",
      "Up to 50 meters",
      "24/7 heart rate tracking",
      "Advanced sleep tracking with Sleep Score",
      "Tracks steps, distance, floors climbed, active minutes",
      "20+ exercise modes including running, swimming, yoga",
      "Built-in GPS",
      "NFC payments with Fitbit Pay",
      "Call, text, and app notifications",
      "Compatible with iOS and Android devices",
      "Black, Gray, Pink, Blue",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("fitbit"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Keychron Q3 Wired Custom Mechanical Keyboard",
    description:
      "The Keychron Q3 Wired Keyboard is a high-performance mechanical keyboard designed for professionals, gamers, and enthusiasts alike. Boasting a sleek and minimalist design, the Q3 combines style with functionality, making it a perfect addition to any workspace or gaming setup.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("keychron"))
      .map((subArray) => subArray[1]),
    price: "₹21,249",
    specs: [
      "Keychron Q3 Wired Custom Mechanical Keyboard",
      "Choice of various mechanical switches (e.g., Gateron, Cherry MX)",
      "Customizable RGB backlighting",
      "Full-size layout with numeric keypad",
      "Aluminum frame with ABS keycaps",
      "Wired USB-C connection",
      "Compatible with Windows, macOS, and Linux",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("keychron"))
      .map((subArray) => subArray[1]),
  },
  {
    id: Math.random(),
    name: "Logitech MX Master 3S",
    description:
      "The Logitech MX Master 3S is the ultimate productivity mouse, designed to elevate your workflow to new heights. With its sleek and ergonomic design, the MX Master 3S fits comfortably in your hand, allowing for extended periods of use without fatigue.",
    company: Object.entries(images1)
      .filter((image) => image[0].includes("logitech"))
      .map((subArray) => subArray[1]),
    price: "₹8,995",
    specs: [
      "Logitech MX Master 3S",
      "Wireless (Bluetooth or USB receiver)",
      "Darkfield High Precision sensor (up to 4000 DPI)",
      "7 programmable buttons",
      "MagSpeed Electromagnetic scrolling",
      "Up to 70 days on a full charge (rechargeable via USB-C)",
      "Windows, macOS, Linux",
    ],
    images: Object.entries(images)
      .filter((image) => image[0].includes("logi"))
      .map((subArray) => subArray[1]),
  },
];

export default ELECT_ITEMS;
