import React from "react";
import { Search } from "lucide-react";

export function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Search className="h-5 w-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search ATMs by name or service number..."
        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl 
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 
                 focus:border-primary transition-all text-lg"
        autoFocus
      />
    </div>
  );
}
