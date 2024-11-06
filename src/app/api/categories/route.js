import { connectDB } from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/Category";

export async function GET(request) {
  await connectDB();
  const categories = await CategoryModal.find();
  return Response.json(
    {
      msg: "Categories Fetched Successfully",
      categories,
    },
    { status: 200 }
  );
}
export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newCategory = new CategoryModal(obj);
  await newCategory.save();
  return Response.json(
    {
      msg: "Categories Fetched Successfully",
      newCategory,
    },
    { status: 201 }
  );
}
export async function PUT(request) {}
export async function DELETE(request) {}



// import { connectDB } from "@/lib/db/connectDB";
// import { CategoryModal } from "@/lib/models/Category";

// export async function GET(request) {
//   try {
//     await connectDB();
//     const categories = await CategoryModal.find();
//     return Response.json(
//       {
//         msg: "Categories fetched successfully",
//         categories,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return Response.json(
//       {
//         msg: "Error fetching categories",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     await connectDB();
//     const obj = await request.json();

//     // Validation can be added here
//     const newCategory = new CategoryModal(obj);
//     await newCategory.save();

//     return Response.json(
//       {
//         msg: "Category created successfully",
//         newCategory,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating category:", error);
//     return Response.json(
//       {
//         msg: "Error creating category",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request) {
//   // Implement PUT logic here
// }

// export async function DELETE(request) {
//   // Implement DELETE logic here
// }
