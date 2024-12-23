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
    }
  ]
}; 