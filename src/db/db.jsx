import Dexie from "dexie";

export const db = new Dexie("database");
db.version(1).stores({
  user: "id++, name,  password, email",
});
