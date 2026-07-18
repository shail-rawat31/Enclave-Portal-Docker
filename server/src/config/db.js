import mongoose from "mongoose";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    logger.info(`MongoDB Connected : ${connection.connection.host}`);
    logger.info(`Database Name : ${connection.connection.name}`);

    const collections = await mongoose.connection.db.listCollections().toArray();

    console.log("Collections:");
    console.log(collections);

  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);
    console.error("CAUSE:", error.cause);
    process.exit(1);
  }
};

export default connectDB;