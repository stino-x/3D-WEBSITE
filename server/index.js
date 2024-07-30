import express from 'express'
import cors from 'cors';
import * as dotenv from 'dotenv';
import dalleRoutes from './routes/dalle.routes.js'; // Import or declare the variable 'dalleRoutes'

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json({ limig: "60mb"}))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E"})
})

app.listen(8080, () => console.log(`Server has started on port 8080`))
