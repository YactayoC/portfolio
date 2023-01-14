import type { Connection } from 'mongoose';

type MongooseType = typeof import('mongoose');

export interface IDBConnectionCache {
  conn: Connection | MongooseType | null;
  promise: Promise<Connection | MongooseType> | null;
};
