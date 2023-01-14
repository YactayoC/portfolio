import mongoose, { ConnectOptions } from 'mongoose';

import { IDBConnectionCache } from '@/interfaces';

const MONGODB_URI = process.env.MONGO_URI;
const errorMessage = 'Please define the MONGODB_URL environment variable';

mongoose.set('strictQuery', true);

declare global {
  var mongoose: IDBConnectionCache;
}

let cached: IDBConnectionCache = global.mongoose!;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error(errorMessage);
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
