
// Food Data
        const foodData = {
            {
    "Banana (1 medium)": { 
        "emoji": "🍌", 
        "grams": 120, 
        "calories": 105, 
        "totalFat": 0.4, 
        "saturatedFat": 0.1, 
        "monounsaturatedFat": 0.1, 
        "polyunsaturatedFat": 0.1, 
        "omega3": 0, 
        "omega6": 30, 
        "carbs": 27, 
        "sugar": 14, 
        "protein": 1.3, 
        "fiber": 3.1, 
        "vitaminA": 2, 
        "vitaminB12": 0, 
        "vitaminC": 10, 
        "vitaminD": 0, 
        "vitaminE": 0.1, 
        "vitaminK": 0.6, 
        "calcium": 5, 
        "magnesium": 32, 
        "potassium": 422, 
        "iron": 0.3, 
        "zinc": 0.2, 
        "selenium": 1.2, 
        "sodium": 1, 
        "category": "fruits"
    },
    "Apple (1 medium)": { 
        "emoji": "🍎", 
        "grams": 182, 
        "calories": 95, 
        "totalFat": 0.3, 
        "saturatedFat": 0, 
        "monounsaturatedFat": 0.1, 
        "polyunsaturatedFat": 0.1, 
        "omega3": 3, 
        "omega6": 40, 
        "carbs": 25, 
        "sugar": 19, 
        "protein": 0.5, 
        "fiber": 4.4, 
        "vitaminA": 3, 
        "vitaminB12": 0, 
        "vitaminC": 8, 
        "vitaminD": 0, 
        "vitaminE": 0.3, 
        "vitaminK": 4, 
        "calcium": 11, 
        "magnesium": 9, 
        "potassium": 195, 
        "iron": 0.2, 
        "zinc": 0.1, 
        "selenium": 0.6, 
        "sodium": 2, 
        "category": "fruits"
    },
    "Avocado (1/2 medium)": { 
        "emoji": "🥑", 
        "grams": 100, 
        "calories": 160, 
        "totalFat": 15, 
        "saturatedFat": 2, 
        "monounsaturatedFat": 10, 
        "polyunsaturatedFat": 2.5, 
        "omega3": 160, 
        "omega6": 1960, 
        "carbs": 9, 
        "sugar": 1, 
        "protein": 2, 
        "fiber": 7, 
        "vitaminA": 7, 
        "vitaminB12": 0, 
        "vitaminC": 15, 
        "vitaminD": 0, 
        "vitaminE": 10, 
        "vitaminK": 26, 
        "calcium": 12, 
        "magnesium": 29, 
        "potassium": 485, 
        "iron": 0.6, 
        "zinc": 0.3, 
        "selenium": 0.4, 
        "sodium": 7, 
        "category": "fruits"
    },
    "Strawberries (1 cup sliced)": { 
        "emoji": "🍓", 
        "grams": 150, 
        "calories": 46, 
        "totalFat": 0.4, 
        "saturatedFat": 0, 
        "monounsaturatedFat": 0, 
        "polyunsaturatedFat": 0.2, 
        "omega3": 24, 
        "omega6": 40, 
        "carbs": 11, 
        "sugar": 7, 
        "protein": 1, 
        "fiber": 3, 
        "vitaminA": 1, 
        "vitaminB12": 0, 
        "vitaminC": 98, 
        "vitaminD": 0, 
        "vitaminE": 1, 
        "vitaminK": 3, 
        "calcium": 24, 
        "magnesium": 19, 
        "potassium": 220, 
        "iron": 0.4, 
        "zinc": 0.2, 
        "selenium": 0.6, 
        "sodium": 1, 
        "category": "fruits"
    },
    "Blueberries (1 cup)": { 
        "emoji": "🫐", 
        "grams": 148, 
        "calories": 85, 
        "totalFat": 0.5, 
        "saturatedFat": 0, 
        "monounsaturatedFat": 0, 
        "polyunsaturatedFat": 0.2, 
        "omega3": 86, 
        "omega6": 88, 
        "carbs": 21, 
        "sugar": 15, 
        "protein": 1, 
        "fiber": 3.6, 
        "vitaminA": 4, 
        "vitaminB12": 0, 
        "vitaminC": 24, 
        "vitaminD": 0, 
        "vitaminE": 0.8, 
        "vitaminK": 28.6, 
        "calcium": 9, 
        "magnesium": 9, 
        "potassium": 114, 
        "iron": 0.4, 
        "zinc": 0.2, 
        "selenium": 0.1, 
        "sodium": 1, 
        "category": "fruits"
    },
    "Grapes (1 cup)": { 
        "emoji": "🍇", 
        "grams": 151, 
        "calories": 104, 
        "totalFat": 0.2, 
        "saturatedFat": 0, 
        "monounsaturatedFat": 0, 
        "polyunsaturatedFat": 0.1, 
        "omega3": 5, 
        "omega6": 60, 
        "carbs": 27, 
        "sugar": 23, 
        "protein": 1, 
        "fiber": 1.4, 
        "vitaminA": 3, 
        "vitaminB12": 0, 
        "vitaminC": 4, 
        "vitaminD": 0, 
        "vitaminE": 0.2, 
        "vitaminK": 22, 
        "calcium": 10, 
        "magnesium": 7, 
        "potassium": 288, 
        "iron": 0.5, 
        "zinc": 0.1, 
        "selenium": 0.2, 
        "sodium": 2, 
        "category": "fruits"
    },
    "Pineapple (1 cup)": { 
        "emoji": "🍍", 
        "grams": 165, 
        "calories": 82, 
        "totalFat": 0.2, 
        "saturatedFat": 0, 
        "monounsaturatedFat": 0, 
        "polyunsaturatedFat": 0, 
        "omega3": 0, 
        "omega6": 0, 
        "carbs": 21, 
        "sugar": 16, 
        "protein": 0.9, 
        "fiber": 2.3, 
        "vitaminA": 2, 
        "vitaminB12": 0, 
        "vitaminC": 131, 
        "vitaminD": 0, 
        "vitaminE": 0.2, 
        "vitaminK": 1, 
        "calcium": 21, 
        "magnesium": 20, 
        "potassium": 180, 
        "iron": 0.3, 
        "zinc": 0.2, 
        "selenium": 0.3, 
        "sodium": 2, 
        "category": "fruits"
    },
    "Mango (1 medium)": { 
        "emoji": "🥭", 
        "grams": 336, 
        "calories": 201, 
        "totalFat": 1.3, 
        "saturatedFat": 0.3, 
        "monounsaturatedFat": 0.4, 
        "polyunsaturatedFat": 0.5, 
        "omega3": 55, 
        "omega6": 60, 
        "carbs": 50, 
        "sugar": 45, 
        "protein": 2.8, 
        "fiber": 5.4, 
        "vitaminA": 72, 
        "vitaminB12": 0, 
        "vitaminC": 203, 
        "vitaminD": 0, 
        "vitaminE": 2.3, 
        "vitaminK": 9, 
        "calcium": 31, 
        "magnesium": 19, 
        "potassium": 564, 
        "iron": 0.3, 
        "zinc": 0.2, 
        "selenium": 1.2, 
        "sodium": 3, 
        "category": "fruits"
    },
    "Raspberries (1 cup)": { 
        "emoji": "🍇", 
        "grams": 123, 
        "calories": 64, 
        "totalFat": 0.8, 
        "saturatedFat": 0, 
        "monounsaturatedFat": 0.1, 
        "polyunsaturatedFat": 0.3, 
        "omega3": 120, 
        "omega6": 60, 
        "carbs": 14.7, 
        "sugar": 5, 
        "protein": 1.5, 
        "fiber": 8, 
        "vitaminA": 2, 
        "vitaminB12": 0, 
        "vitaminC": 54, 
        "vitaminD": 0, 
        "vitaminE": 1.1, 
        "vitaminK": 9.6, 
        "calcium": 31, 
        "magnesium": 27, 
        "potassium": 186, 
        "iron": 0.8, 
        "zinc": 0.5, 
        "selenium": 0.3, 
        "sodium": 1, 
        "category": "fruits"
    },
    "Watermelon (1 cup)": { 
        "emoji": "🍉", 
        "grams": 152, 
        "calories": 46, 
        "totalFat": 0.2, 
        "saturatedFat": 0, 
        "monounsaturatedFat": 0, 
        "polyunsaturatedFat": 0, 
        "omega3": 0, 
        "omega6": 0, 
        "carbs": 12, 
        "sugar": 9, 
        "protein": 1, 
        "fiber": 0.6, 
        "vitaminA": 43, 
        "vitaminB12": 0, 
        "vitaminC": 21, 
        "vitaminD": 0, 
        "vitaminE": 0.1, 
        "vitaminK": 0.2, 
        "calcium": 11, 
        "magnesium": 15, 
        "potassium": 170, 
        "iron": 0.4, 
        "zinc": 0.1, 
        "selenium": 0.3, 
        "sodium": 2, 
        "category": "fruits"
    }
},"Edamame (1 cup cooked)": { 
    emoji: "🌱", 
    grams: 155, 
    calories: 189, 
    totalFat: 8.1, 
    saturatedFat: 1, 
    monounsaturatedFat: 2, 
    polyunsaturatedFat: 4, 
    omega3: 530, 
    omega6: 2500, 
    carbs: 15.4, 
    sugar: 3.4, 
    protein: 17, 
    fiber: 8, 
    vitaminA: 9,          // Vitamins and Minerals
    vitaminB12: 0, 
    vitaminC: 6.1, 
    vitaminD: 0, 
    vitaminE: 0.7, 
    vitaminK: 41.4, 
    calcium: 98, 
    magnesium: 99, 
    potassium: 676, 
    iron: 3.5, 
    zinc: 2.1, 
    selenium: 1.7, 
    sodium: 15, 
    category: "legumes"
},"Black Beans (1 cup cooked)": { 
    emoji: "🫘", 
    grams: 172, 
    calories: 227, 
    totalFat: 0.9, 
    saturatedFat: 0.2, 
    monounsaturatedFat: 0.1, 
    polyunsaturatedFat: 0.4, 
    omega3: 180, 
    omega6: 270, 
    carbs: 41, 
    sugar: 0.3, 
    protein: 15, 
    fiber: 15, 
    vitaminA: 0,          // Vitamins and Minerals
    vitaminB12: 0, 
    vitaminC: 0.9, 
    vitaminD: 0, 
    vitaminE: 0.8, 
    vitaminK: 3.2, 
    calcium: 46, 
    magnesium: 120, 
    potassium: 611, 
    iron: 3.6, 
    zinc: 2, 
    selenium: 2.1, 
    sodium: 1, 
    category: "legumes"
},"Chickpeas (1 cup cooked)": { 
    emoji: "🥙", 
    grams: 164, 
    calories: 269, 
    totalFat: 4.2, 
    saturatedFat: 0.4, 
    monounsaturatedFat: 1.9, 
    polyunsaturatedFat: 1.9, 
    omega3: 70, 
    omega6: 2500, 
    carbs: 45, 
    sugar: 8, 
    protein: 14.5, 
    fiber: 12.5, 
    vitaminA: 0,          // Vitamins and Minerals
    vitaminB12: 0, 
    vitaminC: 2, 
    vitaminD: 0, 
    vitaminE: 2.6, 
    vitaminK: 4, 
    calcium: 80, 
    magnesium: 79, 
    potassium: 477, 
    iron: 4.7, 
    zinc: 2.5, 
    selenium: 6.1, 
    sodium: 11, 
    category: "legumes"
}



        };


