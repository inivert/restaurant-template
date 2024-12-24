export const menuData = {
  specials: [
    {
      id: 'special-1',
      name: "Chef's Special Wagyu Burger",
      description: "Premium Wagyu beef patty with truffle mayo, caramelized onions, aged cheddar, and house-made brioche bun",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
      ingredients: ["Wagyu beef", "Truffle mayo", "Caramelized onions", "Aged cheddar", "Brioche bun", "Arugula"],
      isSpecial: true
    },
    {
      id: 'special-2',
      name: "Lobster Thermidor",
      description: "Fresh lobster in a rich brandy cream sauce, gratinated with Gruyère cheese, served with asparagus",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200",
      ingredients: ["Lobster", "Brandy cream sauce", "Gruyère cheese", "Asparagus", "Fresh herbs"],
      isSpecial: true
    },
    {
      id: 'special-3',
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with black truffle shavings, wild mushrooms, and aged Parmesan",
      price: 36.99,
      image: "https://images.unsplash.com/photo-1676037150408-4b59a542fa7c?q=80&w=1200",
      ingredients: ["Arborio rice", "Black truffle", "Wild mushrooms", "Parmesan", "White wine"],
      isSpecial: true,
      dietary: "Vegetarian"
    },
    {
      id: 'special-4',
      name: "Tomahawk Steak",
      description: "32oz dry-aged tomahawk ribeye with bone marrow butter and roasted vegetables",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200",
      ingredients: ["Tomahawk ribeye", "Bone marrow butter", "Roasted vegetables", "Herbs"],
      isSpecial: true
    }
  ],
  starters: [
    {
      id: 'starter-1',
      name: "Crispy Calamari",
      description: "Tender calamari rings in a light tempura batter, served with citrus aioli and marinara sauce",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1200",
      ingredients: ["Calamari", "Tempura batter", "Citrus aioli", "Marinara sauce", "Lemon"],
      dietary: "Contains seafood"
    },
    {
      id: 'starter-2',
      name: "Bruschetta",
      description: "Grilled sourdough topped with fresh tomatoes, basil, garlic, and extra virgin olive oil",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=1200",
      ingredients: ["Sourdough bread", "Tomatoes", "Basil", "Garlic", "Olive oil"],
      dietary: "Vegetarian"
    },
    {
      id: 'starter-3',
      name: "Tuna Tartare",
      description: "Fresh yellowfin tuna with avocado, sesame oil, and wasabi aioli on crispy wonton",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200",
      ingredients: ["Yellowfin tuna", "Avocado", "Sesame oil", "Wasabi aioli", "Wonton crisps"],
      dietary: "Contains raw fish"
    },
    {
      id: 'starter-4',
      name: "Burrata Salad",
      description: "Creamy burrata with heirloom tomatoes, basil pesto, and aged balsamic reduction",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1200",
      ingredients: ["Burrata cheese", "Heirloom tomatoes", "Basil pesto", "Balsamic reduction"],
      dietary: "Vegetarian"
    }
  ],
  mains: [
    {
      id: 'main-1',
      name: "Grilled Ribeye Steak",
      description: "21-day aged ribeye steak with roasted garlic butter, served with truffle mashed potatoes",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200",
      ingredients: ["Ribeye steak", "Garlic butter", "Truffle", "Potatoes", "Seasonal vegetables"],
      spicyLevel: 0
    },
    {
      id: 'main-2',
      name: "Pan-Seared Salmon",
      description: "Fresh Atlantic salmon with lemon herb butter sauce and quinoa pilaf",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1200",
      ingredients: ["Atlantic salmon", "Lemon herb butter", "Quinoa", "Vegetables"],
      dietary: "Gluten-free"
    },
    {
      id: 'main-3',
      name: "Duck Confit",
      description: "Slow-cooked duck leg with cherry gastrique, roasted fingerling potatoes, and braised greens",
      price: 38.99,
      image: "https://images.unsplash.com/photo-1619894991209-9f9694be045a?q=80&w=1200",
      ingredients: ["Duck leg", "Cherry gastrique", "Fingerling potatoes", "Braised greens"],
      isPopular: true
    },
    {
      id: 'main-4',
      name: "Wild Mushroom Ravioli",
      description: "House-made pasta filled with wild mushrooms in a sage brown butter sauce",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?q=80&w=1200",
      ingredients: ["Fresh pasta", "Wild mushrooms", "Sage", "Brown butter", "Parmesan"],
      dietary: "Vegetarian"
    }
  ],
  desserts: [
    {
      id: 'dessert-1',
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1200",
      ingredients: ["Dark chocolate", "Butter", "Eggs", "Flour", "Vanilla ice cream"],
      dietary: "Vegetarian"
    },
    {
      id: 'dessert-2',
      name: "Crème Brûlée",
      description: "Classic French vanilla custard with caramelized sugar crust",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1200",
      ingredients: ["Heavy cream", "Vanilla bean", "Eggs", "Sugar"],
      dietary: "Vegetarian"
    },
    {
      id: 'dessert-3',
      name: "Tiramisu",
      description: "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200",
      ingredients: ["Mascarpone", "Ladyfingers", "Coffee", "Cocoa", "Marsala wine"],
      dietary: "Contains alcohol"
    },
    {
      id: 'dessert-4',
      name: "Matcha Green Tea Cheesecake",
      description: "Light and creamy matcha cheesecake with raspberry coulis and white chocolate shavings",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1556079403-4c7eb24892f5?q=80&w=1200",
      ingredients: ["Cream cheese", "Matcha powder", "White chocolate", "Raspberries"],
      dietary: "Vegetarian"
    }
  ],
  drinks: [
    {
      id: 'drink-1',
      name: "Signature Mojito",
      description: "Fresh mint, lime, rum, and sparkling water with a hint of elderflower",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1200",
      ingredients: ["Rum", "Fresh mint", "Lime", "Elderflower syrup", "Sparkling water"],
    },
    {
      id: 'drink-2',
      name: "Artisanal Coffee",
      description: "Single-origin coffee, freshly roasted and brewed to perfection",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200",
      ingredients: ["Single-origin coffee beans", "Filtered water"],
      dietary: "Vegan"
    },
    {
      id: 'drink-3',
      name: "Smoky Old Fashioned",
      description: "Bourbon whiskey with maple smoke, aromatic bitters, and orange zest",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200",
      ingredients: ["Bourbon", "Aromatic bitters", "Orange", "Maple smoke"],
      isPopular: true
    },
    {
      id: 'drink-4',
      name: "Berry Kombucha Mocktail",
      description: "House-made berry kombucha with fresh mint and lime, served over crushed ice",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200",
      ingredients: ["Berry kombucha", "Fresh mint", "Lime", "Crushed ice"],
      dietary: "Non-alcoholic"
    }
  ]
}; 