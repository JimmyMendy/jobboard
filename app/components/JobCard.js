export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.location}</p>
    </div>
  )
}