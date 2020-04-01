const path = require("path");
const sass = require("sass");
const sassTrue = require("sass-true");

sassTrue.runSass(
  { file: path.resolve(__dirname, "scss/test.scss") },
  { sass, describe, it }
);
