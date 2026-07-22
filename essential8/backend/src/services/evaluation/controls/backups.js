const RULES_BACKUPS = [
    {
        id: "frequency",
        description: "Backups performed daily",
        passes: a => a.frequency === "daily" ||  a.frequency === "multiDaily",
    },
    {
        id: "separate-storage",
        description: "Backups stored separately from production systems",
        passes: a => a.separateStorage === "yes",
    },
    {
        id: "testing",
        description: "Backups are regularly tested",
        passes: a => a.testing === "yes",
    },
    {
        id: "restoration",
        description: "Restoration process validated",
        passes: a => a.restoration === "yes",
    },
    {
        id: "ransomware-protection",
        description: "Backups protected against ransomware",
        passes: a => a.ransomwareProtection === "yes",
    },
];

function evaluateBackups(answers) {
    const completed = [];
    const remaining = [];

    for (const rule of RULES_BACKUPS) {
        (rule.passes(answers) ? completed : remaining).push(rule);
    }

    return {
        id: "backups",
        title: "Backup & Recovery",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluateBackups
}