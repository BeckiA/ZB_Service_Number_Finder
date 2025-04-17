import React, { useState, useCallback } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { useDebounce } from "./hooks/useDebounce";
import { Database, Server } from "lucide-react";
import atms from "./data/Network_Bible.json";

// Importing data from JSON file
const cleanedAtms = atms.filter((item) => item && item.Column1 && item.Column7);
console.log(cleanedAtms);
function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useDebounce(query, 300);

  const searchATMs = useCallback((query) => {
    const normalizedQuery = query.toLowerCase();
    return cleanedAtms.filter(
      (item) =>
        (item &&
          item.Column1 &&
          item.Column1.toLowerCase().includes(normalizedQuery)) ||
        (item.Column7 && item.Column7.toString().includes(normalizedQuery))
    );
  }, []);

  const filteredATMs = searchATMs(debouncedSearch);
  console.log("Filtered ATMs:", filteredATMs);
  const handleSearch = (value) => {
    setQuery(value);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="text-center mb-12">
          <img
            src="./zemen_logo.png"
            alt="Zemen Bank Logo"
            className="mx-auto mb-6 rounded-lg w-20 h-auto"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            ATM Service Number Finder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quickly locate ATM service numbers and WAN IPs across our network
            infrastructure
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg border border-white/20">
            <SearchBar value={query} onChange={handleSearch} />
            <div className="mt-4 text-sm text-gray-500 text-center">
              Try searching by ATM name (e.g., "Figa") or service number
            </div>
          </div>
        </div>

        <SearchResults results={filteredATMs} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
