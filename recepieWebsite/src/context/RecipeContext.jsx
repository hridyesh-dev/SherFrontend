import React, { createContext, useState } from 'react';

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [data, setdata] = useState([
        {
        id: 1,
        title: "Classic Margherita Pizza",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat the oven to 475°F (245°C).",
            "Roll out the pizza dough and spread tomato sauce evenly.",
            "Top with slices of fresh mozzarella and fresh basil leaves.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "Slice and serve hot."
        ],
        image: "https://cdn.dummyjson.com/recipe-images/1.webp",
        rating: 4.6,
        reviewCount: 98,
        chef: "Unknown Chef",
        category: "Dinner",
        desc: "Roll out the pizza dough and spread tomato sauce evenly."
        },
        {
        id: 2,
        title: "Vegetarian Stir-Fry",
        ingredients: [
            "Tofu, cubed",
            "Broccoli florets",
            "Carrots, sliced",
            "Bell peppers, sliced",
            "Soy sauce",
            "Ginger, minced",
            "Garlic, minced",
            "Sesame oil",
            "Cooked rice for serving"
        ],
        instructions: [
            "In a wok, heat sesame oil over medium-high heat.",
            "Add minced ginger and garlic, sauté until fragrant.",
            "Add cubed tofu and stir-fry until golden brown.",
            "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
            "Pour soy sauce over the stir-fry and toss to combine.",
            "Serve over cooked rice."
        ],
        image: "https://cdn.dummyjson.com/recipe-images/2.webp",
        rating: 4.7,
        reviewCount: 26,
        chef: "Unknown Chef",
        category: "Lunch",
        desc: "Add minced ginger and garlic, sauté until fragrant."
        },
        {
        id: 3,
        title: "Chocolate Chip Cookies",
        ingredients: [
            "All-purpose flour",
            "Butter, softened",
            "Brown sugar",
            "White sugar",
            "Eggs",
            "Vanilla extract",
            "Baking soda",
            "Salt",
            "Chocolate chips"
        ],
        instructions: [
            "Preheat the oven to 350°F (175°C).",
            "In a bowl, cream together softened butter, brown sugar, and white sugar.",
            "Beat in eggs one at a time, then stir in vanilla extract.",
            "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
            "Fold in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 10-12 minutes or until edges are golden brown.",
            "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
        ],
        image: "https://cdn.dummyjson.com/recipe-images/3.webp",
        rating: 4.9,
        reviewCount: 13,
        chef: "Unknown Chef",
        category: "Snack",
        desc: "In a bowl, cream together softened butter, brown sugar, and white sugar."
        },
        {
        id: 4,
        title: "Chicken Alfredo Pasta",
        ingredients: [
            "Fettuccine pasta",
            "Chicken breast, sliced",
            "Heavy cream",
            "Parmesan cheese, grated",
            "Garlic, minced",
            "Butter",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Cook fettuccine pasta according to package instructions.",
            "In a pan, sauté sliced chicken in butter until fully cooked.",
            "Add minced garlic and cook until fragrant.",
            "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
            "Season with salt and pepper to taste.",
            "Combine the Alfredo sauce with cooked pasta.",
            "Garnish with fresh parsley before serving."
        ],
        image: "https://cdn.dummyjson.com/recipe-images/4.webp",
        rating: 4.9,
        reviewCount: 82,
        chef: "Unknown Chef",
        category: "Lunch",
        desc: "In a pan, sauté sliced chicken in butter until fully cooked."
        },
        {
        id: 5,
        title: "Mango Salsa Chicken",
        ingredients: [
            "Chicken thighs",
            "Mango, diced",
            "Red onion, finely chopped",
            "Cilantro, chopped",
            "Lime juice",
            "Jalapeño, minced",
            "Salt and pepper to taste",
            "Cooked rice for serving"
        ],
        instructions: [
            "Season chicken thighs with salt and pepper.",
            "Grill or bake chicken until fully cooked.",
            "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
            "Dice the cooked chicken and mix it with the mango salsa.",
            "Serve over cooked rice."
        ],
        image: "https://cdn.dummyjson.com/recipe-images/5.webp",
        rating: 4.8,
        reviewCount: 45,
        chef: "Unknown Chef",
        category: "Dinner",
        desc: "Grill or bake chicken until fully cooked."
        },
        {
        id: 6,
        title: "Greek Moussaka",
        ingredients: [
            "Eggplants, sliced",
            "Ground lamb or beef",
            "Onions, finely chopped",
            "Garlic, minced",
            "Tomatoes, crushed",
            "Red wine",
            "Cinnamon",
            "Allspice",
            "Nutmeg",
            "Olive oil",
            "Milk",
            "Flour",
            "Parmesan cheese",
            "Egg yolks"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Sauté sliced eggplants in olive oil until browned. Set aside.",
            "In the same pan, cook chopped onions and minced garlic until softened.",
            "Add ground lamb or beef and brown. Stir in crushed tomatoes, red wine, and spices.",
            "In a separate saucepan, make béchamel sauce: melt butter, whisk in flour, add milk, and cook until thickened.",
            "Remove from heat and stir in Parmesan cheese and egg yolks.",
            "In a baking dish, layer eggplants and meat mixture. Top with béchamel sauce.",
            "Bake for 40-45 minutes until golden brown. Let it cool before slicing.",
            "Serve slices of moussaka warm and enjoy this Greek classic!"
        ],
        image: "https://cdn.dummyjson.com/recipe-images/19.webp",
        rating: 4.8,
        reviewCount: 39,
        chef: "Unknown Chef",
        category: "Dinner",
        desc: "Sauté sliced eggplants in olive oil until browned. Set aside."
        },
        {
        id: 7,
        title: "Korean Bibimbap",
        ingredients: [
            "Cooked white rice",
            "Beef bulgogi (marinated and grilled beef slices)",
            "Carrots, julienned and sautéed",
            "Spinach, blanched and seasoned",
            "Zucchini, sliced and grilled",
            "Bean sprouts, blanched",
            "Fried egg",
            "Gochujang (Korean red pepper paste)",
            "Sesame oil",
            "Toasted sesame seeds"
        ],
        instructions: [
            "Arrange cooked white rice in a bowl.",
            "Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts.",
            "Place a fried egg on top and drizzle with gochujang and sesame oil.",
            "Sprinkle with toasted sesame seeds before serving.",
            "Mix everything together before enjoying this delicious Korean bibimbap!",
            "Feel free to customize with additional vegetables or protein."
        ],
        image: "https://cdn.dummyjson.com/recipe-images/18.webp",
        rating: 4.9,
        reviewCount: 56,
        chef: "Unknown Chef",
        category: "Dinner",
        desc: "Arrange cooked white rice in a bowl."
        },
        {
        id: 8,
        title: "Moroccan Chickpea Tagine",
        ingredients: [
            "Chickpeas, cooked",
            "Tomatoes, chopped",
            "Carrots, diced",
            "Onions, finely chopped",
            "Garlic, minced",
            "Cumin",
            "Coriander",
            "Cinnamon",
            "Paprika",
            "Vegetable broth",
            "Olives",
            "Fresh cilantro, chopped"
        ],
        instructions: [
            "In a tagine or large pot, sauté chopped onions and minced garlic until softened.",
            "Add diced carrots, chopped tomatoes, and cooked chickpeas.",
            "Season with cumin, coriander, cinnamon, and paprika. Stir to coat.",
            "Pour in vegetable broth and bring to a simmer. Cook until carrots are tender.",
            "Stir in olives and garnish with fresh cilantro before serving.",
            "Serve this flavorful Moroccan dish with couscous or crusty bread."
        ],
        image: "https://cdn.dummyjson.com/recipe-images/17.webp",
        rating: 4.5,
        reviewCount: 50,
        chef: "Unknown Chef",
        category: "Dinner",
        desc: "In a tagine or large pot, sauté chopped onions and minced garlic until softened."
        }
    ]);

    return (
        <recipecontext.Provider value={{ data, setdata }}>
        {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
