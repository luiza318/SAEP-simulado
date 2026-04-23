require("dotenv").config();
const express = require("express");
const pool = require("../config/db");

const app = express();
app.use(express.json());

//  FUNÇÕES (repo)
async function findById(id) {
  const [rows] = await db.query(
    "SELECT id, name, email FROM users WHERE id = ?",
    [id]
  );
  return rows[0];
}

async function userUpdate(id, name, email, password) {
  await db.query(
    "UPDATE users SET name=?, email=?, password=? WHERE id=?",
    [name, email, password, id]
  );
}

async function userDelete(id) {
  await db.query("DELETE FROM users WHERE id=?", [id]);
}

// --- ROTAS ---

app.get("/user", async (req, res) => {
  const user = await findById(req.params);
  res.json(user);
});

app.put("/user/:id", async (req, res) => {
  const { name, email, password } = req.body;

  await userUpdate(req.params.id, name, email, password);

  const user = await findById(req.params.id);
  res.json(user);
});

app.delete("/user/:id", async (req, res) => {
  await userDelete(req.params.id);
  res.json({ message: "Usuário deletado" });
});

// servidor
app.listen(3020, () => console.log("Servidor rodando"));