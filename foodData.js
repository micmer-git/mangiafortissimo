// Updated Food Data
const foodData = {
            "Mozzarella (1/2 cup)": {
    emoji: "🧀", 
    grams: 56, 
    calories: 170, 
    totalFat: 12, 
    saturatedFat: 7, 
    monounsaturatedFat: 3, 
    polyunsaturatedFat: 0.5, 
    omega3: 0, 
    omega6: 0, 
    carbs: 1, 
    sugar: 1, 
    protein: 12, 
    fiber: 0, 
    vitaminA: 9, 
    vitaminB12: 13, 
    vitaminC: 0, 
    vitaminD: 6, 
    vitaminE: 0.3, 
    vitaminK: 0.6, 
    calcium: 380, 
    magnesium: 12, 
    potassium: 40, 
    iron: 0.2, 
    zinc: 1, 
    selenium: 11, 
    sodium: 180, 
    category: "dairy"
}, "Orange (1 medium)": {
    emoji: "🍊", 
    grams: 131, 
    calories: 62, 
    totalFat: 0.2, 
    saturatedFat: 0, 
    monounsaturatedFat: 0, 
    polyunsaturatedFat: 0.1, 
    omega3: 0, 
    omega6: 20, 
    carbs: 15, 
    sugar: 12, 
    protein: 1, 
    fiber: 3, 
    vitaminA: 4, 
    vitaminB12: 0, 
    vitaminC: 100, 
    vitaminD: 0, 
    vitaminE: 0.2, 
    vitaminK: 0, 
    calcium: 52, 
    magnesium: 13, 
    potassium: 237, 
    iron: 0.1, 
    zinc: 0.1, 
    selenium: 0.5, 
    sodium: 0, 
    category: "fruits"
},
"Basil (1 tbsp)": {
    emoji: "🌿", 
    grams: 2.6, 
    calories: 1, 
    totalFat: 0, 
    saturatedFat: 0, 
    monounsaturatedFat: 0, 
    polyunsaturatedFat: 0, 
    omega3: 3, 
    omega6: 1, 
    carbs: 0.1, 
    sugar: 0, 
    protein: 0.1, 
    fiber: 0.1, 
    vitaminA: 3, 
    vitaminB12: 0, 
    vitaminC: 0.5, 
    vitaminD: 0, 
    vitaminE: 0, 
    vitaminK: 10, 
    calcium: 5, 
    magnesium: 1, 
    potassium: 10, 
    iron: 0.1, 
    zinc: 0, 
    selenium: 0, 
    sodium: 0, 
    category: "herbs"
}
,
            "Mushrooms (1/2 cup cooked)": {
    emoji: "🍄", 
    grams: 72, 
    calories: 15, 
    totalFat: 0.2, 
    saturatedFat: 0, 
    monounsaturatedFat: 0, 
    polyunsaturatedFat: 0.1, 
    omega3: 3, 
    omega6: 25, 
    carbs: 2.3, 
    sugar: 1.2, 
    protein: 2.2, 
    fiber: 1.1, 
    vitaminA: 0, 
    vitaminB12: 0, 
    vitaminC: 2, 
    vitaminD: 1, 
    vitaminE: 0, 
    vitaminK: 0, 
    calcium: 2, 
    magnesium: 6, 
    potassium: 223, 
    iron: 0.3, 
    zinc: 0.5, 
    selenium: 9, 
    sodium: 4, 
    category: "vegetables"
},
            "Onions (1/2 cup cooked)": {
    emoji: "🧅", 
    grams: 58, 
    calories: 28, 
    totalFat: 0.1, 
    saturatedFat: 0, 
    monounsaturatedFat: 0, 
    polyunsaturatedFat: 0.1, 
    omega3: 0, 
    omega6: 0, 
    carbs: 6.6, 
    sugar: 2.6, 
    protein: 0.8, 
    fiber: 1.2, 
    vitaminA: 0, 
    vitaminB12: 0, 
    vitaminC: 5, 
    vitaminD: 0, 
    vitaminE: 0, 
    vitaminK: 0.8, 
    calcium: 18, 
    magnesium: 7, 
    potassium: 120, 
    iron: 0.2, 
    zinc: 0.1, 
    selenium: 0.3, 
    sodium: 2, 
    category: "vegetables"
},
            "Cocoa 100% Powder (2 tbsp)": { 
        emoji: "🍫", 
        grams: 10, 
        calories: 25, 
        totalFat: 1.5, 
        saturatedFat: 0.5, 
        monounsaturatedFat: 0.6, 
        polyunsaturatedFat: 0.1, 
        omega3: 0, 
        omega6: 0, 
        carbs: 3, 
        sugar: 0, 
        protein: 1.5, 
        fiber: 2, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 0.1, 
        calcium: 12, 
        magnesium: 27, 
        potassium: 200, 
        iron: 2, 
        zinc: 0.5, 
        selenium: 0.3, 
        sodium: 0, 
        category: "supplements"
    },
    "Peanut Powder (2 tbsp)": { 
        emoji: "🥜", 
        grams: 16, 
        calories: 70, 
        totalFat: 2, 
        saturatedFat: 0.5, 
        monounsaturatedFat: 1, 
        polyunsaturatedFat: 0.5, 
        omega3: 0, 
        omega6: 1000, 
        carbs: 5, 
        sugar: 1, 
        protein: 8, 
        fiber: 2, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 10, 
        vitaminK: 0, 
        calcium: 10, 
        magnesium: 30, 
        potassium: 120, 
        iron: 1, 
        zinc: 0.6, 
        selenium: 0.5, 
        sodium: 94, 
        category: "supplements"
    },
    "Corn (1 cup cooked)": { 
        emoji: "🌽", 
        grams: 166, 
        calories: 143, 
        totalFat: 2.2, 
        saturatedFat: 0.3, 
        monounsaturatedFat: 0.7, 
        polyunsaturatedFat: 1, 
        omega3: 9, 
        omega6: 922, 
        carbs: 31, 
        sugar: 6.8, 
        protein: 5, 
        fiber: 4.2, 
        vitaminA: 9, 
        vitaminB12: 0, 
        vitaminC: 9, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 0.5, 
        calcium: 3, 
        magnesium: 48, 
        potassium: 416, 
        iron: 0.5, 
        zinc: 1, 
        selenium: 0.6, 
        sodium: 14, 
        category: "grains"
    },
    "Polenta (1 cup cooked)": { 
        emoji: "🍚", 
        grams: 241, 
        calories: 156, 
        totalFat: 1, 
        saturatedFat: 0.2, 
        monounsaturatedFat: 0.3, 
        polyunsaturatedFat: 0.3, 
        omega3: 0, 
        omega6: 0, 
        carbs: 33, 
        sugar: 0.2, 
        protein: 3.5, 
        fiber: 1.5, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 0, 
        calcium: 1, 
        magnesium: 14, 
        potassium: 79, 
        iron: 0.5, 
        zinc: 0.3, 
        selenium: 1.7, 
        sodium: 1, 
        category: "grains"
    },
             "Textured Meat (Soy-based, 1 cup cooked)": { 
        emoji: "🥩", 
        grams: 120, 
        calories: 150, 
        totalFat: 4, 
        saturatedFat: 0.5, 
        monounsaturatedFat: 0.5, 
        polyunsaturatedFat: 2, 
        omega3: 130, 
        omega6: 2300, 
        carbs: 9, 
        sugar: 1, 
        protein: 21, 
        fiber: 6, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.2, 
        vitaminK: 3, 
        calcium: 80, 
        magnesium: 80, 
        potassium: 100, 
        iron: 4.9, 
        zinc: 1.5, 
        selenium: 12, 
        sodium: 10, 
        category: "protein"
    },
    "Soy Milk (1 cup)": { 
        emoji: "🥛", 
        grams: 240, 
        calories: 80, 
        totalFat: 4, 
        saturatedFat: 0.5, 
        monounsaturatedFat: 1, 
        polyunsaturatedFat: 2.5, 
        omega3: 300, 
        omega6: 2500, 
        carbs: 4, 
        sugar: 1, 
        protein: 7, 
        fiber: 1, 
        vitaminA: 10, 
        vitaminB12: 50, 
        vitaminC: 0, 
        vitaminD: 25, 
        vitaminE: 6, 
        vitaminK: 2, 
        calcium: 300, 
        magnesium: 45, 
        potassium: 300, 
        iron: 1, 
        zinc: 1.2, 
        selenium: 8, 
        sodium: 100, 
        category: "dairy"
    },
    "Egg White (1 large)": { 
        emoji: "🥚", 
        grams: 33, 
        calories: 17, 
        totalFat: 0, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0, 
        omega3: 0, 
        omega6: 0, 
        carbs: 0.2, 
        sugar: 0, 
        protein: 3.6, 
        fiber: 0, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0, 
        vitaminK: 0, 
        calcium: 2, 
        magnesium: 4, 
        potassium: 54, 
        iron: 0, 
        zinc: 0.1, 
        selenium: 6.6, 
        sodium: 55, 
        category: "protein"
    },
    "Chips (1 oz)": { 
        emoji: "🥔", 
        grams: 28, 
        calories: 152, 
        totalFat: 10, 
        saturatedFat: 1.5, 
        monounsaturatedFat: 5, 
        polyunsaturatedFat: 3, 
        omega3: 0, 
        omega6: 0, 
        carbs: 15, 
        sugar: 10, 
        protein: 2, 
        fiber: 1, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 10, 
        vitaminD: 0, 
        vitaminE: 0.3, 
        vitaminK: 0.1, 
        calcium: 6, 
        magnesium: 15, 
        potassium: 350, 
        iron: 0.4, 
        zinc: 0.2, 
        selenium: 0.5, 
        sodium: 170, 
        category: "others"
    },
    "Fries (medium serving)": { 
        emoji: "🍟", 
        grams: 117, 
        calories: 312, 
        totalFat: 15, 
        saturatedFat: 2, 
        monounsaturatedFat: 7, 
        polyunsaturatedFat: 4.5, 
        omega3: 0, 
        omega6: 0, 
        carbs: 41, 
        sugar: 0.3, 
        protein: 4, 
        fiber: 4, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 9, 
        vitaminD: 0, 
        vitaminE: 1.1, 
        vitaminK: 4, 
        calcium: 16, 
        magnesium: 36, 
        potassium: 480, 
        iron: 1.4, 
        zinc: 0.4, 
        selenium: 0.7, 
        sodium: 300, 
        category: "others"
    },
    "Cordon Bleu (1 piece)": { 
        emoji: "🍖", 
        grams: 150, 
        calories: 330, 
        totalFat: 20, 
        saturatedFat: 10, 
        monounsaturatedFat: 7, 
        polyunsaturatedFat: 3, 
        omega3: 100, 
        omega6: 900, 
        carbs: 15, 
        sugar: 1, 
        protein: 25, 
        fiber: 1, 
        vitaminA: 2, 
        vitaminB12: 15, 
        vitaminC: 0, 
        vitaminD: 4, 
        vitaminE: 1, 
        vitaminK: 0.2, 
        calcium: 180, 
        magnesium: 20, 
        potassium: 240, 
        iron: 1.5, 
        zinc: 2.5, 
        selenium: 40, 
        sodium: 600, 
        category: "protein"
    },
"95% Lean Meat (3 oz)": { 
        emoji: "🥩", 
        grams: 85, 
        calories: 145, 
        totalFat: 5, 
        saturatedFat: 2, 
        monounsaturatedFat: 2.5, 
        polyunsaturatedFat: 0.5, 
        omega3: 20, 
        omega6: 150, 
        carbs: 0, 
        sugar: 0, 
        protein: 26, 
        fiber: 0, 
        vitaminA: 0, 
        vitaminB12: 70, 
        vitaminC: 0, 
        vitaminD: 2, 
        vitaminE: 0.4, 
        vitaminK: 0.1, 
        calcium: 10, 
        magnesium: 20, 
        potassium: 340, 
        iron: 2.4, 
        zinc: 4.5, 
        selenium: 22, 
        sodium: 70, 
        category: "protein"
    },
    "80% Lean Meat (3 oz)": { 
        emoji: "🥩", 
        grams: 85, 
        calories: 215, 
        totalFat: 14, 
        saturatedFat: 6, 
        monounsaturatedFat: 6, 
        polyunsaturatedFat: 1, 
        omega3: 40, 
        omega6: 300, 
        carbs: 0, 
        sugar: 0, 
        protein: 26, 
        fiber: 0, 
        vitaminA: 0, 
        vitaminB12: 75, 
        vitaminC: 0, 
        vitaminD: 3, 
        vitaminE: 0.6, 
        vitaminK: 0.1, 
        calcium: 11, 
        magnesium: 18, 
        potassium: 300, 
        iron: 2.7, 
        zinc: 5.2, 
        selenium: 26, 
        sodium: 75, 
        category: "protein"
    },
    "Bresaola (3 oz)": { 
        emoji: "🥩", 
        grams: 85, 
        calories: 99, 
        totalFat: 2, 
        saturatedFat: 0.5, 
        monounsaturatedFat: 0.7, 
        polyunsaturatedFat: 0.2, 
        omega3: 50, 
        omega6: 250, 
        carbs: 1, 
        sugar: 0, 
        protein: 19, 
        fiber: 0, 
        vitaminA: 0, 
        vitaminB12: 45, 
        vitaminC: 0, 
        vitaminD: 1, 
        vitaminE: 0.3, 
        vitaminK: 0, 
        calcium: 30, 
        magnesium: 14, 
        potassium: 300, 
        iron: 1.8, 
        zinc: 3.5, 
        selenium: 18, 
        sodium: 780, 
        category: "protein"
    },
    "Parma Ham (3 oz)": { 
        emoji: "🍖", 
        grams: 85, 
        calories: 132, 
        totalFat: 5, 
        saturatedFat: 2, 
        monounsaturatedFat: 2, 
        polyunsaturatedFat: 0.4, 
        omega3: 40, 
        omega6: 80, 
        carbs: 0, 
        sugar: 0, 
        protein: 19, 
        fiber: 0, 
        vitaminA: 0, 
        vitaminB12: 60, 
        vitaminC: 0, 
        vitaminD: 1, 
        vitaminE: 0.5, 
        vitaminK: 0, 
        calcium: 11, 
        magnesium: 20, 
        potassium: 240, 
        iron: 1.5, 
        zinc: 2.8, 
        selenium: 24, 
        sodium: 980, 
        category: "protein"
    },
"Flax Powder (2 tbsp)": { 
        emoji: "🌾", 
        grams: 14, 
        calories: 75, 
        totalFat: 6, 
        saturatedFat: 0.5, 
        monounsaturatedFat: 1.5, 
        polyunsaturatedFat: 4, 
        omega3: 3500, 
        omega6: 1000, 
        carbs: 4, 
        sugar: 0, 
        protein: 3, 
        fiber: 3.8, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 0, 
        calcium: 50, 
        magnesium: 40, 
        potassium: 114, 
        iron: 1.2, 
        zinc: 0.6, 
        selenium: 2.7, 
        sodium: 6, 
        category: "supplements"
    },
    "Chia Seeds (2 tbsp)": { 
        emoji: "🌱", 
        grams: 28, 
        calories: 137, 
        totalFat: 9, 
        saturatedFat: 1, 
        monounsaturatedFat: 1, 
        polyunsaturatedFat: 7, 
        omega3: 4915, 
        omega6: 1620, 
        carbs: 12, 
        sugar: 0, 
        protein: 4.7, 
        fiber: 10.6, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 0, 
        calcium: 179, 
        magnesium: 95, 
        potassium: 115, 
        iron: 2.2, 
        zinc: 1.0, 
        selenium: 15.5, 
        sodium: 5, 
        category: "supplements"
    },
    "Sunflower Seeds (1 oz)": { 
        emoji: "🌻", 
        grams: 28, 
        calories: 165, 
        totalFat: 14, 
        saturatedFat: 1.5, 
        monounsaturatedFat: 3, 
        polyunsaturatedFat: 9, 
        omega3: 74, 
        omega6: 8500, 
        carbs: 6.5, 
        sugar: 1, 
        protein: 5.5, 
        fiber: 3, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 37, 
        vitaminK: 0.1, 
        calcium: 20, 
        magnesium: 36, 
        potassium: 228, 
        iron: 1.5, 
        zinc: 1.8, 
        selenium: 24.5, 
        sodium: 1, 
        category: "seeds"
    },
    "Cashews (1 oz)": { 
        emoji: "🥜", 
        grams: 28, 
        calories: 157, 
        totalFat: 12, 
        saturatedFat: 2, 
        monounsaturatedFat: 7, 
        polyunsaturatedFat: 2, 
        omega3: 7, 
        omega6: 2200, 
        carbs: 9, 
        sugar: 1.7, 
        protein: 5, 
        fiber: 1, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.3, 
        vitaminK: 10, 
        calcium: 10, 
        magnesium: 83, 
        potassium: 187, 
        iron: 1.9, 
        zinc: 1.6, 
        selenium: 5.6, 
        sodium: 3, 
        category: "nuts"
    },
             "Ice Cream (1/2 cup)": { 
        emoji: "🍦", 
        grams: 68, 
        calories: 137, 
        totalFat: 7, 
        saturatedFat: 4.5, 
        monounsaturatedFat: 2, 
        polyunsaturatedFat: 0.3, 
        omega3: 0, 
        omega6: 0, 
        carbs: 16, 
        sugar: 14, 
        protein: 2.3, 
        fiber: 0.5, 
        vitaminA: 6, 
        vitaminB12: 13, 
        vitaminC: 0, 
        vitaminD: 10, 
        vitaminE: 0.4, 
        vitaminK: 0.2, 
        calcium: 80, 
        magnesium: 15, 
        potassium: 110, 
        iron: 0.2, 
        zinc: 0.4, 
        selenium: 2.3, 
        sodium: 53, 
        category: "desserts"
    },
    "Mixed Vegetables (Cauliflower, Broccoli, Potatoes, Carrots, 1 cup)": { 
        emoji: "🥦🥕🥔", 
        grams: 160, 
        calories: 70, 
        totalFat: 0.4, 
        saturatedFat: 0, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.1, 
        omega3: 30, 
        omega6: 50, 
        carbs: 13, 
        sugar: 3.5, 
        protein: 3, 
        fiber: 4.5, 
        vitaminA: 120, 
        vitaminB12: 0, 
        vitaminC: 50, 
        vitaminD: 0, 
        vitaminE: 0.3, 
        vitaminK: 50, 
        calcium: 35, 
        magnesium: 28, 
        potassium: 350, 
        iron: 1, 
        zinc: 0.6, 
        selenium: 1.2, 
        sodium: 20, 
        category: "vegetables"
    },
    "Croissant (1 medium)": { 
        emoji: "🥐", 
        grams: 60, 
        calories: 231, 
        totalFat: 12, 
        saturatedFat: 7, 
        monounsaturatedFat: 3, 
        polyunsaturatedFat: 0.7, 
        omega3: 0, 
        omega6: 0, 
        carbs: 26, 
        sugar: 6, 
        protein: 5, 
        fiber: 1, 
        vitaminA: 8, 
        vitaminB12: 10, 
        vitaminC: 0, 
        vitaminD: 3, 
        vitaminE: 0.6, 
        vitaminK: 2, 
        calcium: 20, 
        magnesium: 10, 
        potassium: 95, 
        iron: 1.4, 
        zinc: 0.3, 
        selenium: 18, 
        sodium: 230, 
        category: "baked goods"
    },
    "Tiramisù (1 slice)": { 
        emoji: "🍰", 
        grams: 120, 
        calories: 340, 
        totalFat: 22, 
        saturatedFat: 10, 
        monounsaturatedFat: 6, 
        polyunsaturatedFat: 2, 
        omega3: 0, 
        omega6: 0, 
        carbs: 32, 
        sugar: 24, 
        protein: 6, 
        fiber: 1, 
        vitaminA: 6, 
        vitaminB12: 15, 
        vitaminC: 0, 
        vitaminD: 2, 
        vitaminE: 0.5, 
        vitaminK: 0.3, 
        calcium: 80, 
        magnesium: 18, 
        potassium: 160, 
        iron: 1.2, 
        zinc: 0.4, 
        selenium: 5, 
        sodium: 170, 
        category: "desserts"
    },
            "Oatmeal (1 cup cooked)": { 
        emoji: "🥣", 
        grams: 234, 
        calories: 147, 
        totalFat: 2.5, 
        saturatedFat: 0.5, 
        monounsaturatedFat: 0.7, 
        polyunsaturatedFat: 0.7, 
        omega3: 55, 
        omega6: 600, 
        carbs: 27, 
        sugar: 1, 
        protein: 5, 
        fiber: 4, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.4, 
        vitaminK: 0.5, 
        calcium: 21, 
        magnesium: 63, 
        potassium: 164, 
        iron: 2.1, 
        zinc: 1.6, 
        selenium: 13, 
        sodium: 2, 
        category: "grains"
    },
    "Quinoa (1 cup cooked)": { 
        emoji: "🌾", 
        grams: 185, 
        calories: 222, 
        totalFat: 3.5, 
        saturatedFat: 0.4, 
        monounsaturatedFat: 0.6, 
        polyunsaturatedFat: 1.9, 
        omega3: 47, 
        omega6: 340, 
        carbs: 39, 
        sugar: 1.6, 
        protein: 8, 
        fiber: 5, 
        vitaminA: 1, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 2, 
        vitaminK: 0, 
        calcium: 31, 
        magnesium: 118, 
        potassium: 318, 
        iron: 2.8, 
        zinc: 2.1, 
        selenium: 5.2, 
        sodium: 13, 
        category: "grains"
    },
    "Brown Rice (1 cup cooked)": { 
        emoji: "🍚", 
        grams: 195, 
        calories: 216, 
        totalFat: 1.8, 
        saturatedFat: 0.4, 
        monounsaturatedFat: 0.5, 
        polyunsaturatedFat: 0.7, 
        omega3: 0, 
        omega6: 50, 
        carbs: 45, 
        sugar: 0.7, 
        protein: 5, 
        fiber: 3, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.6, 
        vitaminK: 0.2, 
        calcium: 20, 
        magnesium: 84, 
        potassium: 84, 
        iron: 0.8, 
        zinc: 1.2, 
        selenium: 15, 
        sodium: 10, 
        category: "grains"
    },
    "Pasta (1 cup cooked)": { 
        emoji: "🍝", 
        grams: 140, 
        calories: 221, 
        totalFat: 1.3, 
        saturatedFat: 0.3, 
        monounsaturatedFat: 0.4, 
        polyunsaturatedFat: 0.3, 
        omega3: 0, 
        omega6: 40, 
        carbs: 43, 
        sugar: 1, 
        protein: 8, 
        fiber: 2.5, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.2, 
        vitaminK: 0.4, 
        calcium: 14, 
        magnesium: 23, 
        potassium: 60, 
        iron: 2, 
        zinc: 1.2, 
        selenium: 39, 
        sodium: 1, 
        category: "grains"
    },
    "Bread (1 slice)": { 
        emoji: "🍞", 
        grams: 30, 
        calories: 80, 
        totalFat: 1, 
        saturatedFat: 0.2, 
        monounsaturatedFat: 0.3, 
        polyunsaturatedFat: 0.3, 
        omega3: 0, 
        omega6: 0, 
        carbs: 15, 
        sugar: 1, 
        protein: 3, 
        fiber: 1, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 0.3, 
        calcium: 40, 
        magnesium: 5, 
        potassium: 25, 
        iron: 0.9, 
        zinc: 0.6, 
        selenium: 10, 
        sodium: 150, 
        category: "grains"
    },
        "Bell Pepper (1 medium)": { 
        emoji: "🫑", 
        grams: 119, 
        calories: 24, 
        totalFat: 0.3, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.2, 
        omega3: 50, 
        omega6: 40, 
        carbs: 6, 
        sugar: 4, 
        protein: 1, 
        fiber: 2.5, 
        vitaminA: 15, 
        vitaminB12: 0, 
        vitaminC: 169, 
        vitaminD: 0, 
        vitaminE: 0.7, 
        vitaminK: 7, 
        calcium: 10, 
        magnesium: 11, 
        potassium: 211, 
        iron: 0.4, 
        zinc: 0.2, 
        selenium: 0.1, 
        sodium: 4, 
        category: "vegetables"
    },
    "Eggplant (1 cup cooked)": { 
        emoji: "🍆", 
        grams: 99, 
        calories: 35, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.1, 
        omega3: 40, 
        omega6: 50, 
        carbs: 9, 
        sugar: 3.2, 
        protein: 1.5, 
        fiber: 2.5, 
        vitaminA: 0.5, 
        vitaminB12: 0, 
        vitaminC: 4, 
        vitaminD: 0, 
        vitaminE: 0.4, 
        vitaminK: 3, 
        calcium: 6, 
        magnesium: 13, 
        potassium: 230, 
        iron: 0.3, 
        zinc: 0.1, 
        selenium: 0.2, 
        sodium: 2, 
        category: "vegetables"
    },
    "Cherries (1 cup)": { 
        emoji: "🍒", 
        grams: 154, 
        calories: 97, 
        totalFat: 0.3, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.1, 
        omega3: 35, 
        omega6: 60, 
        carbs: 25, 
        sugar: 20, 
        protein: 2, 
        fiber: 3, 
        vitaminA: 2, 
        vitaminB12: 0, 
        vitaminC: 16, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 2.1, 
        calcium: 18, 
        magnesium: 15, 
        potassium: 330, 
        iron: 0.4, 
        zinc: 0.1, 
        selenium: 0.3, 
        sodium: 0, 
        category: "fruits"
    },
    "Pear (1 medium)": { 
        emoji: "🍐", 
        grams: 178, 
        calories: 101, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.1, 
        omega3: 0, 
        omega6: 0, 
        carbs: 27, 
        sugar: 17, 
        protein: 1, 
        fiber: 5.5, 
        vitaminA: 1, 
        vitaminB12: 0, 
        vitaminC: 8, 
        vitaminD: 0, 
        vitaminE: 0.2, 
        vitaminK: 5.2, 
        calcium: 18, 
        magnesium: 12, 
        potassium: 206, 
        iron: 0.2, 
        zinc: 0.1, 
        selenium: 0.1, 
        sodium: 2, 
        category: "fruits"
    },
    "Watermelon (1 cup)": { 
        emoji: "🍉", 
        grams: 152, 
        calories: 46, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0, 
        omega3: 0, 
        omega6: 0, 
        carbs: 12, 
        sugar: 9, 
        protein: 1, 
        fiber: 0.6, 
        vitaminA: 43, 
        vitaminB12: 0, 
        vitaminC: 21, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 0.2, 
        calcium: 11, 
        magnesium: 15, 
        potassium: 170, 
        iron: 0.4, 
        zinc: 0.1, 
        selenium: 0.3, 
        sodium: 2, 
        category: "fruits"
    },
        "Zucchini (1 medium)": { 
        emoji: "🥒", 
        grams: 196, 
        calories: 33, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.1, 
        omega3: 45, 
        omega6: 60, 
        carbs: 6, 
        sugar: 5, 
        protein: 2.5, 
        fiber: 2.2, 
        vitaminA: 8, 
        vitaminB12: 0, 
        vitaminC: 28, 
        vitaminD: 0, 
        vitaminE: 0.2, 
        vitaminK: 5.5, 
        calcium: 19, 
        magnesium: 22, 
        potassium: 512, 
        iron: 0.4, 
        zinc: 0.3, 
        selenium: 0.7, 
        sodium: 5, 
        category: "vegetables"
    },
    "Asparagus (1 cup cooked)": { 
        emoji: "🌿", 
        grams: 180, 
        calories: 40, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.1, 
        omega3: 100, 
        omega6: 20, 
        carbs: 7, 
        sugar: 1.5, 
        protein: 4.5, 
        fiber: 3.5, 
        vitaminA: 7, 
        vitaminB12: 0, 
        vitaminC: 9.7, 
        vitaminD: 0, 
        vitaminE: 1.4, 
        vitaminK: 70, 
        calcium: 40, 
        magnesium: 20, 
        potassium: 400, 
        iron: 2.9, 
        zinc: 0.6, 
        selenium: 3.1, 
        sodium: 13, 
        category: "vegetables"
    },
    "Mango (1 medium)": { 
        emoji: "🥭", 
        grams: 336, 
        calories: 201, 
        totalFat: 1.3, 
        saturatedFat: 0.3, 
        monounsaturatedFat: 0.4, 
        polyunsaturatedFat: 0.5, 
        omega3: 55, 
        omega6: 60, 
        carbs: 50, 
        sugar: 45, 
        protein: 2.8, 
        fiber: 5.4, 
        vitaminA: 72, 
        vitaminB12: 0, 
        vitaminC: 203, 
        vitaminD: 0, 
        vitaminE: 2.3, 
        vitaminK: 9, 
        calcium: 31, 
        magnesium: 19, 
        potassium: 564, 
        iron: 0.3, 
        zinc: 0.2, 
        selenium: 1.2, 
        sodium: 3, 
        category: "fruits"
    },
    "Raspberries (1 cup)": { 
        emoji: "🍇", 
        grams: 123, 
        calories: 64, 
        totalFat: 0.8, 
        saturatedFat: 0, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.3, 
        omega3: 120, 
        omega6: 60, 
        carbs: 14.7, 
        sugar: 5, 
        protein: 1.5, 
        fiber: 8, 
        vitaminA: 2, 
        vitaminB12: 0, 
        vitaminC: 54, 
        vitaminD: 0, 
        vitaminE: 1.1, 
        vitaminK: 9.6, 
        calcium: 31, 
        magnesium: 27, 
        potassium: 186, 
        iron: 0.8, 
        zinc: 0.5, 
        selenium: 0.3, 
        sodium: 1, 
        category: "fruits"
    },
    "Cauliflower (1 cup)": { 
        emoji: "🥦", 
        grams: 107, 
        calories: 25, 
        totalFat: 0.3, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.2, 
        omega3: 50, 
        omega6: 40, 
        carbs: 5, 
        sugar: 2, 
        protein: 2, 
        fiber: 2, 
        vitaminA: 1, 
        vitaminB12: 0, 
        vitaminC: 77, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 20, 
        calcium: 24, 
        magnesium: 15, 
        potassium: 320, 
        iron: 0.4, 
        zinc: 0.3, 
        selenium: 1.2, 
        sodium: 30, 
        category: "vegetables"
    },
"Blueberries (1 cup)": { 
        emoji: "🫐", 
        grams: 148, 
        calories: 85, 
        totalFat: 0.5, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.2, 
        omega3: 86, 
        omega6: 88, 
        carbs: 21, 
        sugar: 15, 
        protein: 1, 
        fiber: 3.6, 
        vitaminA: 4, 
        vitaminB12: 0, 
        vitaminC: 24, 
        vitaminD: 0, 
        vitaminE: 0.8, 
        vitaminK: 28.6, 
        calcium: 9, 
        magnesium: 9, 
        potassium: 114, 
        iron: 0.4, 
        zinc: 0.2, 
        selenium: 0.1, 
        sodium: 1, 
        category: "fruits"
    },
    "Grapes (1 cup)": { 
        emoji: "🍇", 
        grams: 151, 
        calories: 104, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.1, 
        omega3: 5, 
        omega6: 60, 
        carbs: 27, 
        sugar: 23, 
        protein: 1, 
        fiber: 1.4, 
        vitaminA: 3, 
        vitaminB12: 0, 
        vitaminC: 4, 
        vitaminD: 0, 
        vitaminE: 0.2, 
        vitaminK: 22, 
        calcium: 10, 
        magnesium: 7, 
        potassium: 288, 
        iron: 0.5, 
        zinc: 0.1, 
        selenium: 0.2, 
        sodium: 2, 
        category: "fruits"
    },
    "Pineapple (1 cup)": { 
        emoji: "🍍", 
        grams: 165, 
        calories: 82, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0, 
        omega3: 0, 
        omega6: 0, 
        carbs: 21, 
        sugar: 16, 
        protein: 0.9, 
        fiber: 2.3, 
        vitaminA: 2, 
        vitaminB12: 0, 
        vitaminC: 131, 
        vitaminD: 0, 
        vitaminE: 0.2, 
        vitaminK: 1, 
        calcium: 21, 
        magnesium: 20, 
        potassium: 180, 
        iron: 0.3, 
        zinc: 0.2, 
        selenium: 0.3, 
        sodium: 2, 
        category: "fruits"
    },
    "Cucumber (1 medium)": { 
        emoji: "🥒", 
        grams: 300, 
        calories: 45, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.1, 
        omega3: 45, 
        omega6: 60, 
        carbs: 11, 
        sugar: 5, 
        protein: 2, 
        fiber: 1.5, 
        vitaminA: 2, 
        vitaminB12: 0, 
        vitaminC: 5, 
        vitaminD: 0, 
        vitaminE: 0.1, 
        vitaminK: 60, 
        calcium: 30, 
        magnesium: 15, 
        potassium: 410, 
        iron: 0.6, 
        zinc: 0.2, 
        selenium: 0.4, 
        sodium: 2, 
        category: "vegetables"
    },
    "Tomato (1 medium)": { 
        emoji: "🍅", 
        grams: 123, 
        calories: 22, 
        totalFat: 0.2, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.1, 
        omega3: 5, 
        omega6: 30, 
        carbs: 5, 
        sugar: 3, 
        protein: 1, 
        fiber: 1.5, 
        vitaminA: 15, 
        vitaminB12: 0, 
        vitaminC: 28, 
        vitaminD: 0, 
        vitaminE: 0.6, 
        vitaminK: 9, 
        calcium: 12, 
        magnesium: 11, 
        potassium: 292, 
        iron: 0.3, 
        zinc: 0.1, 
        selenium: 0.4, 
        sodium: 5, 
        category: "vegetables"
    },
"Sweet Potato (1 medium)": { 
        emoji: "🍠", 
        grams: 114, 
        calories: 103, 
        totalFat: 0.1, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.1, 
        omega3: 0, 
        omega6: 30, 
        carbs: 24, 
        sugar: 7, 
        protein: 2, 
        fiber: 3.8, 
        vitaminA: 100, 
        vitaminB12: 0, 
        vitaminC: 28, 
        vitaminD: 0, 
        vitaminE: 1.8, 
        vitaminK: 3.2, 
        calcium: 40, 
        magnesium: 27, 
        potassium: 542, 
        iron: 0.8, 
        zinc: 0.4, 
        selenium: 0.9, 
        sodium: 41, 
        category: "vegetables"
    },
    "Spinach (1 cup cooked)": { 
        emoji: "🥬", 
        grams: 180, 
        calories: 41, 
        totalFat: 0.7, 
        saturatedFat: 0.1, 
        monounsaturatedFat: 0.1, 
        polyunsaturatedFat: 0.3, 
        omega3: 370, 
        omega6: 150, 
        carbs: 7, 
        sugar: 0.5, 
        protein: 5, 
        fiber: 4, 
        vitaminA: 200, 
        vitaminB12: 0, 
        vitaminC: 20, 
        vitaminD: 0, 
        vitaminE: 8.4, 
        vitaminK: 800, 
        calcium: 245, 
        magnesium: 156, 
        potassium: 839, 
        iron: 6.4, 
        zinc: 1.4, 
        selenium: 1.5, 
        sodium: 126, 
        category: "vegetables"
    },
    "Broccoli (1 cup chopped)": { 
        emoji: "🥦", 
        grams: 91, 
        calories: 31, 
        totalFat: 0.4, 
        saturatedFat: 0.1, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0.2, 
        omega3: 33, 
        omega6: 70, 
        carbs: 6, 
        sugar: 1.5, 
        protein: 3, 
        fiber: 2, 
        vitaminA: 12, 
        vitaminB12: 0, 
        vitaminC: 135, 
        vitaminD: 0, 
        vitaminE: 3.2, 
        vitaminK: 90, 
        calcium: 42, 
        magnesium: 19, 
        potassium: 316, 
        iron: 0.7, 
        zinc: 0.4, 
        selenium: 2.8, 
        sodium: 30, 
        category: "vegetables"
    },
    "Almonds (1 oz)": { 
        emoji: "🥜", 
        grams: 28, 
        calories: 164, 
        totalFat: 14, 
        saturatedFat: 1, 
        monounsaturatedFat: 9, 
        polyunsaturatedFat: 3.5, 
        omega3: 0, 
        omega6: 3680, 
        carbs: 6, 
        sugar: 1.2, 
        protein: 6, 
        fiber: 3.5, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 35, 
        vitaminK: 0.2, 
        calcium: 76, 
        magnesium: 76, 
        potassium: 200, 
        iron: 1.1, 
        zinc: 1, 
        selenium: 1.7, 
        sodium: 0, 
        category: "protein"
    },
    "Quinoa (1 cup cooked)": { 
        emoji: "🌾", 
        grams: 185, 
        calories: 222, 
        totalFat: 3.5, 
        saturatedFat: 0.4, 
        monounsaturatedFat: 0.6, 
        polyunsaturatedFat: 1.9, 
        omega3: 47, 
        omega6: 340, 
        carbs: 39, 
        sugar: 1.6, 
        protein: 8, 
        fiber: 5, 
        vitaminA: 1, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 2, 
        vitaminK: 0, 
        calcium: 31, 
        magnesium: 118, 
        potassium: 318, 
        iron: 2.8, 
        zinc: 2.1, 
        selenium: 5.2, 
        sodium: 13, 
        category: "grains"
    },
    
    "Egg (1 large)": { 
        emoji: "🥚", 
        grams: 50, 
        calories: 78, 
        totalFat: 5.3, 
        saturatedFat: 1.6, 
        monounsaturatedFat: 2.0, 
        polyunsaturatedFat: 0.7, 
        omega3: 37, 
        omega6: 570, 
        carbs: 0.6, 
        sugar: 0, 
        protein: 6.3, 
        fiber: 0, 
        vitaminA: 5, 
        vitaminB12: 9, 
        vitaminC: 0, 
        vitaminD: 10, 
        vitaminE: 2, 
        vitaminK: 0, 
        calcium: 25, 
        magnesium: 6, 
        potassium: 69, 
        iron: 5, 
        zinc: 4.2, 
        selenium: 23, 
        sodium: 62, 
        category: "protein"
    },
    "Chicken Breast (3 oz)": { 
        emoji: "🍗", 
        grams: 85, 
        calories: 140, 
        totalFat: 3, 
        saturatedFat: 1, 
        monounsaturatedFat: 1, 
        polyunsaturatedFat: 0.5, 
        omega3: 30, 
        omega6: 1500, 
        carbs: 0, 
        sugar: 0, 
        protein: 26, 
        fiber: 0, 
        vitaminA: 1, 
        vitaminB12: 5, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 0.3, 
        vitaminK: 0, 
        calcium: 10, 
        magnesium: 28, 
        potassium: 220, 
        iron: 1.5, 
        zinc: 1, 
        selenium: 25, 
        sodium: 60, 
        category: "protein"
    },
    "Salmon (3 oz)": { 
        emoji: "🐟", 
        grams: 85, 
        calories: 175, 
        totalFat: 11, 
        saturatedFat: 2.5, 
        monounsaturatedFat: 4, 
        polyunsaturatedFat: 3.5, 
        omega3: 1700, 
        omega6: 300, 
        carbs: 0, 
        sugar: 0, 
        protein: 20, 
        fiber: 0, 
        vitaminA: 2, 
        vitaminB12: 80, 
        vitaminC: 0, 
        vitaminD: 100, 
        vitaminE: 2.6, 
        vitaminK: 0.5, 
        calcium: 11, 
        magnesium: 27, 
        potassium: 360, 
        iron: 0.5, 
        zinc: 0.5, 
        selenium: 40, 
        sodium: 48, 
        category: "protein"
    },
    "Almonds (1 oz)": { 
        emoji: "🥜", 
        grams: 28, 
        calories: 164, 
        totalFat: 14, 
        saturatedFat: 1, 
        monounsaturatedFat: 9, 
        polyunsaturatedFat: 3.5, 
        omega3: 0, 
        omega6: 3680, 
        carbs: 6, 
        sugar: 1.2, 
        protein: 6, 
        fiber: 3.5, 
        vitaminA: 0, 
        vitaminB12: 0, 
        vitaminC: 0, 
        vitaminD: 0, 
        vitaminE: 35, 
        vitaminK: 0.2, 
        calcium: 7, 
        magnesium: 76, 
        potassium: 200, 
        iron: 1.1, 
        zinc: 1.0, 
        selenium: 0.7, 
        sodium: 0, 
        category: "protein"
    },
    "Greek Yogurt (1 cup)": { 
        emoji: "🥛", 
        grams: 170, 
        calories: 100, 
        totalFat: 0, 
        saturatedFat: 0, 
        monounsaturatedFat: 0, 
        polyunsaturatedFat: 0, 
        omega3: 0, 
        omega6: 0, 
        carbs: 6, 
        sugar: 6, 
        protein: 17, 
        fiber: 0, 
        vitaminA: 1, 
        vitaminB12: 29, 
        vitaminC: 0, 
        vitaminD: 20, 
        vitaminE: 0, 
        vitaminK: 0.2, 
        calcium: 187, 
        magnesium: 20, 
        potassium: 240, 
        iron: 0.2, 
        zinc: 0.8, 
        selenium: 10, 
        sodium: 70, 
        category: "dairy"
    }
};
