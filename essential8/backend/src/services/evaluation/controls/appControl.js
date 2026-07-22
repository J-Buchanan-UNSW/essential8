const RULES_APP_CONTROL = [
    {
        id: "install-approved",
        description: "Only approved applications can be installed",
        passes: a => a.install === "none",
    },
    {
        id: "approved-list",
        description: "Approved applications list is maintained",
        passes: a => a.approvedApp === "yes",
    },
    {
        id: "block-unapproved",
        description: "Unapproved applications are blocked",
        passes: a => a.blocked === "yes",
    },
    {
        id: "managed-control",
        description: "Application control enforced through management tools",
        passes: a => a.control === "managed",
    },
];

function evaluateAppControl(answers) {
    const completed = [];
    const remaining = [];

    for (const rule of RULES_APP_CONTROL) {
        (rule.passes(answers) ? completed : remaining).push(rule);
    }

    return {
        id: "appControl",
        title: "Application Control",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluateAppControl
}