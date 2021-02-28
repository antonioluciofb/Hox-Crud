const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

server.use(middlewares);

server.get("/login", (req, res, next) => {
  if (req.query.user === "antonio" && req.query.password === "123123") {
    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 32400, // 9Hours
    });
    return res.json({ auth: true, token: token });
  }
  res.status(400).json({ message: "Login inválido!" });
});

// Use default router
server.use(router);
server.listen(3333, () => {
  console.log("JSON Server is running");
});
