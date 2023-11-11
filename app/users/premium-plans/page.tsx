import getCurrentUser from "@/app/actions/getCurrentUser";
import AboutPlansPage from "./components/planspage";

export default async function PremiumPlans() {
  const currentUser = getCurrentUser();

  return (
    <div className="pt-16 flex min-h-screen justify-center items-center gap-10 flex-wrap">
      <AboutPlansPage currentUser={currentUser!} />
    </div>
  );
}
