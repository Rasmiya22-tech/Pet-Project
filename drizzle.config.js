/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:PzJrBW6ZHuq2@ep-still-sea-a5y2mxcc.us-east-2.aws.neon.tech/car-marketplace?sslmode=require',
    }
  };