// import dotenv from "dotenv";

// dotenv.config({ quiet: true });

// export const ENV = {
//   PORT: process.env.PORT || 3000,
//   DB_URI: process.env.DB_URI, // Changed from DB_URL to DB_URI
//   NODE_ENV: process.env.NODE_ENV || "development",
//   CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
//   INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
//   INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
//   STREAM_API_KEY: process.env.STREAM_API_KEY,
//   STREAM_SECRET_KEY: process.env.STREAM_SECRET_KEY, // Changed from STREAM_API_SECRET to STREAM_SECRET_KEY
//   CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
//   CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
// };

// // Optional: Validate required environment variables
// const requiredEnvVars = [
//   "DB_URI",
//   "STREAM_API_KEY",
//   "STREAM_SECRET_KEY",
//   "CLERK_SECRET_KEY"
// ];

// for (const envVar of requiredEnvVars) {
//   if (!ENV[envVar]) {
//     console.error(`❌ Missing required environment variable: ${envVar}`);
//     process.exit(1);
//   }
// }
import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const ENV = {
  PORT: process.env.PORT || 5000,
  DB_URI: process.env.DB_URI,
  NODE_ENV: process.env.NODE_ENV || "development",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET, // Make sure this matches .env
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
};