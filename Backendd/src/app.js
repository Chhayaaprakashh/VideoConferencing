import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import crypto from "crypto";

import { connectToSocket } from "./controllers/socketmanager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

// middleware
app.use(cors());
app.use(express.json());

// socket setup
const io = connectToSocket(server);

// port
app.set("port", process.env.PORT || 5000);
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

app.use("/api/v1/users", userRoutes)

// routes
app.get("/home", (req, res) => {
    return res.send("Hello World");
});

// start server
const start = async () => {
    try {
        const connectionDb = await mongoose.connect(
  "mongodb://chhayaprakash:Chhaya30@ac-yxj0x79-shard-00-00.9z3la6y.mongodb.net:27017,ac-yxj0x79-shard-00-01.9z3la6y.mongodb.net:27017,ac-yxj0x79-shard-00-02.9z3la6y.mongodb.net:27017/videoDB?ssl=true&replicaSet=atlas-jconq6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Chhaya"
);

        console.log(`MONGO CONNECTED DB HOST: ${connectionDb.connection.host}`);

        server.listen(app.get("port"), () => {
            console.log(`Server is running on port ${app.get("port")}`);
        });
    } catch (error) {
        console.error("Error starting server:", error.message);
    }
};

start();
