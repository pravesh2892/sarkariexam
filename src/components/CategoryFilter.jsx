import { useState } from "react";

const CategoryFilter = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-3 py-1 text-sm transition-colors relative ${
              selectedCategory === category
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {category}
            {selectedCategory === category && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
