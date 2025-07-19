import Sidebar from "@/components/Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        {children}
        <footer className="mt-10 border-t pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 Aradhya Core. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
