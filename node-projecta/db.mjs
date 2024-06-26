import pgPromise from "pg-promise";

export const db = pgPromise()("postgres://postgres:admin@localhost:5432/utentifs25")