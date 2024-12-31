export default function JobCard({ job }) {
  return (
    <div className='border p-4 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold'>{job.title}</h2>
      <p className='text-gray-700'>{job.location}</p>
      <p className='text-green-600'>${job.salary}</p>
      <p className='text-gray-500'>{job.description}</p>
    </div>
  );
}
