const RULES_PATCH_OS = [
    {
        id: "patch-speed",
        description: "Operating systems patched within one month",
        passes: a => a.speed === "1m" || a.speed === "48h",
    },
    {
        id: "auto-updates",
        description: "Automatic OS updates enabled",
        passes: a => a.autoUpdates === "yes",
    },
    {
        id: "unsupported-removed",
        description: "Unsupported OS versions removed",
        passes: a => a.unsupported === "no",
    },
    {
        id: "monitoring",
        description: "Patch compliance is monitored",
        passes: a => a.monitoring === "yes",
    },
];

function evaluatePatchOS(answers) {
    const completed = [];
    const remaining = [];

    for (const rule of RULES_PATCH_OS) {
        (rule.passes(answers) ? completed : remaining).push(rule);
    }

    return {
        id: "patchOS",
        title: "Operating System Patching",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluatePatchOS
}
