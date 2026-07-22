const RULES_PATCH_APPLICATIONS = [
    {
        id: "patch-speed",
        description: "Applications patched within one month",
        passes: a => a.speed === "1m" || a.speed === "48h",
    },
    {
        id: "auto-updates",
        description: "Automatic updates enabled for all applications",
        passes: a => a.autoUpdates === "all",
    },
    {
        id: "update-process",
        description: "Formal process exists to check for application updates",
        passes: a => a.checkProcess === "yes",
    },
    {
        id: "unsupported-removed",
        description: "Unsupported applications are removed or replaced",
        passes: a => a.unsupported === "no",
    },
];

function evaluatePatchApplications(answers) {
    const completed = [];
    const remaining = [];

    for (const rule of RULES_PATCH_APPLICATIONS) {
        (rule.passes(answers) ? completed : remaining).push(rule);
    }

    return {
        id: "patchApplications",
        title: "Application Patching",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluatePatchApplications
}