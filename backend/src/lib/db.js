import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    console.log("🔗 Attempting MongoDB connection...");
    console.log("Database URI:", ENV.DB_URI ? "✅ Found" : "❌ Missing");
    
    if (!ENV.DB_URI) {
      throw new Error("DB_URI is not defined in environment variables");
    }
    
    await mongoose.connect(ENV.DB_URI, {
      serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
      socketTimeoutMS: 45000,
    });
    
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    console.error("Full error:", error);
    process.exit(1);
  }
};
// import mongoose from "mongoose";
// import { ENV } from "./env.js";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(ENV.DB_URI);
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     process.exit(1);
//   }
// };