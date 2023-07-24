import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://phlima3:123@api-node-express.e95l9rm.mongodb.net/projeto-node"
);

let db = mongoose.connection;

export default db;
