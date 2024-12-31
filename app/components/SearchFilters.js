import { useState } from "react";

export default function SearchFilters({ onSearch }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");


  const handleSearch = () => {
    onSearch({ title, location, minSalary, maxSalary });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input 
        type="text" 
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded-md w-full md:w-1/4"
      />
      <input 
        type="text" 
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded-md w-full md:w-1/4"
      />
      <input 
        type="number" 
        placeholder="Min salary"
        value={title}
        onChange={(e) => setMinSalary(e.target.value)}
        className="border p-2 rounded-md w-full md:w-1/4"
      />
      <input 
        type="number" 
        placeholder="Max Salary"
        value={maxSalary}
        onChange={(e) => setMaxSalary(e.target.value)}
        className="border p-2 rounded-md w-full md:w-1/4"
      />
      <button 
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  )
}