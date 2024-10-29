import Categories from "@/app/(admin)/admin/categories/page";
import { description } from "@/components/DashboardChart";
import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategoriesSchema = new Schema({
  title: String,
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Categories",
  },
  description: String,
  thumbanail: String,
});

export const SubcategoriesModal = mongoose.model(
  "Subcategories",
  subcategoriesSchema
);
