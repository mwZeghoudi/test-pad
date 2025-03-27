import Nav from "@/@/components/Nav";
import Header from "@/@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr] h-screen gap-4 p-4">
      <Header />
      <Nav />
      <main className="col-span-10 bg-gray-200 p-6 rounded-lg">{children}</main>
    </div>
  );
}
