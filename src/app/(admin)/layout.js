import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="w-full">
            <Link href="/admin/dashboard" passHref>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </Link>
            <Link href="/admin/users" passHref>
              <TabsTrigger value="users">Users</TabsTrigger>
            </Link>
            <Link href="/admin/events" passHref>
              <TabsTrigger value="events">Events</TabsTrigger>
            </Link>
            <Link href="/admin/categories" passHref>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </Link>
            <Link href="/admin/subcategories" passHref>
              <TabsTrigger value="subcategories">Sub Categories</TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="dashboard">{children}</TabsContent>
          <TabsContent value="users">{children}</TabsContent>
          <TabsContent value="events">{children}</TabsContent>
          <TabsContent value="categories">{children}</TabsContent>
          <TabsContent value="subcategories">{children}</TabsContent>
        </Tabs>
      </body>
    </html>
  );
}
