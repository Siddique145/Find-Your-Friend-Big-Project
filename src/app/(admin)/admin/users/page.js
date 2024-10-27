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

const users = [
  {
    fullname: "Lady",
    email: "lady@gmail.com",
    location: "Karachi",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "Lady 1",
    email: "lady@gmail.com",
    location: "Karachi",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
  },
  {
    fullname: "Lady 2",
    email: "lady@gmail.com",
    location: "Karachi",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
  },
];

export default function AllUsers() {
  return (
  <div className="min-h-screen container mx-auto">
      {/* <div className="min-h-screen mx-10 px-1"> */}
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">All Users</h1>
      </div>
    <Table>
      <TableCaption>A list of your All Users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="ml-0 w-[100px]">Profile</TableHead>
          <TableHead className="">Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Events</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.fullname}>
            <TableCell className="text-right">
              <Image
                src={user.profileImage}
                alt={user.fullname}
                width={50} // specify the width
                height={50} // specify the height
                className="rounded-md" // optional: to make it a circular image
              />
            </TableCell>
            <TableCell className="font-medium">{user.fullname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{user.events}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  );
}
