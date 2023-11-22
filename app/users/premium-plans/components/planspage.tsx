import { User } from "@prisma/client";
import PlanCard from "./plancard";

interface PlansPageProps {
  currentUser: User;
}

export default function AboutPlansPage({ currentUser }: PlansPageProps) {
  return (
    <>
      <PlanCard
        color="text-blue fill-none"
        title="BÁSICO"
        description="O plano 'BÁSICO' será o seu plano inicial, ou seja, o plano gratuito, onde você terá acesso aos vídeos, porém terá anúncios, onde você terá interrupções."
        price={"GRATUITO"}
        function1={true}
        disabled={true}
      />
      <PlanCard
      color="text-amber-400 fill-amber-400"
        title="PREMIUM"
        description="O plano 'PREMIUM' lhe dará acesso aos vídeos sem anúncios, ou seja, feito para aqueles que desejam estudar sem interrupções."
        price={"R$9,90/m"}
        function1={true}
        function2={true}
        function3={true}
        currentUser={currentUser!}
      />
      <PlanCard
      color="text-danger fill-danger"
        title="PREMIUM+"
        description="O plano 'PREMIUM+' dará acesso aos vídeos sem anúncios e um plano psicólogo online, para aqueles que desejam ter autocuidado."
        price={"R$59,90/m"}
        function1={true}
        function2={true}
        function3={true}
        function4={true}
        currentUser={currentUser!}
      />
    </>
  );
}
