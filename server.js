const dotenv = require('dotenv');

// call env variables
dotenv.config();

//importing app and db
const app = require('./src/app');
const connectDB = require('./src/config/db');


const PORT = process.env.PORT || 5000;

//starting server
(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Failed to start the server", error);
    }
})();
