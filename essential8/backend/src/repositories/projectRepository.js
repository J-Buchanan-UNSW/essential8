const db = require("../db");

async function createProject(project) {
    const result = await db.query(
        `
        INSERT INTO projects (
            id,
            owner,
            name,
            status,
            answers,
            created_at,
            updated_at
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING *;
        `,
        [
            project.id,
            project.owner,
            project.name,
            project.status,
            JSON.stringify(project.answers),
            project.createdAt,
            project.updatedAt,
        ]
    );

    return mapProject(result.rows[0]);
}

async function getProjectsByOwner(owner) {
    const result = await db.query(
        `
        SELECT *
        FROM projects
        WHERE owner = $1
        ORDER BY updated_at DESC
        `,
        [owner]
    );

    return result.rows.map(mapProject);
}

async function getProjectById(id, owner) {
    const result = await db.query(
        `
        SELECT *
        FROM projects
        WHERE id = $1
        AND owner = $2
        `,
        [id, owner]
    );

    if (result.rows.length === 0) {
        return null;
    }

    return mapProject(result.rows[0]);
}

function mapProject(row) {
    return {
        id: row.id,
        owner: row.owner,
        name: row.name,
        status: row.status,
        answers: row.answers,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
    };
}

async function updateProject(project) {
    const result = await db.query(
        `
        UPDATE projects
        SET
            name = $1,
            status = $2,
            answers = $3,
            updated_at = NOW()
        WHERE
            id = $4
            AND owner = $5
        RETURNING *;
        `,
        [
            project.name,
            project.status,
            JSON.stringify(project.answers),
            project.id,
            project.owner,
        ]
    );

    if (result.rows.length === 0) {
        return null;
    }

    return mapProject(result.rows[0]);
}



module.exports = {
    createProject,
    getProjectsByOwner, 
    getProjectById, 
    updateProject
};