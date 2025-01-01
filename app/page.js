"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import JobCard from "./components/JobCard";
import Header from "./components/Header";
import SearchFilters from "./components/SearchFilters";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJob = async (filter = {}) => {
    setLoading(true);
    const { data } = await axios.get("/api/jobs", { params: filter });
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <div>
      <Header/>
      <main className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Job Board</h1>
        <SearchFilters onSearch={fetchJob} />
        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
