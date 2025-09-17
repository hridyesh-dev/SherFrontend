import React from 'react';

const About = () => {
  const features = [
    {
      title: "Curated Recipes",
      description: "Handpicked dishes from global cuisines with step-by-step instructions.",
      icon: "🍽️",
    },
    {
      title: "Chef Profiles",
      description: "Learn from culinary experts and explore their signature creations.",
      icon: "👨‍🍳",
    },
    {
      title: "Smart Search",
      description: "Find recipes by ingredients, cuisine, difficulty, or meal type.",
      icon: "🔍",
    },
    {
      title: "Save & Share",
      description: "Bookmark your favorites and share them with friends and family.",
      icon: "📌",
    },
    {
      title: "Responsive Design",
      description: "Enjoy a seamless experience across mobile, tablet, and desktop.",
      icon: "📱",
    },
    {
      title: "Community Driven",
      description: "Join a vibrant community of food lovers and share your own recipes.",
      icon: "🌍",
    },
  ];

  const featuredRecipes = [
    {
      title: "Classic Margherita Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    },
    {
      title: "Vegetarian Stir-Fry",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    },
    {
      title: "Chocolate Chip Cookies",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">
      {/* CTA Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-green-400 mb-4">Welcome to FlavorVerse</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
          Discover a world of flavors, share your culinary creations, and explore recipes that bring joy to your kitchen.
        </p>
        <button className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition-colors duration-300">
          Explore Recipes
        </button>
      </div>


      {/* Featured Recipes Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-300 mb-8 text-center">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-400">{recipe.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
