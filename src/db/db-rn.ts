import {
  enablePromise,
  openDatabase,
  ResultSet,
  SQLiteDatabase,
} from "react-native-sqlite-storage";
import { Column } from "./models";
import { IBadgesStorage } from "../types/utils";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: "mathm4k.db", location: "default" });
};

// ------------------------------- Create Table ---------------------------------------
export const createTable = async (
  db: SQLiteDatabase,
  tableName: string,
  columns: Column[]
) => {
  let colInfos = "";
  columns.forEach((col, index) => {
    colInfos += `${col.name} ${col.dataType}`;
    // default value
    if (typeof col.defaultValue !== "undefined") {
      colInfos += ` DEFAULT ${col.defaultValue}`;
    }
    // not null
    if (col.notNull) {
      colInfos += ` NOT NULL`;
    }
    // Primary key
    if (col.primaryKey) {
      colInfos += " PRIMARY KEY AUTOINCREMENT";
    }
    // Unique
    if (col.unique) {
      colInfos += " UNIQUE";
    }
    // add , if not last col
    if (index < columns.length - 1) {
      colInfos += ",";
    }
  });
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(${colInfos});`;
  console.log(query);
  await db.executeSql(query);
};
// ------------------------------- Delete Table ---------------------------------------

export const deleteTable = async (db: SQLiteDatabase, tableName: string) => {
  const query = `drop table ${tableName}`;
  console.log(query);
  await db.executeSql(query);
};

// ------------------------------- Post Handler: Parse to Objects ---------------------------------------
const postHandler = <T>(results: [ResultSet]) => {
  const transactions: T[] = [];
  results.forEach((result) => {
    for (let index = 0; index < result.rows.length; index++) {
      transactions.push(result.rows.item(index));
    }
  });
  return transactions;
};

export const createBadges = async (db: SQLiteDatabase, badgeId: number) => {
  const query = `
  INSERT INTO badges (badgeId)
  VALUES('${badgeId}');
`;
  return await db.executeSql(query);
};

export const getBadges = async (db: SQLiteDatabase) => {
  const query = `
    SELECT *
    FROM badges`;
  const results = await db.executeSql(query);
  return postHandler<IBadgesStorage>(results);
};
