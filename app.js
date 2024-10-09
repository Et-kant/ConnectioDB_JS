import mysql from "mysql2/promise";

async function main() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "users",
  });

  console.log("Conectado a la DB");

  try {
    const [rows] = await connection.execute("SELECT * FROM Clientes");
    console.log("Consulta: " + rows);

    rows.forEach(row => {
        console.log(row);
    });

  } catch (error) {
    console.error("No se pudo" + error);
  } finally {
    await connection.end();
  }
}

main();
