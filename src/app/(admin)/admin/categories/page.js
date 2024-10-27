
import { AddCategory } from "@/components/AddCategory/AddCategory";
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

const categories = [
  {
    title: "Sports",
    description: "Foot Ball Game ",
    thumbnail:"https://images.unsplash.com/photo-1526838890080-053700ebe3d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEZvb3RiYWx8ZW58MHx8MHx8fDA%3D",
    
  },
  {
    title: "Races",
    description: "Car Races Event",
    thumbnail:"https://images.unsplash.com/photo-1475720295950-2444738862a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FyJTIwcmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    
  },
  {
    title: "Inoor Games",
    description: "Snooker",
    thumbnail:"https://images.unsplash.com/photo-1514914197726-5a7c4ab2d6ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEluZG9vciUyMEdhbWVzfGVufDB8fDB8fHww",
    
  },

];

export default function Categories() {
  return (
    <div className="min-h-screen mx-10 px-1">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Categories</h1>
        <AddCategory/>
      </div>
      <Table>
      <TableCaption>A list of your All Categories</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead className="ml-0 w-[100px]">Thumbnail</TableHead>
          <TableHead className="">Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.title}>
            <TableCell className="text-right">
              <Image
                src={category.thumbnail}
                alt={category.title}
                width={50} // specify the width
                height={50} // specify the height
                className="rounded-md" // optional: to make it a circular image
              />
            </TableCell>
            <TableCell className="font-medium">{category.title}</TableCell>
            <TableCell>{category.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    </div>
  );
}
