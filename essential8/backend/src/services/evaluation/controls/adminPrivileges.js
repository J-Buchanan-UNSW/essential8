const RULES_ADMIN_PRIVILEGES = [
    {
        id: "admin-rights",
        description: "Administrator rights are limited",
        passes: a => a.adminRights === "no",
    },
    {
        id: "separate-accounts",
        description: "Admins use separate privileged accounts",
        passes: a => a.separateAccounts === "yes",
    },
    {
        id: "restricted-usage",
        description: "Admin accounts used only when necessary",
        passes: a => a.adminUsage === "always",
    },
    {
        id: "review-process",
        description: "Admin privileges reviewed regularly",
        passes: a => a.reviewProcess === "yes",
    },
];

function evaluateAdminPrivileges(answers) {
    const completed = [];
    const remaining = [];

    for (const rule of RULES_ADMIN_PRIVILEGES) {
        (rule.passes(answers) ? completed : remaining).push(rule);
    }

    return {
        id: "adminPrivileges",
        title: "Administrator Privileges",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluateAdminPrivileges
}
