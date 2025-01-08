import dotenv from 'dotenv';
import cors from 'cors';
import router from './back/src/routers/router.js'
import express from 'express';
import teamsRouter from './back/src/routers/teamsRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(teamsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${port}`);
});