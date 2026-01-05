import { useUser } from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";
import { useEffect } from "react"; // ✅ ADD THIS
import axiosInstance from "./lib/axios"; // ✅ ADD THIS
import HomePage from "./pages/HomePage";

import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";
import SessionPage from "./pages/SessionPage";

function App() {
  const { isSignedIn, isLoaded, user } = useUser(); // ✅ ADD 'user' here

  // ✅ ADD THIS ENTIRE useEffect BLOCK
  useEffect(() => {
    const syncUser = async () => {
      if (isLoaded && user) {
        try {
          console.log("🔄 Syncing user with backend...");
          
          await axiosInstance.post("/auth/sync-user", {
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: user.fullName || user.firstName || user.username,
          });
          
          console.log("✅ User synced successfully!");
        } catch (error) {
          console.error("❌ Error syncing user:", error);
        }
      }
    };

    syncUser();
  }, [isLoaded, user]);

  // this will get rid of the flickering effect
  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
// import { useUser } from "@clerk/clerk-react";
// import { Navigate, Route, Routes } from "react-router";
// import HomePage from "./pages/HomePage";

// import { Toaster } from "react-hot-toast";
// import DashboardPage from "./pages/DashboardPage";
// import ProblemPage from "./pages/ProblemPage";
// import ProblemsPage from "./pages/ProblemsPage";
// import SessionPage from "./pages/SessionPage";

// function App() {
//   const { isSignedIn, isLoaded } = useUser();

//   // this will get rid of the flickering effect
//   if (!isLoaded) return null;

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
//         <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

//         <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
//         <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
//         <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
//       </Routes>

//       <Toaster toastOptions={{ duration: 3000 }} />
//     </>
//   );
// }

// export default App;