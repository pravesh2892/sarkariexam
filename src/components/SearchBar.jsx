"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    setSearchQuery(search || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      router.push(`/?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/");
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    router.push("/");
  };

  return (
    <div className="mt-2 relative mr-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full pl-8 pr-10 py-1 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <CiSearch
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={18}
      />
      {searchQuery && (
        <button
          onClick={clearSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      )}
    </div>
  );
}
