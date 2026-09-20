export const site = {
  name: "Tangra Masala",
  description:
    "Elmhurst's original Indo-Chinese halal kitchen serving Tangra masala, Manchurian, chilli, Hakka, and wok-fired family plates.",
  yelpUrl: "https://www.yelp.com/biz/tangra-masala-elmhurst-2",
  menuSourceUrl: "https://www.tangrafusion.com/menu",
  voltaUrl: "https://www.volta.nyc/",
};

export const navItems = [
  { label: "Story", href: "/story" },
  { label: "Menu", href: "/menu" },
  { label: "Visit", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const signatures = [
  "Lollypop Chicken",
  "Tangra Masala Fish",
  "Manchurian Paneer",
  "Mixed Hakka Chow Mein",
  "Spicy Salt & Pepper Tiger Prawn",
  "Vegetable Manchow Soup",
];

const tangraGalleryBase = "https://whereyoueat.com/r_gallery_images/rgallery-14735";
const doorDashSpreadImage =
  "https://img.cdn4dd.com/cdn-cgi/image/fit%3Dcover%2Cwidth%3D1200%2Cheight%3D800%2Cformat%3Dauto%2Cquality%3D80/https%3A/doordash-static.s3.amazonaws.com/media/store/header/887bdb6a-e7f4-4cef-8a66-caca42fa66ce.jpg";
const fishFingersImage =
  "https://www.mightysweet.com/wp-content/uploads/2011/06/10-Fish-Fingers-Tangra-Masala.jpg";

export const images = {
  hero: doorDashSpreadImage,
  storefront: "https://media.timeout.com/images/100408171/image.jpg",
  awning:
    "https://3.bp.blogspot.com/-eamaVGCC7ds/WE1FLvVmBxI/AAAAAAAAEtE/ASmHGny8z7gc2NqpSSFTODGC0w-_BlbKwCLcB/s1600/chin1.jpg",
  friedRice:
    "https://whereyoueat.com/r_gallery_images/rgallery-14735/Tangra_Masala19.jpg",
  chilliChicken:
    "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/09/cc-5-Copy.jpg?size=%2A%3A675",
  tangraPlate: "https://www.indiafoodnetwork.in/h-upload/2022/11/16/834446-3.webp",
};

export const menuSections = [
  {
    title: "Appetizers",
    note: "Tangra Fusion's Elmhurst menu.",
    items: [
      {
        name: "Lolly Pop Chicken",
        price: "$13.50",
        description: "Six pieces of Tangra's fried chicken signature.",
        tags: ["Popular"],
      },
      {
        name: "Fried Spicy Chicken Wings",
        price: "$11.95",
        description: "Six chicken wings coated in spicy seasoning.",
        tags: ["Spicy"],
      },
      {
        name: "Tangra Masala Fish Finger",
        price: "$9.95",
        description: "Eight fried fish fingers with masala seasoning.",
        tags: ["Popular"],
      },
      {
        name: "Curry Chicken Roll",
        price: "$5.95",
        description: "Two curried chicken rolls.",
        tags: ["Spicy"],
      },
    ],
  },
  {
    title: "Soups",
    note: "Tangra Fusion's Elmhurst menu.",
    items: [
      {
        name: "Chicken Hot and Sour Soup",
        price: "$4.95",
        description: "Spicy and sour chicken soup.",
        tags: ["Spicy"],
      },
      {
        name: "Chicken Thai Soup",
        price: "$4.95",
        description: "Chicken soup with Thai-style aromatics.",
        tags: ["Spicy"],
      },
      {
        name: "Shrimp Thai Soup",
        price: "$5.50",
        description: "Shrimp soup with spicy Thai-style flavor.",
        tags: ["Spicy"],
      },
      {
        name: "Vegetable Manchow Soup",
        price: "$4.95",
        description: "Vegetarian Manchow-style soup.",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    title: "Noodles & Fried Rice",
    note: "Tangra Fusion's Elmhurst menu.",
    items: [
      {
        name: "Chicken Tangra Masala Chow Mein",
        price: "$13.50",
        description: "Chicken chow mein in Tangra masala.",
        tags: ["Spicy"],
      },
      {
        name: "Mixed Chow Mein",
        price: "$14.50",
        description: "Mixed chow mein with meat, seafood, and vegetables.",
        tags: ["Popular"],
      },
      {
        name: "Chicken Manchurian Fried Rice",
        price: "$12.00",
        description: "Chicken fried rice with Manchurian sauce.",
        tags: [],
      },
      {
        name: "Mixed Tangra Masala Fried Rice",
        price: "$14.00",
        description: "Mixed fried rice with the house Tangra masala profile.",
        tags: ["Spicy"],
      },
    ],
  },
  {
    title: "Vegetarian",
    note: "Tangra Fusion's Elmhurst menu.",
    items: [
      {
        name: "Masala Fries",
        price: "$6.50",
        description: "Home-cut fries with masala seasoning.",
        tags: ["Vegetarian"],
      },
      {
        name: "Paneer Pakora",
        price: "$10.50",
        description: "Eight pieces of spiced paneer pakora.",
        tags: ["Vegetarian"],
      },
      {
        name: "Vegetable Manchurian",
        price: "$14.50",
        description: "Vegetable entree in Manchurian sauce.",
        tags: ["Vegetarian"],
      },
      {
        name: "Vegetable Tangra Masala Chow Mein",
        price: "$12.95",
        description: "Vegetable chow mein with Tangra masala.",
        tags: ["Vegetarian", "Spicy"],
      },
    ],
  },
  {
    title: "Goat, Beef & Chicken",
    note: "Tangra Fusion's Elmhurst menu.",
    items: [
      {
        name: "Tangra Masala Chicken",
        price: "$14.95",
        description: "Chicken in the house Tangra masala sauce.",
        tags: ["Spicy"],
      },
      {
        name: "Manchurian Chicken",
        price: "$14.95",
        description: "Chicken in Manchurian sauce.",
        tags: ["Spicy"],
      },
      {
        name: "Tangra Masala Beef",
        price: "$15.95",
        description: "Beef in Tangra masala sauce.",
        tags: ["Spicy"],
      },
      {
        name: "Chilli Goat",
        price: "$17.95",
        description: "Goat tossed in chile-forward sauce.",
        tags: ["Spicy"],
      },
    ],
  },
  {
    title: "Seafood & Lunch",
    note: "Tangra Fusion's Elmhurst menu.",
    items: [
      {
        name: "Tangra Masala Tiger Prawn",
        price: "$18.95",
        description: "Tiger prawns in Tangra masala.",
        tags: ["Spicy"],
      },
      {
        name: "Fish with Hot Garlic Sauce",
        price: "$16.95",
        description: "Fish in a pungent hot garlic sauce.",
        tags: ["Spicy"],
      },
      {
        name: "Lunch Special A",
        price: "$12.95",
        description: "Served with hot and sour or corn soup and steamed rice.",
        tags: [],
      },
      {
        name: "Lunch Special B",
        price: "$11.95",
        description: "Elmhurst lunch special from the Yelp menu.",
        tags: [],
      },
    ],
  },
];

export const location = {
  name: "Tangra Masala",
  shortName: "Elmhurst",
  address: "87-09 Grand Avenue, Elmhurst, NY 11373",
  phone: "(718) 803-2298",
  phoneHref: "tel:7188032298",
  hours: ["Monday - Thursday: 12PM - 9:30PM", "Friday - Sunday: 1PM - 12AM"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Tangra+Masala+8709+Grand+Ave+Elmhurst+NY+11373",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Tangra%20Masala%2087-09%20Grand%20Avenue%20Elmhurst%20NY%2011373&output=embed",
  image: images.storefront,
  imageAlt: "Tangra Masala storefront on Grand Avenue in Elmhurst",
};

export const galleryImages = [
  {
    src: doorDashSpreadImage,
    alt: "Food from Tangra Masala",
  },
  {
    src: fishFingersImage,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala5.jpg`,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala6.jpg`,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala7.jpg`,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala10.jpg`,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala12.jpg`,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala13.jpg`,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala18.jpg`,
    alt: "Food from Tangra Masala",
  },
  {
    src: `${tangraGalleryBase}/Tangra_Masala19.jpg`,
    alt: "Food from Tangra Masala",
  },
];

export const storyParagraphs = [
  "Tangra Masala is the Elmhurst storefront that helped define New York's appetite for Indo-Chinese cooking: Chinese techniques, Indian spice, halal meat, and plates meant to land in the middle of the table.",
  "The restaurant takes its name from Tangra, Kolkata's historic Chinese-Indian food neighborhood. That influence shows up in the menu's dry-or-gravy choices, chilli sauces, Manchurian dishes, Hakka noodles, and the house Tangra masala blend.",
  "This site focuses on the original Grand Avenue location: a compact Queens dining room known for lollypop chicken, Tangra Masala fish, Manchurian fried rice, spicy soups, paneer, tofu, tiger prawns, and family-style ordering.",
  "Call before visiting for current hours, menu availability, and takeout timing. Online menus are helpful for browsing, but the restaurant is the best source for same-day details.",
];
