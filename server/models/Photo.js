import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Photo = new Schema(
  {
    id: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    fullUrl: { type: String, required: true },
    regularUrl: { type: String, required: true },
    downloadLocation: { type: String, required: true },
    userName: { type: String, required: true },
    unsplashLink: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Photo;