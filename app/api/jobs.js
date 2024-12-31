import { connectToDatabase } from "../lib/db";
import job from "../models/job";

export default async function handler(req, res) {
  await connectToDatabase()

  if (req.method === "GET") {
    const { title, location, minSalary, maxSalary } = req.query;
    
    let filter = {};

    if (title) filter.title = { $regex: title, $options: "i" };
    if (location) filter.location = { $regex: location, $options: "i"};
    if (minSalary) filter.salary = { $gte: parseInt(minSalary) };
    if (maxSalary) filter.salary = { ...filter.salary, $lte: parseInt(maxSalary) };

    const jobs = await Job.find(filter);
    return res.status(200).json(jobs);
  } else if (req.method === "POST") {
    const { title, location, minSalary, maxSalary } = req.body;
  }

  res.status(405).json({ message: "Method not allowed "})
}