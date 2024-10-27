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

const events = [
  {
    title: "Birthday",
    description: "Birday of Pet",
    location: "Karachi",
    thumbnail:
      "https://images.unsplash.com/photo-1479750178258-aec5879046ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJpcnRoZGF5fGVufDB8fDB8fHww",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Cycling",
    description: "bicyceles race",
    location: "lahore",
    thumbnail:
      "https://images.unsplash.com/photo-1510005294384-c03e247f0542?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Kite Flying",
    description: "Kite flying festivel",
    location: "Karachi",
    thumbnail:
      "https://images.unsplash.com/photo-1534640881905-039ca1e21a81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGV8ZW58MHx8MHx8fDA%3D",
    date: new Date().toLocaleDateString(),
  },
];

export default function Events() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">All Events</h1>
      </div>

      <Table>
        <TableCaption>A list of your All Events</TableCaption>
        <TableHeader>
          <TableRow className="">
            <TableHead className="ml-0 w-[100px]">Thumbnail</TableHead>
            <TableHead className="">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.title}>
              <TableCell className="text-right">
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  width={50} // specify the width
                  height={50} // specify the height
                  className="rounded-md" // optional: to make it a circular image
                />
              </TableCell>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{event.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  );
}
