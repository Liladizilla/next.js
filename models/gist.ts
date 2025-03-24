import mongoose from "mongoose";

const GistSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: String,
});

export default mongoose.models.Gist || mongoose.model("Gist", GistSchema);