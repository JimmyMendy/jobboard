import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true},
  salary: { type: Number, required: true },
  description: { type: String, required: true},
  logo: { type: String, required: false },
  tag: { type: String, required: false}
})

export default mongoose.Job || mongoose.model("Job", JobSchema)