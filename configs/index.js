// configs/index.js

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; // Assuming your schema is exported from this file

// Correctly referencing the environment variable for the database URL
const sql = neon(import.meta.env.VITE_DRIZZLE_DATABASE_URL);

// Initializing the database with schema
export const db = drizzle(sql, { schema });
