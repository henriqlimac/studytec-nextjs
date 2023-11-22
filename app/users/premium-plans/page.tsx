import getCurrentUser from "@/app/actions/getCurrentUser";
import AboutPlansPage from "./components/planspage";
import "@/app/themes/images.css";

export default async function PremiumPlans() {
  const currentUser = await getCurrentUser();

  return (
    <div className="pt-16 flex min-h-screen justify-center items-center gap-10 flex-wrap bg-grid">
      <AboutPlansPage currentUser={currentUser!} />
    </div>
  );
}
