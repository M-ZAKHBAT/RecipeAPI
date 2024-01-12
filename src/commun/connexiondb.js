import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { url } = process.env;
export class ConnexionDB {
  constructor() {
    this.dbconnexion = null;
  }
  generateConnexion = async () => {
    try {
      this.dbconnexion = await mongoose.connect(url);
      console.log("DATA BASE connected");
    } catch (err) {
      console.error(err);
      this.dbconnexion = null;
    }
  };

  getConnecion() {
    if (!this.dbconnexion) this.generateConnexion();
    return this.dbconnexion;
  }
}
