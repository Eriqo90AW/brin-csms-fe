import Sidebar from "../../components/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <main className="flex flex-row ">
        <Sidebar />
        <div className="w-full ">{children}</div>
      </main>
    </>
  );
}
