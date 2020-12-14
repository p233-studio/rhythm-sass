const path = require("path");
const sassTrue = require("sass-true");

sassTrue.runSass({ file: path.resolve(__dirname, "core.test.scss") }, { describe, it });
sassTrue.runSass({ file: path.resolve(__dirname, "rhythm.test.scss") }, { describe, it });
