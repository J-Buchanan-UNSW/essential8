exports.up = (pgm) => {
    pgm.createTable("projects", {

        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },

        owner: {
            type: "text",
            notNull: true,
        },

        name: {
            type: "text",
            notNull: true,
        },

        status: {
            type: "text",
            notNull: true,
            default: "Draft",
        },

        answers: {
            type: "jsonb",
            notNull: true,
            default: pgm.func("'{}'::jsonb"),
        },

        created_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },

        updated_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("projects");
};