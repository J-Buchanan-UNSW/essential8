const RULES_USER_HARDENING = [
    {
        id: "browser-features",
        description: "Secure browser features enabled",
        passes: a => a.browserFeatures === "yes",
    },
    {
        id: "browser-security",
        description: "Browser security settings fully enforced",
        passes: a => a.browserSecurity === "yes",
    },
    {
        id: "approved-extensions",
        description: "Only approved browser extensions allowed",
        passes: a => a.extensions === "approved",
    },
    {
        id: "pdf-security",
        description: "PDF security settings fully enforced",
        passes: a => a.pdfSecurity === "yes",
    },
];

function evaluateUserHardening(answers) {
    const completed = [];
    const remaining = [];

    for (const rule of RULES_USER_HARDENING) {
        (rule.passes(answers) ? completed : remaining).push(rule);
    }

    return {
        id: "userHardening",
        title: "User Hardening",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluateUserHardening
}
