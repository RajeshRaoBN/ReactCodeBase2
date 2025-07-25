import express, { Request, Response } from express;

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Typescript backend")
})

app.listen(port, () => console.log(`Server running on ${port}`))