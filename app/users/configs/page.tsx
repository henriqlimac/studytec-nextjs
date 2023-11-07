import getCurrentUser from "@/app/actions/getCurrentUser";
import UserInfo from "./components/userinfo";

export default async function UserConfigs() {
  const currentUser = await getCurrentUser();

  return (
    <div className="inset-0 absolute w-full min-h-screen h-full bg-secondary z-[99] flex items-center justify-center">
      <UserInfo currentUser={currentUser!} />
    </div>
  );
}
