const RULES_MACRO_SETTINGS = [
    {
        id: "trusted-locations",
        description: "Macros only run from trusted locations",
        passes: a => a.macroRun === "trusted" || a.macroRun === "disabled",
    },
    {
        id: "block-internet",
        description: "Macros blocked from accessing the internet",
        passes: a => a.blockInternet === "yes",
    },
    {
        id: "prevent-changes",
        description: "Users cannot change macro security settings",
        passes: a => a.preventChanges === "yes",
    },
    {
        id: "signed-macros",
        description: "Only signed macros allowed",
        passes: a => a.signedMacros === "yes",
    },
];

function evaluateMacroSettings(answers) {
    const completed = [];
    const remaining = [];

    for (const rule of RULES_MACRO_SETTINGS) {
        (rule.passes(answers) ? completed : remaining).push(rule);
    }

    return {
        id: "macroSettings",
        title: "Macro Security",
        level: completed.length,
        completed,
        remaining,
    };
}

module.exports = {
    evaluateMacroSettings
}