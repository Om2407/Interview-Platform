import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      // ✅ Fixed: req.auth is an object, not a function
      const clerkId = req.auth.userId;
      
      console.log("🔐 Clerk ID:", clerkId); // Debug log

      if (!clerkId) {
        console.log("❌ No Clerk ID found in request");
        return res.status(401).json({ message: "Unauthorized - invalid token" });
      }

      // Find user in db by clerk ID
      const user = await User.findOne({ clerkId });

      if (!user) {
        console.log("❌ User not found in DB with clerkId:", clerkId);
        return res.status(404).json({ message: "User not found" });
      }

      console.log("✅ User authenticated:", user.email || user.username);

      // Attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("❌ Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
// import { requireAuth } from "@clerk/express";
// import User from "../models/User.js";

// export const protectRoute = [
//   requireAuth(),
//   async (req, res, next) => {
//     try {
//       const clerkId = req.auth().userId;

//       if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

//       // find user in db by clerk ID
//       const user = await User.findOne({ clerkId });

//       if (!user) return res.status(404).json({ message: "User not found" });

//       // attach user to req
//       req.user = user;

//       next();
//     } catch (error) {
//       console.error("Error in protectRoute middleware", error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   },
// ];