const RULES = [
    {
        id: "admin-mfa",
        description: "Administrators require MFA",
        passes: answers => answers.adminMfa === "all",
    },
    {
        id: "user-mfa",
        description: "Users require MFA",
        passes: answers => answers.usersMfa === "all",
    },
    {
        id: "no-exemptions",
        description: "No unnecessary MFA exemptions",
        passes: answers => answers.exemptMfa === "none",
    },
];

function evaluateMfa(answers) {

    const completed = [];
    const remaining = [];

    for (const rule of RULES) {

        if (rule.passes(answers)) {
            completed.push(rule.description);
        } else {
            remaining.push(rule.description);
        }
    }

    return {
        id: "mfa",
        title: "Multi-Factor Authentication",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluateMfa
}