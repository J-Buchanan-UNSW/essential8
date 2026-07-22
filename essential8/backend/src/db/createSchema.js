require("dotenv").config();

const db = require("./index");

async function createSchema() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS projects (
            id UUID PRIMARY KEY,
            owner TEXT NOT NULL,
            name TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'Draft',
            answers JSONB NOT NULL DEFAULT '{}'::jsonb,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
    `);

    await db.query(`
        CREATE INDEX IF NOT EXISTS idx_projects_owner
        ON projects(owner);
    `);

    console.log("Schema created!");

    process.exit();
}

createSchema().catch(err => {
    console.error(err);
    process.exit(1);
});