
import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const subcategories = [
  {
    title: "Cricket",
    category : "Sports",
    description: "Cricket Game",
    thumbnail:
      "https://images.unsplash.com/photo-1595207732481-22cccd3480fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Boxing",
    category : "Indoor",
    description: "Boxing",
    thumbnail:
      "https://images.unsplash.com/photo-1622599476652-949701db25a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNwb3J0cyUyMFN1YiUyMGNhZXRvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Video Games",
    category : "Indoor Games",
    description: "Best games to play",
    thumbnail:
      "https://images.unsplash.com/photo-1642444616393-df04dcb1492c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlZGlvJTIwZ2FtZXN8ZW58MHx8MHx8fDA%3D",
  },

];

export default function SubCategories() {
  return (
    <div className="min-h-screen mx-10 px-1">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Sub Categories</h1>
        <AddSubCategory/>
      </div>
      <Table>
        <TableCaption>A list of your All  Sub Categories</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="ml-0 w-[100px]">Thumbnail</TableHead>
            <TableHead className="">Title</TableHead>
            <TableHead className="">Category</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subcategories.map((subcategory) => (
            <TableRow key={subcategory.title}>
              <TableCell className="text-right">
                <Image
                  src={subcategory.thumbnail}
                  alt={subcategory.title}
                  width={50} // specify the width
                  height={50} // specify the height
                  className="rounded-md" // optional: to make it a circular image
                />
              </TableCell>
              <TableCell className="font-medium">{subcategory.title}</TableCell>
              <TableCell className="font-medium">{subcategory.category}</TableCell>
              <TableCell>{subcategory.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
