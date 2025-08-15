import express, {json, Request, Response} from 'express'

const app = express();
const port = process.env.PORT

app.use(json())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({player: "Lionel Messi"})
})

app.listen(port, () => {
    console.log(`Servidor running at port: ${port}`);
})

