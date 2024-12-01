/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      // url: 'postgresql://AI-Interview_owner:b8jMZOrFCmA5@ep-lucky-pond-a1f1ha95.ap-southeast-1.aws.neon.tech/AI-Interview?sslmode=require',
      url: 'postgresql://neondb_owner:41ShYCMKpXaA@ep-bitter-paper-a590ukgo.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };