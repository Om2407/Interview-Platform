import express from "express";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import User from "./models/User.js"; // ✅ ADD THIS LINE

console.log("🚀 Initializing server...");
console.log("Environment:", ENV.NODE_ENV);
console.log("Port:", ENV.PORT);

const app = express();

const __dirname = path.resolve();

// middleware
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// ✅ ADD THIS ENTIRE BLOCK - User sync route
app.post("/api/auth/sync-user", async (req, res) => {
  try {
    const { clerkId, email, name } = req.body;
    console.log("🔄 Syncing user:", { clerkId, email, name });

    // Check if user already exists
    let user = await User.findOne({ clerkId });
    
    if (user) {
      console.log("✅ User already exists:", user.email);
      return res.status(200).json({ message: "User exists", user });
    }

    // Create new user
    user = await User.create({
      clerkId,
      email,
      name: name || email.split("@")[0],
      profileImage: "",
    });

    console.log("✅ New user created in DB:", user.email);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("❌ Error syncing user:", error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    console.log("📡 Connecting to database...");
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("✅ Server is running on port:", ENV.PORT);
      console.log(`🌐 Health check: http://localhost:${ENV.PORT}/health`);
    });
  } catch (error) {
    console.error("💥 Error starting the server", error);
    process.exit(1);
  }
};

startServer();
// import express from "express";
// import path from "path";
// import cors from "cors";
// import { serve } from "inngest/express";
// import { clerkMiddleware } from "@clerk/express";

// import { ENV } from "./lib/env.js";
// import { connectDB } from "./lib/db.js";
// import { inngest, functions } from "./lib/inngest.js";

// import chatRoutes from "./routes/chatRoutes.js";
// import sessionRoutes from "./routes/sessionRoute.js";

// console.log("🚀 Initializing server...");
// console.log("Environment:", ENV.NODE_ENV);
// console.log("Port:", ENV.PORT);

// const app = express();

// const __dirname = path.resolve();

// // middleware
// app.use(express.json());
// // credentials:true meaning?? => server allows a browser to include cookies on request
// app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
// app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

// app.use("/api/inngest", serve({ client: inngest, functions }));
// app.use("/api/chat", chatRoutes);
// app.use("/api/sessions", sessionRoutes);

// app.get("/health", (req, res) => {
//   res.status(200).json({ msg: "api is up and running" });
// });

// // make our app ready for deployment
// if (ENV.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("/*", (req, res) => { // Fixed: /* not /{*any}
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

// const startServer = async () => {
//   try {
//     console.log("📡 Connecting to database...");
//     await connectDB();
//     app.listen(ENV.PORT, () => {
//       console.log("✅ Server is running on port:", ENV.PORT);
//       console.log(`🌐 Health check: http://localhost:${ENV.PORT}/health`);
//     });
//   } catch (error) {
//     console.error("💥 Error starting the server", error);
//     process.exit(1);
//   }
// };

// startServer();
// import express from "express";
// import path from "path";
// import cors from "cors";
// import { serve } from "inngest/express";
// import { clerkMiddleware } from "@clerk/express";

// import { ENV } from "./lib/env.js";
// import { connectDB } from "./lib/db.js";
// import { inngest, functions } from "./lib/inngest.js";

// import chatRoutes from "./routes/chatRoutes.js";
// import sessionRoutes from "./routes/sessionRoute.js";

// const app = express();

// const __dirname = path.resolve();

// // middleware
// app.use(express.json());
// // credentials:true meaning?? => server allows a browser to include cookies on request
// app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
// app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

// app.use("/api/inngest", serve({ client: inngest, functions }));
// app.use("/api/chat", chatRoutes);
// app.use("/api/sessions", sessionRoutes);

// app.get("/health", (req, res) => {
//   res.status(200).json({ msg: "api is up and running" });
// });

// // make our app ready for deployment
// if (ENV.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("/{*any}", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
//   } catch (error) {
//     console.error("💥 Error starting the server", error);
//   }
// };

// startServer();