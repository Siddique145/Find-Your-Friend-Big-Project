import { connectDB } from "@/lib/db/connectDB";
import { SubcategoriesModal } from "@/lib/models/SubCategory";


export async function GET(request) {
  try {
    await connectDB();
    const reqUrl = request.url;
    const {searchParams} = new URL(reqUrl)
    // console.log("searchParams =>",searchParams)
    const query = {}
    if(searchParams.get("category")) {
      query.category = searchParams.get("category")
    }


    console.log(query)
    const subcategories = await SubcategoriesModal.find(query).populate("category" , "title");


    return Response.json(
      {
        msg: "SubCategories fetched successfully",
        subcategories,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return Response.json(
      {
        msg: "Error fetching categories",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const obj = await request.json();
    const newSubCategory = new SubcategoriesModal(obj);
    await newSubCategory.save();
    return Response.json(
      {
        msg: "Sub Category created successfully",
        newSubCategory,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating subcategory:", error);
    return Response.json(
      {
        msg: "Error creating subcategory",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  // Implement PUT logic here
}

export async function DELETE(request) {
  // Implement DELETE logic here
}
