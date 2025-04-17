import React, { useState } from "react";
import { ATMCard } from "./ATMCard";
import { SearchX } from "lucide-react";
export function SearchResults({ results, isLoading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredResults = results.filter((atm) => atm.Column1 && atm.Column7);
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredResults.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 animate-pulse"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-7 bg-gray-200 rounded w-3/4"></div>
              <div className="h-9 w-9 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <div className="h-24 bg-gray-200 rounded-lg"></div>
              <div className="h-24 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="mt-6">
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredResults.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="flex justify-center mb-4">
          <SearchX className="h-16 w-16 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No ATMs Found
        </h3>
        <p className="text-gray-500">
          Try adjusting your search term or check for typos
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((atm, index) => (
          <ATMCard
            key={index}
            name={atm.Column1}
            serviceNumber={atm.Column7}
            wanIP={atm.Column2}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 overflow-x-auto">
          <div className="flex flex-wrap justify-center gap-2 px-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-4 py-2 rounded-md text-sm font-medium border whitespace-nowrap transition-colors duration-200 ${
                  currentPage === i + 1
                    ? "bg-primary text-white border-[#8c0c13]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
