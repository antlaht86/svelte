const {
    hasRequiredDeps,
    hasRequiredFiles,
    getYarnOrNPMCommand,
    scanScripts
  } = require("./utils/jsdetect");
  module.exports = function() {
    // REQUIRED FILES
    if (!hasRequiredFiles(["package.json"])) return false;
    // REQUIRED DEPS
    if (!hasRequiredDeps(["svelte", "sirv-cli"])) return false;
    // although sirv-cli isn't strictly required...
    // it is part of the assumptions we make for this detector
    /** everything below now assumes that we are within Svelte's default template */
    const possibleArgsArrs = scanScripts({
      preferredScriptsArr: ["dev"], // we can add more if common practice requires it
      preferredCommand: "sirv public --dev"
    });
    return {
      type: "svelte-sirv-cli",
      command: getYarnOrNPMCommand(),
      port: 8888,
      proxyPort: 5000, // sirv's assumed proxyPort
      env: { ...process.env },
      possibleArgsArrs,
      urlRegexp: new RegExp(`(http://)([^:]+:)${5000}(/)?`, "g"),
      dist: "public" // where we might place a _redirect file
    };
  };
