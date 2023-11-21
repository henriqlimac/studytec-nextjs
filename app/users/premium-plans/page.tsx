import AboutPlansPage from "./components/planspage";
import '@/app/themes/images.css'

export default async function PremiumPlans() {
  return (
    <div className="pt-16 flex min-h-screen justify-center items-center gap-10 flex-wrap bg-grid">
      <AboutPlansPage />
    </div>
  );
}
