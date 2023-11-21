import Navbar from "./components/navbar";
import ThemeContext from "../context/ThemeContext";

import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <ThemeContext>
      <div className="w-full min-h-screen bg-secondary text-typography">
        <Navbar currentUser={currentUser!} />
        <main
          className={`xl:ml-[220px] transition-all overflow-hidden scroll-smooth`}
        >
          {children}
        </main>
      </div>
    </ThemeContext>
  );
}
