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
app.set("port", process.env.PORT || 3000);
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
            "mongodb+srv://bhavya8007_db_user:Bhavya8007@cluster0.39sobxo.mongodb.net/?retryWrites=true&w=majority"
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
