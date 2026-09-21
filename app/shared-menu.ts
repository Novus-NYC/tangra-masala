type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  tags: string[];
};

const item = (name: string, price?: string, description?: string): MenuItem => ({
  name,
  price,
  description,
  tags: [],
});

// Transcribed from the shared Tangra Asian Fusion menu at tangrafusionnyc.com.
export const sharedMenuSections = [
  {
    title: "Appetizers",
    items: [
      item("Fried Chicken Wings", "$5.95"), item("Fried Chicken Wonton", "$5.25"),
      item("Shrimp Roll", "$4.95"), item("Chicken Mo Mo (Steamed or Fried)", "$4.95"),
      item("Shrimp Ball", "$8.50"), item("Curry Chicken Roll", "$3.95"),
      item("Chicken Stick", "$5.95"), item("Chicken Pakora", "$7.95"),
      item("Spicy Pepper Chicken", "$7.95"), item("Fried Spicy Chicken Wings", "$6.95"),
      item("Lollypop Chicken", "$8.50"), item("Tangra Masala Fish Finger", "$7.95"),
      item("Shrimp or Fish Pakora", "$8.50"),
    ],
  },
  {
    title: "Soup",
    items: [
      item("Chicken Corn Soup", "$3.95"), item("Chicken Mushroom Soup", "$3.95"),
      item("Chicken Noodle Soup", "$3.95"), item("Chicken Wonton Soup", "$3.95"),
      item("Chicken Asparagus Soup", "$3.95"), item("Crab Meat Corn Soup", "$4.50"),
      item("Chicken Hot & Sour Soup", "$3.95"), item("Chicken Thai Soup", "$3.95"),
      item("Shrimp Thai Soup", "$4.50"), item("Chicken Manchow Soup", "$3.95"),
      item("Manchow Soup", "$4.50"), item("Chicken Tangra Masala Soup", "$3.95"),
      item("Tangra Masala Soup", "$4.50"),
    ],
  },
  {
    title: "Fried Rice",
    note: "Tangra Masala, Manchurian, or Singapore.",
    items: [
      item("Chicken Fried Rice", "$8.50"), item("Regular Chicken Fried Rice", "$7.50"),
      item("Beef Fried Rice", "$8.95"), item("Regular Beef Fried Rice", "$7.95"),
      item("Shrimp Fried Rice", "$9.50"), item("Regular Shrimp Fried Rice", "$8.50"),
      item("Mixed Fried Rice", "$9.95"), item("Regular Mixed Fried Rice", "$9.50"),
      item("Steamed Rice", "$1.95"),
    ],
  },
  {
    title: "Noodles",
    note: "Tangra Masala, Manchurian, or Garlic unless otherwise noted.",
    items: [
      item("Chicken Chow Mein", "$9.95"), item("Beef Chow Mein", "$10.50"),
      item("Shrimp Chow Mein", "$10.95"), item("Mixed Chow Mein", "$11.50"),
      item("Chicken Noodle (Singapore, Pad Thai, or Pan Fried)", "$9.95"),
      item("Beef Noodle (Singapore, Pad Thai, or Pan Fried)", "$10.50"),
      item("Shrimp Noodle (Singapore, Pad Thai, or Pan Fried)", "$10.95"),
      item("Mixed Noodle (Singapore, Pad Thai, or Pan Fried)", "$11.50"),
      item("Chicken Chop Suey (Chinese or American)", "$9.95"),
      item("Beef Chop Suey (Chinese or American)", "$10.50"),
      item("Shrimp Chop Suey (Chinese or American)", "$11.50"),
      item("Chicken Chop Suey (Tangra Masala)", "$10.50"),
      item("Beef Chop Suey (Tangra Masala)", "$10.95"),
      item("Shrimp Chop Suey (Tangra Masala)", "$11.95"),
      item("Chicken Chow Mein (Hakka)", "$9.50"), item("Beef Chow Mein (Hakka)", "$9.95"),
      item("Shrimp Chow Mein (Hakka)", "$10.50"), item("Mixed Chow Mein (Hakka)", "$10.95"),
    ],
  },
  {
    title: "Chicken",
    note: "Tangra Masala, Manchurian, Chilli, Fusion, Basil, or Lat-Mee.",
    items: [
      item("Chicken (Dry or Gravy)", "$11.95"), item("Crispy Ginger Chicken", "$11.95"),
      item("Chicken with Spicy Black Bean Sauce", "$11.95"), item("Chicken with Satay Sauce", "$11.95"),
      item("Chicken with Hot Garlic Sauce", "$11.95"), item("Ginger Chicken", "$11.95"),
      item("Chicken Wings (Dry or Gravy)", "$11.95"), item("Chicken with Mixed Vegetables", "$11.95"),
      item("Chicken with Broccoli", "$11.95"), item("Sweet & Sour Chicken", "$11.95"),
      item("General Tso Chicken", "$11.95"), item("Chicken Cutlet", "$11.95"),
    ],
  },
  {
    title: "Beef",
    note: "Tangra Masala, Manchurian, Chilli, Fusion, Basil, or Lat-Mee.",
    items: [
      item("Beef (Dry or Gravy)", "$12.95"), item("Beef with Spicy Black Bean Sauce", "$12.95"),
      item("Beef with Satay Sauce", "$12.95"), item("Beef with Hot Garlic Sauce", "$12.95"),
      item("Beef with Broccoli", "$12.95"), item("Crispy Ginger Beef (Dry)", "$12.95"),
      item("Rib Eye Steak (10 oz.)", "$21.50"), item("Tangra Rib Eye Steak (10 oz.)", "$21.50"),
    ],
  },
  {
    title: "Seafood",
    note: "Tangra Masala, Manchurian, Chilli, Fusion, Basil, or Lat-Mee.",
    items: [
      item("Tiger Prawn (Dry or Gravy)", "$15.95"), item("Spicy Salt & Pepper Tiger Prawn (Dry)", "$15.95"),
      item("Tiger Prawn with Sweet & Spicy Garlic Sauce", "$15.95"), item("Tiger Prawn with Hot Garlic Sauce", "$15.95"),
      item("Tiger Prawn with Mixed Vegetables", "$15.95"), item("Sweet & Sour Tiger Prawn", "$15.95"),
      item("Fish (Dry or Gravy)", "$13.95"), item("Fish with Sweet & Spicy Garlic Sauce", "$13.95"),
      item("Fish with Hot Garlic Sauce", "$13.95"), item("Fish with Spicy Black Bean Sauce", "$13.95"),
      item("Fish with Ginger & Scallion", "$13.95"), item("Fish with Mixed Vegetable", "$13.95"),
      item("Sweet & Sour Fish", "$13.95"),
    ],
  },
  {
    title: "Sizzling Dishes",
    note: "Tangra Masala, Manchurian, Chilli, Fusion, Basil, or Lat-Mee.",
    items: [
      item("Sizzling Tiger Prawn", "$16.95"), item("Sizzling Beef", "$13.95"),
      item("Sizzling Goat", "$15.95"), item("Sizzling Chicken", "$12.95"),
      item("Sizzling Fish", "$14.95"), item("Sizzling Vegetable, Baby Corn, Gobi, or Okra", "$12.95"),
      item("Sizzling Paneer", "$13.95"), item("Sizzling Paneer with Mixed Vegetable", "$13.95"),
      item("Sizzling Tofu", "$11.95"), item("Sizzling Tofu with Mixed Vegetable", "$11.95"),
    ],
  },
  {
    title: "Goat",
    items: [
      item("Goat (Dry or Gravy)", "$14.95"), item("Goat with Spicy Black Bean Sauce", "$14.95"),
      item("Goat with Hot Garlic Sauce", "$14.95"), item("Goat with Ginger Scallion (Gravy)", "$14.95"),
      item("Goat Curry", "$14.95"),
    ],
  },
  {
    title: "Authentic Chinese Cuisine",
    note: "Tangra Masala, Manchurian, Chilli, Fusion, Basil, or Lat-Mee.",
    items: [
      item("Kung Pao Chicken", "$14.95", "Diced chicken with green and red pepper and nut sauteed in a dark and sweet soya sauce base."),
      item("Kung Pao Beef", "$15.95"), item("Chicken with Kai Lan", "$12.95", "Shredded chicken with kailan, also known as Chinese broccoli, mixed with dark sauce."),
      item("Beef with Kai Lan", "$13.95"), item("Breaded Shrimp", "$16.95", "Deep-fried marinated shrimp served with dipping sauce."),
      item("Tofu with Shrimp", "$13.95", "Tofu with peas, carrots, and shrimp in white sauce."),
      item("Chef's Special Fish with Black Bean Sauce", "$19.95", "Two pieces of steamed or fried fish with ginger, garlic, and special black bean sauce."),
      item("Fung Sau Tofu", "$12.95", "Tofu with mushrooms and carrots cooked in oyster sauce."),
      item("Green Jade Vegetable", "$11.95", "A variety of mixed vegetables with Hunan sauce."),
      item("Crab / Lobster", "SP", "Choice of Tangra Masala or Hot Garlic Sauce."),
    ],
  },
  {
    title: "Vegetarian Fried Rice & Noodles",
    items: [
      item("Vegetable Fried Rice (Tangra Masala, Manchurian, or Singapore)", "$8.50"),
      item("Vegetable Chow Mein (Tangra Masala, Manchurian, or Garlic)", "$9.50"),
      item("Regular Vegetable Fried Rice", "$7.50"), item("Vegetable Chow Mein (Hakka)", "$8.50"),
      item("Vegetable Noodles (Singapore, Pad Thai, or Pan-Fried)", "$9.50"),
      item("Vegetable Chop Suey (Tangra Masala, Chinese, or American)", "$9.95"),
    ],
  },
  {
    title: "Vegetarian Appetizer",
    items: [
      item("Vegetable Roll", "$3.95"), item("Vegetable Mo Mo (Steamed or Pan Fried)", "$4.95"),
      item("Vegetable Pakora", "$6.95"), item("Paneer Pakora", "$8.50"),
      item("Paneer Spring Roll", "$4.50"), item("Paneer Fried Wonton", "$5.95"),
      item("Masala Fries", "$4.50"), item("Gold Coin Vegetable", "$4.50"),
      item("Home Cut Fries", "$4.50"), item("House Garden Salad", "$5.95"),
    ],
  },
  {
    title: "Vegetarian Entree",
    note: "Tangra Masala, Manchurian, Chilli, Fusion, Basil, Lat-Mee, Black Bean, Sweet & Sour, or Red Chilli.",
    items: [
      item("Vegetable Kofta (Dry or Gravy)", "$11.50"), item("Gobi (Dry or Gravy)", "$11.50"),
      item("Eggplant (Dry or Gravy)", "$11.50"), item("Tofu (Dry or Gravy)", "$11.50"),
      item("Tofu with Mixed Vegetables", "$11.50"), item("String Bean (Dry or Gravy)", "$11.50"),
      item("Okra (Dry or Gravy)", "$11.50"), item("Potatoes (Dry or Gravy)", "$11.50"),
      item("Baby Corn (Dry or Gravy)", "$11.50"), item("Mixed Vegetables", "$11.50"),
      item("Paneer (Dry or Gravy)", "$12.95"), item("Paneer with Mixed Vegetables", "$12.95"),
      item("Okra Salt & Pepper", "$11.95"), item("Gobi Salt & Pepper", "$11.50"),
      item("Paneer Salt & Pepper", "$11.50"), item("Tofu with Spicy Black Bean Sauce", "$11.50"),
    ],
  },
  {
    title: "Vegetarian Soup",
    items: [
      item("Vegetable Hot & Sour Soup", "$3.95"), item("Vegetable Manchow Soup", "$3.95"),
      item("Vegetable Thai Soup", "$3.95"), item("Vegetable Corn Soup", "$3.95"),
      item("Vegetable Noodle Soup", "$3.95"), item("Vegetable Tangra Masala Soup", "$3.95"),
      item("Vegetable Clear Soup", "$3.95"),
    ],
  },
  {
    title: "Lunch Special A",
    note: "Monday - Friday, noon - 3PM (except holidays). Served with hot & sour soup or corn soup and steamed rice.",
    items: [
      item("Chicken Chilli, Ginger, or Manchurian", "$8.95"), item("Sweet & Sour Chicken", "$8.95"),
      item("Chicken with Mixed Vegetable", "$8.95"), item("Beef with Satay Sauce", "$8.95"),
      item("Beef with Broccoli", "$8.95"), item("Tangra Masala Fish", "$8.95"),
      item("Shrimp with Spicy Black Bean Sauce", "$8.95"), item("Curry Shrimp", "$8.95"),
      item("Manchurian Paneer", "$8.95"), item("Manchurian Eggplant", "$8.95"),
      item("Chilli Tofu", "$8.95"), item("Sauteed Spicy String Bean", "$8.95"),
      item("Tofu with Mixed Vegetable", "$8.95"),
    ],
  },
  {
    title: "Lunch Special B",
    note: "Served with hot & sour soup or corn soup and steamed rice.",
    items: [
      item("Chicken Chow Mein", "$7.95"), item("Vegetable Chow Mein", "$7.95"),
      item("Chicken Fried Rice", "$7.95"), item("Vegetable Fried Rice", "$7.95"),
      item("Chicken Singapore Noodle", "$7.95"), item("Vegetable Singapore Noodle", "$7.95"),
      item("Chicken Pad Thai Noodle", "$7.95"), item("Vegetable Pad Thai Noodle", "$7.95"),
    ],
  },
  {
    title: "Dessert",
    items: [
      item("Kulfi Ice Cream (Falooda, Malai, or Pista)", "$3.50"), item("Lychees", "$3.95"),
      item("Lychees with Ice Cream", "$4.95"), item("Ice Cream (Mango or Vanilla)", "$3.50"),
      item("Fruit Parfait", "$5.95"), item("Rasmalai", "$4.95"),
    ],
  },
  {
    title: "Beverages",
    items: [
      item("Soda (Coke, Diet Coke, Ginger Ale, Sprite, Sunkist, or Pepsi)", "$2.00"),
      item("Ice Tea", "$2.50"), item("Spring Water", "$2.00"), item("Milk Shakes", "$4.95"),
      item("Mocktail", "$4.95"), item("Lassi (Mango, Sweet, or Salted)", "$4.95"),
    ],
  },
];
