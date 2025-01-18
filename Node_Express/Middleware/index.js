import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express();

//Built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Third party middleware
app.use(cors());
app.use(morgan("tiny"));

//Custom middleware
app.use((req, res, next) => {
    console.log(`Request received at ${new Date().toISOString()}`);
    next();
});

//Routes
app.get("/", (req, res) => {
    res.send('Welcome to the express.js app!');
});

app.listen(3000, () => console.log('Server running on https://localhost:3000'));
    