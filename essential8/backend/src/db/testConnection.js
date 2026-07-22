const db = require("./index");

async function testConnection() {
    try {
        const result = await db.query("SELECT NOW()");

        console.log("Connected!");

        console.log(result.rows[0]);
    } catch (err) {
        console.error(err);
    } finally {
        process.exit();
    }
}

testConnection();