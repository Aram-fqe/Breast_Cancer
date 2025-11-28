import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function SearchBar() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search your symptoms or breast cancer topics..."
          className="pl-12 pr-4 py-4 w-full text-lg rounded-xl border-2 border-gray-200 focus:border-[#FFB6C1] focus:ring-[#FFB6C1] focus:ring-opacity-20"
        />
      </div>
    </div>
  );
}