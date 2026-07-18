function evaluateProject(project) {

    const { evaluateAdminPrivileges } = require("./controls/adminPrivileges");
    const { evaluateAppControl } = require("./controls/appControl");
    const { evaluateBackups } = require("./controls/backups");
    const { evaluateMacroSettings } = require("./controls/macroSettings");
    const { evaluateMfa } = require("./controls/mfa");
    const { evaluatePatchApplications } = require("./controls/patchApplications");
    const { evaluatePatchOS } = require("./controls/patchOs");
    const { evaluateUserHardening } = require("./controls/userHardening");

    const controls = [
        evaluateAdminPrivileges(project.answers.adminPrivileges), 
        evaluateAppControl(project.answers.appControl),
        evaluateBackups(project.answers.backups),
        evaluateMacroSettings(project.answers.macroSettings),
        evaluateMfa(project.answers.mfa),
        evaluatePatchApplications(project.answers.patchApplications),
        evaluatePatchOS(project.answers.patchOS),
        evaluateUserHardening(project.answers.userHardening),
    ]

    const overallLevel =
        Math.min(...controls.map(c => c.level));

    return {
        projectId: project.id,
        projectName: project.name,
        organisation: project.answers.organisation,
        overallLevel,
        controls,
    };
}


module.exports = {
    evaluateProject
}