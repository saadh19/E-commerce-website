const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "saadh1919",
  database: "userdb"
});

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO users(`name`,`email`,`password`) VALUES(?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) 
      return res.status(500).json({ error: err });
    res.json(data);
  });
});

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE `email`=? AND `password`=?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) 
      return res.status(500).json({ error: err });
    if (data.length > 0) 
      return res.json({ status: "Success", user: data[0] });
    res.json({ status: "Failed" });
  });
});


app.post('/address', async (req, res) => {
  const { userId, full_name, phone_number, address, cartItems, grandTotal } = req.body;

  if (!cartItems || cartItems.length === 0)
    return res.status(400).json({ error: "Cart is empty" });

  try {
    const insertPromises = cartItems.map(item => {
      return new Promise((resolve, reject) => {

        const sql = `
          INSERT INTO orders 
          (userId, full_name, phone_number, address, product_title, product_image, quantity, total_price, grand_total)
          VALUES (?,?,?,?,?,?,?,?,?)
        `;

        const values = [
          userId,  
          full_name,                 
          phone_number,
          address,
          item.name,
          item.image,
          item.quantity,
          item.price * item.quantity,
          grandTotal
        ];

        db.query(sql, values, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      });
    });

    await Promise.all(insertPromises);

    res.json({ status: "Success", message: "Order saved successfully" });

  } catch (err) {
    console.log("MySQL ERROR:", err);
    res.status(500).json({ error: "Failed to save order" });
  }
});


app.get("/orders/:userId", (req, res) => {
  const userId = req.params.userId;

  const sql = `
    SELECT * FROM orders
    WHERE userId = ?
    ORDER BY created_at DESC
  `;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.log("MySQL Error:", err);
      return res.status(500).json({ error: "Failed to fetch orders" });
    }
    res.json(result);
  });
});

app.post("/api/reviews", (req, res) => {
  const { productId, name, text } = req.body;

  const sql =
    "INSERT INTO reviews (`productId`, `name`, `text`) VALUES (?, ?, ?)";
  db.query(sql, [productId, name, text], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      id: result.insertId,
      productId,
      name,
      text
    });
  });
});

app.get("/api/reviews", (req, res) => {
  const productId = req.query.productId;

  const sql = "SELECT * FROM reviews WHERE productId = ? ORDER BY id DESC";
  db.query(sql, [productId], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
