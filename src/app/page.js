"use client";
import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "../components/CategoryFilter";
import ActivityCard from "../components/ActivityCard";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [dataSet, setDataSet] = useState([
    {
      id: "a1",
      name: "Yoga",
      category: "Fitness",
      description: "Relax and stretch your body",
      image: "/images/yoga.avif",
    },
    {
      id: "a2",
      name: "HIIT",
      category: "Fitness",
      description: "High-intensity interval training",
      image: "/images/fittness.avif",
    },
    {
      id: "a3",
      name: "Cycling",
      category: "Fitness",
      description: "Indoor cycling class",
      image: "/images/cycling.avif",
    },
    {
      id: "b1",
      name: "Oil Painting",
      category: "Art",
      description: "Learn oil painting techniques",
      image: "/images/painting.avif",
    },
    {
      id: "b2",
      name: "Pottery",
      category: "Art",
      description: "Create beautiful ceramic pieces",
      image: "/images/Pottery.avif",
    },
    {
      id: "b3",
      name: "Digital Art",
      category: "Art",
      description: "Explore digital illustration",
      image: "/images/Digital-Art.avif",
    },
    {
      id: "c1",
      name: "Guitar Lessons",
      category: "Music",
      description: "Learn to play the guitar",
      image: "/images/Guitar.avif",
    },
    {
      id: "c2",
      name: "Music Production",
      category: "Music",
      description: "Create and mix your own music",
      image: "/images/music.avif",
    },
    {
      id: "c3",
      name: "Choir",
      category: "Music",
      description: "Join a group singing session",
      image: "/images/Choir.avif",
    },
    {
      id: "d1",
      name: "Italian Cuisine",
      category: "Culinary",
      description: "Learn to cook authentic Italian dishes",
      image: "/images/italian-cuisine.avif",
    },
    {
      id: "d2",
      name: "Pastry Making",
      category: "Culinary",
      description: "Create delicious pastries and desserts",
      image: "/images/pastry-making.avif",
    },
    {
      id: "d3",
      name: "Sushi Workshop",
      category: "Culinary",
      description: "Master the art of sushi making",
      image: "/images/sushi-workshop.avif",
    },
  ]);
  const [filteredDataSet, setFilteredDataSet] = useState(dataSet);
  const categories = ["All", "Fitness", "Art", "Music", "Culinary"];

  const handleSearchQuery = useCallback(
    (query) => {
      if (query.trim() === "") {
        setSearchResults([]);
        setFilteredDataSet(dataSet);
      } else {
        const results = dataSet.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setFilteredDataSet(results);
      }
    },
    [dataSet]
  );

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      handleSearchQuery(search);
    } else {
      setSearchResults([]);
      setFilteredDataSet(dataSet);
    }
  }, [searchParams, dataSet, handleSearchQuery]);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilteredDataSet(searchResults.length > 0 ? searchResults : dataSet);
    } else {
      const filtered = (
        searchResults.length > 0 ? searchResults : dataSet
      ).filter((item) => item.category === category);
      setFilteredDataSet(filtered);
    }
  };

  return (
    <main className="container mx-auto p-4">
      <div className="my-4">
        <CategoryFilter
          categories={categories}
          onCategorySelect={handleCategoryChange}
        />
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredDataSet.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ActivityCard activity={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
