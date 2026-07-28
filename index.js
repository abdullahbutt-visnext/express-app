import e from "express";
import morgan from "morgan";
const app = e();
const port = 3000;

//morgan to log requests
app.use(morgan("dev"))

app.get('/', (req, res) => {
    console.dir(req)
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});