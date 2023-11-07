// import * as React from "react";
// import getCurrentUser from "@/app/actions/getCurrentUser";
// import { User } from "@prisma/client";

// type SessionContextProps = {
//   children: React.ReactNode;
// };

// type SessionContextType = {
//     currentUser: User;
// };

// export const SessionContext =
//   React.createContext<SessionContextType>();

// export default async function SessionContextProvider({
//   children,
// }: SessionContextProps) {
//   const currentUser = await getCurrentUser();

//   return (
//     <SessionContext.Provider
//       value={{
//         ...currentUser,
//       }}
//     >
//       {children}
//     </SessionContext.Provider>
//   );
// }

// em andamento
