

        // ======= Daily Values =======
    let dailyValues = {
        calories: 2000,
    protein: 50,
    carbs: 300,
    fat: 65,
    fiber: 40,
    omega3: 2, // In grams
    omega6: 5, // In grams
    calcium: 1000,
    magnesium: 450,
    potassium: 6000,
    iron: 8,
    zinc: 15,
    selenium: 55,
    sodium: 1500,
    vitaminA: 900,
    vitaminB12: 2400,
    vitaminC: 90,
    vitaminD: 600,
    vitaminE: 15,
    vitaminK: 120
          };
    // ============================

    const buttonContainer = document.getElementById('foodButtons');
    const selectedFoodsContainer = document.getElementById('selectedFoods');
    const toggleButtons = document.querySelectorAll('.toggle-button');

    let selectedFoods = new Set();

    // Function to sanitize IDs
    function sanitizeID(str) {
            return str.replace(/[^a-zA-Z0-9]/g, '_');
        }

    // Create food buttons with data-food attribute for accurate mapping
    for (let food in foodData) {
        let button = document.createElement('button');
    button.textContent = `${foodData[food].emoji} ${food}`;
    button.className = 'food-button';
    button.dataset.category = foodData[food].category;
    button.dataset.food = food; // Add data-food attribute
            button.onclick = () => toggleFood(food, button);
    buttonContainer.appendChild(button);
        }

    // Create recipe buttons
    const recipeButton = document.querySelector('.toggle-button[data-category="recipe"]');
    for (let recipe in recipes) {
        let button = document.createElement('button');
        button.textContent = `${recipe} 🍽️`;
        button.className = 'food-button recipe-button';
        button.dataset.category = 'recipe';
        button.dataset.food = recipe;
        button.onclick = () => toggleRecipe(recipe, button, false);
        buttonContainer.appendChild(button);
    }

        toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const foodButtons = document.querySelectorAll('.food-button');
            foodButtons.forEach(foodButton => {
                const foodCategory = foodButton.dataset.category;
                if (category === 'all' || 
                    (category === 'custom' && foodCategory === 'custom') || 
                    (category !== 'custom' && foodCategory === category)) {
                    foodButton.style.display = 'inline-block';
                } else {
                    foodButton.style.display = 'none';
                }
            });
            updateNutritionTable();
        });
        });
function toggleFood(food, button) {
    if (selectedFoods.has(food)) {
        selectedFoods.delete(food);
        button.classList.remove('active');
        removeSlider(food);
    } else {
        selectedFoods.add(food);
        button.classList.add('active');
        addSlider(food);
    }
    updateNutritionTable();
}

function toggleRecipe(recipe, button, isCustom = false) {
    const recipeList = isCustom ? (recipes.customRecipes && recipes.customRecipes[recipe]) : recipes[recipe];
    if (!recipeList) {
        console.error(`Recipe not found: ${recipe}`);
        return;
    }

    if (selectedFoods.has(recipe)) {
        // Deselect recipe and its components
        selectedFoods.delete(recipe);
        button.classList.remove('active');
        recipeList.forEach(item => {
            const food = isCustom ? item.food : item;
            selectedFoods.delete(food);
            const foodButton = document.querySelector(`.food-button[data-food="${food}"]`);
            if (foodButton) {
                foodButton.classList.remove('active');
            }
            removeSlider(food);
        });
    } else {
        // Select recipe and its components
        selectedFoods.add(recipe);
        button.classList.add('active');
        recipeList.forEach(item => {
            const food = isCustom ? item.food : item;
            const quantity = isCustom ? item.quantity : 100;
            selectedFoods.add(food);
            const foodButton = document.querySelector(`.food-button[data-food="${food}"]`);
            if (foodButton) {
                foodButton.classList.add('active');
            }
            // Pass isCustom to addSlider
            addSlider(food, isCustom, quantity);
        });
    }

    updateNutritionTable();
}

function addSlider(food, isCustomRecipe = false, initialValue = 100) {
    if (document.getElementById(`${sanitizeID(food)}-slider`)) return;

    const div = document.createElement('div');
    div.className = 'food-item';

    // Check if the food exists in foodData, if not, use a default emoji
    const foodEmoji = foodData[food] ? foodData[food].emoji : '🍽️';

    div.innerHTML = `
        <div class="food-item-controls">
            <button class="remove-food" data-food="${food}">❌</button>
            <button class="flag-food" data-food="${food}">🚩</button>
        </div>
        <label>${foodEmoji} ${food}</label>
        <div class="portion-control">
            <input type="range" min="0" max="500" value="${initialValue}" id="${sanitizeID(food)}-slider">
            <span id="${sanitizeID(food)}-value">${initialValue}g</span>
        </div>
    `;
    selectedFoodsContainer.appendChild(div);

    const slider = document.getElementById(`${sanitizeID(food)}-slider`);
    const output = document.getElementById(`${sanitizeID(food)}-value`);
    slider.oninput = function () {
        output.textContent = this.value + 'g';
        updateNutritionTable();
    }

    const removeBtn = div.querySelector('.remove-food');
    removeBtn.addEventListener('click', () => {
        selectedFoods.delete(food);
        div.remove();
        updateNutritionTable();
    });

    const flagBtn = div.querySelector('.flag-food');
    flagBtn.addEventListener('click', () => {
        div.classList.toggle('flagged-for-recipe');
    });
}

    function removeSlider(food) {
            const slider = document.getElementById(`${sanitizeID(food)}-slider`);
    if (slider) {
        slider.parentElement.parentElement.remove();
            }
        }

    function updateNutritionTable() {
            if (selectedFoods.size === 0) {
        resetProgressBars();
    return;
            }

    // Retrieve target values
    const targetCalories = parseFloat(document.getElementById('targetCalories').value) || dailyValues.calories;
    const targetProtein = parseFloat(document.getElementById('targetProtein').value) || dailyValues.protein;
    const targetFiber = parseFloat(document.getElementById('targetFiber').value) || dailyValues.fiber;

    let totals = {
        calories: 0, totalFat: 0, saturatedFat: 0,
    unsaturatedFat: 0, omega3: 0, omega6: 0,
    carbs: 0, sugar: 0, protein: 0, fiber: 0,
    vitaminA: 0, vitaminB12: 0, vitaminC: 0, vitaminD: 0, vitaminE: 0, vitaminK: 0,
    calcium: 0, magnesium: 0, potassium: 0, iron: 0, zinc: 0, selenium: 0, sodium: 0
            };

    // Track contributors for vitamins and minerals
    let nutrientContributors = {
        calories: { },
    protein: { },
    carbs: { },
    fat: { },
    vitaminA: { },
    vitaminB12: { },
    vitaminC: { },
    vitaminD: { },
    vitaminE: { },
    vitaminK: { },
    calcium: { },
    magnesium: { },
    potassium: { },
    iron: { },
    zinc: { },
    selenium: { },
    sodium: { }
            };

            selectedFoods.forEach(food => {
                if (recipes[food]) {
                    // If it's a recipe, skip since components are already added
                    return;
                }
    if (!foodData[food]) {
                    // If food data is missing, skip
                    return;
                }
    const sliderValue = parseFloat(document.getElementById(`${sanitizeID(food)}-slider`).value);
    const ratio = sliderValue / foodData[food].grams;
    for (let nutrient in totals) {
                    if (foodData[food][nutrient] !== undefined) {
                        // Convert Omegas from mg to g
                        if (nutrient === 'omega3' || nutrient === 'omega6') {
        totals[nutrient] += (foodData[food][nutrient] * ratio) / 1000;
                        } else {
        totals[nutrient] += foodData[food][nutrient] * ratio;
                        }
    // Track contributors for vitamins and minerals
    if (nutrientContributors[nutrient] !== undefined) {
                            if (!nutrientContributors[nutrient][food]) {
        nutrientContributors[nutrient][food] = 0;
                            }
    if (nutrient === 'omega3' || nutrient === 'omega6') {
        nutrientContributors[nutrient][food] += (foodData[food][nutrient] * ratio) / 1000;
                            } else {
        nutrientContributors[nutrient][food] += foodData[food][nutrient] * ratio;
                            }
                        }
                    }
                }

    // Calculate unsaturated fat (totalFat - saturatedFat)
    if (nutrientContributors['unsaturatedFat'] !== undefined && foodData[food]['totalFat'] !== undefined && foodData[food]['saturatedFat'] !== undefined) {
                    const unsatFat = (foodData[food]['totalFat'] - (foodData[food]['saturatedFat'] || 0)) * ratio;
    totals['unsaturatedFat'] += unsatFat;
                }
            });

    // Update Macronutrient Circles
    updateMacroCircles(totals, targetCalories, targetProtein, targetFiber);

    // Update Top 3 Contributors for Macronutrients
    updateTopContributors(totals, nutrientContributors);

    // Update Vitamins and Minerals Progress Bars
    updateVitaminsAndMinerals(totals, nutrientContributors);
        }

    function updateMacroCircles(totals, targetCalories, targetProtein, targetFiber) {
            // Calories
            const caloriesProgress = Math.min((totals.calories / targetCalories) * 100, 100);
    const caloriesCircle = document.getElementById('caloriesProgress');
    const caloriesText = document.getElementById('caloriesText');
    const caloriesRatio = document.getElementById('caloriesRatio');
    if (caloriesCircle && caloriesText && caloriesRatio) {
        caloriesCircle.style.setProperty('--progress', caloriesProgress);
    caloriesText.textContent = `${caloriesProgress.toFixed(0)}%`;
    caloriesRatio.textContent = `${totals.calories.toFixed(0)} / ${targetCalories} kcal`;
            }

    // Protein
    const proteinProgress = Math.min((totals.protein / targetProtein) * 100, 100);
    const proteinCircle = document.getElementById('proteinProgress');
    const proteinText = document.getElementById('proteinText');
    if (proteinCircle && proteinText) {
        proteinCircle.style.setProperty('--progress', proteinProgress);
    proteinText.textContent = `${proteinProgress.toFixed(0)}%`;
            }

    // Carbs
    const carbsProgress = Math.min((totals.carbs / dailyValues.carbs) * 100, 100);
    const carbsCircle = document.getElementById('carbsProgress');
    const carbsText = document.getElementById('carbsText');
    const carbsSub = document.getElementById('carbsSubNutrients');
    if (carbsCircle && carbsText && carbsSub) {
        carbsCircle.style.setProperty('--progress', carbsProgress);
    carbsText.textContent = `${carbsProgress.toFixed(0)}%`;
    const carbsRatio = document.getElementById('carbsRatio');
    if (carbsRatio) {
        carbsRatio.textContent = `Total Carbs: ${totals.carbs.toFixed(1)} / ${dailyValues.carbs} g`;
                }
    carbsSub.innerHTML = `
    <div id="carbsRatio"> Total Carbs: ${totals.carbs.toFixed(1)} / ${dailyValues.carbs} g</div>
        Sugar: ${totals.sugar.toFixed(1)}g |
            Fiber: ${totals.fiber.toFixed(1)}g
            `;
            }

            // Fat
            // Fat
            const fatProgress = Math.min((totals.totalFat / dailyValues.fat) * 100, 100);
            const fatCircle = document.getElementById('fatProgress');
            const fatText = document.getElementById('fatText');
            const fatSub = document.getElementById('fatSubNutrients');
            if (fatCircle && fatText && fatSub) {
                fatCircle.style.setProperty('--progress', fatProgress);
            fatText.textContent = `${fatProgress.toFixed(0)}%`;
            const fatRatio = document.getElementById('fatRatio');
            if (fatRatio) {
                fatRatio.textContent = `${totals.totalFat.toFixed(1)} / ${dailyValues.fat} g`;
                }
            fatSub.innerHTML = `
            <div id="fatRatio">${totals.totalFat.toFixed(1)} / ${dailyValues.fat} g</div>
            Total Fat: ${totals.totalFat.toFixed(1)}g |
                Saturated: ${totals.saturatedFat.toFixed(1)}g |
                    Unsaturated: ${totals.unsaturatedFat.toFixed(1)}g<br>
                        Omega-3: ${totals.omega3.toFixed(1)}g<br>
                            Omega-6: ${totals.omega6.toFixed(1)}g
                            `;
            }
        }

        function updateTopContributors(totals, nutrientContributors) {
            const macronutrients = ['calories', 'protein', 'carbs', 'fat'];
            console.log('Updating top contributors for fat:', nutrientContributors.fat);

            macronutrients.forEach(nutrient => {
                const contributors = nutrientContributors[nutrient];
                            const sorted = Object.entries(contributors)
                    .sort((a, b) => b[1] - a[1])
                            .slice(0, 3);
                            const topContributorsDiv = document.getElementById(`${nutrient}Top`);
                            if (topContributorsDiv) {
                                let html = '';
                    sorted.forEach(([food, value]) => {
                                html += `<span>${foodData[food].emoji} ${value.toFixed(1)}</span>`;
                    });
                            topContributorsDiv.innerHTML = html;
                }
            });
        }

                            function updateVitaminsAndMinerals(totals, nutrientContributors) {
            // Vitamins
            const vitamins = ['vitaminA', 'vitaminB12', 'vitaminC', 'vitaminD', 'vitaminE', 'vitaminK'];
            vitamins.forEach(vitamin => {
                const progressBar = document.getElementById(`${vitamin}ProgressBar`);
                            const topContributorsDiv = document.getElementById(`${vitamin}Top`);
                            if (progressBar && topContributorsDiv) {
                    const current = totals[vitamin];
                            const total = dailyValues[vitamin];
                            const progress = Math.min((current / total) * 100, 100);
                            const fill = progressBar.querySelector('.progress-bar-fill');
                            fill.style.width = `${progress}%`;
                            progressBar.setAttribute('data-percentage', progress.toFixed(0));
                            progressBar.setAttribute('data-current', current.toFixed(1));
                            progressBar.setAttribute('data-total', total);

                            // Get top 3 contributors
                            const contributors = nutrientContributors[vitamin];
                            const sortedContributors = Object.entries(contributors)
                        .sort((a, b) => b[1] - a[1])
                            .slice(0, 3);

                            // Build contributors display
                            let contributorsHTML = '';
                    sortedContributors.forEach(([food, value]) => {
                                contributorsHTML += `<span>${foodData[food].emoji} ${value.toFixed(1)}</span>`;
                    });
                            topContributorsDiv.innerHTML = contributorsHTML;
                }
            });

                            // Minerals
                            const minerals = ['calcium', 'magnesium', 'potassium', 'iron', 'zinc', 'selenium', 'sodium'];
            minerals.forEach(mineral => {
                const progressBar = document.getElementById(`${mineral}ProgressBar`);
                            const topContributorsDiv = document.getElementById(`${mineral}Top`);
                            if (progressBar && topContributorsDiv) {
                    const current = totals[mineral];
                            const total = dailyValues[mineral];
                            const progress = Math.min((current / total) * 100, 100);
                            const fill = progressBar.querySelector('.progress-bar-fill');
                            fill.style.width = `${progress}%`;
                            progressBar.setAttribute('data-percentage', progress.toFixed(0));
                            progressBar.setAttribute('data-current', current.toFixed(1));
                            progressBar.setAttribute('data-total', total);

                            // Get top 3 contributors
                            const contributors = nutrientContributors[mineral];
                            const sortedContributors = Object.entries(contributors)
                        .sort((a, b) => b[1] - a[1])
                            .slice(0, 3);

                            // Build contributors display
                            let contributorsHTML = '';
                    sortedContributors.forEach(([food, value]) => {
                                contributorsHTML += `<span>${foodData[food].emoji} ${value.toFixed(1)}</span>`;
                    });
                            topContributorsDiv.innerHTML = contributorsHTML;
                }
            });
        }

                            function resetProgressBars() {
            // Reset progress circles
            const progressCircles = document.querySelectorAll('.progress-circle');
            progressCircles.forEach(circle => {
                                circle.style.setProperty('--progress', 0);
                            const text = circle.querySelector('.progress-text');
                            if (text) text.textContent = '0%';
            });

                            // Reset sub-nutrients info
                            document.getElementById('caloriesRatio').textContent = `0 / 0 kcal`;
                            document.getElementById('carbsSubNutrients').innerHTML = `Total Carbs: 0g<br>Sugar: 0g<br>Fiber: 0g`;
                                document.getElementById('fatSubNutrients').innerHTML = `Total Fat: 0g<br>Saturated: 0g<br>Unsaturated: 0g<br>Omega-3: 0g<br>Omega-6: 0g`;

                                    // Reset progress bars
                                    const progressBars = document.querySelectorAll('.progress-bar-container');
            progressBars.forEach(bar => {
                const fill = bar.querySelector('.progress-bar-fill');
                                    fill.style.width = '0%';
                                    bar.setAttribute('data-percentage', '0');
                                    bar.setAttribute('data-current', '0');
                // data-total remains as is
            });

                                    // Clear top contributors
                                    const topContributors = document.querySelectorAll('.contributors');
            topContributors.forEach(div => div.innerHTML = '');
        }

                                    // Initialize the dashboard
                                    updateNutritionTable();

                                    // Search functionality
                                    const searchInput = document.getElementById('foodSearch');

                                    searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
                                    const foodButtons = document.querySelectorAll('.food-button');

            foodButtons.forEach(button => {
                const foodName = button.dataset.food.toLowerCase();
                                    if (foodName.includes(searchTerm)) {
                                        button.style.display = 'inline-block';
                } else {
                                        button.style.display = 'none';
                }
            });
        });

                                    // Target Inputs functionality
                                    const targetCaloriesInput = document.getElementById('targetCalories');
                                    const targetProteinInput = document.getElementById('targetProtein');
                                    const targetFiberInput = document.getElementById('targetFiber');

                                    targetCaloriesInput.addEventListener('input', updateNutritionTable);
                                    targetProteinInput.addEventListener('input', updateNutritionTable);
                                    targetFiberInput.addEventListener('input', updateNutritionTable);

// Custom Recipe Creation
const createRecipeBtn = document.getElementById('createRecipeBtn');

createRecipeBtn.addEventListener('click', () => {
    const flaggedFoodItems = document.querySelectorAll('.food-item.flagged-for-recipe');
    if (flaggedFoodItems.length === 0) {
        alert('Please flag some foods before creating a recipe.');
        return;
    }

    const recipeName = prompt('Enter a name for your custom recipe:');
    if (!recipeName) return;

    const customRecipe = Array.from(flaggedFoodItems).map(item => {
        const foodName = item.querySelector('label').textContent.trim().substring(2); // Remove emoji
        const sliderValue = item.querySelector('input[type="range"]').value;
        return { food: foodName, quantity: parseInt(sliderValue) };
    });

    if (!recipes.customRecipes) {
        recipes.customRecipes = {};
    }
    recipes.customRecipes[recipeName] = customRecipe;

    const recipeButton = document.createElement('button');
    recipeButton.textContent = `${recipeName} 🍽️`;
    recipeButton.className = 'food-button recipe-button';
    recipeButton.dataset.category = 'custom';
    recipeButton.dataset.food = recipeName;
    recipeButton.onclick = () => toggleRecipe(recipeName, recipeButton, true);
    buttonContainer.appendChild(recipeButton);

    localStorage.setItem('customRecipes', JSON.stringify(recipes.customRecipes));

    alert('Custom recipe created successfully!');

    // Remove the 'flagged-for-recipe' class from all food items
    flaggedFoodItems.forEach(item => item.classList.remove('flagged-for-recipe'));
});

// Load custom recipes from localStorage on page load
window.addEventListener('load', () => {
    const savedRecipes = localStorage.getItem('customRecipes');
    if (savedRecipes) {
        recipes.customRecipes = JSON.parse(savedRecipes);

        // Create buttons for saved custom recipes
        for (let recipe in recipes.customRecipes) {
            const recipeButton = document.createElement('button');
            recipeButton.textContent = `${recipe} 🍽️`;
            recipeButton.className = 'food-button recipe-button';
            recipeButton.dataset.category = 'custom';
            recipeButton.dataset.food = recipe;
            recipeButton.onclick = () => toggleRecipe(recipe, recipeButton, true);
            buttonContainer.appendChild(recipeButton);
        }
    } else {
        // Initialize recipes.customRecipes if it doesn't exist
        recipes.customRecipes = {};
    }
});
