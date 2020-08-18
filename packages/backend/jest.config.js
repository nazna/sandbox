module.exports = {
  moduleFileExtensions: ["ts", "js", "json"],
  rootDir: "src",
  testEnvironment: "node",
  testRegex: ".test.ts$",
  transform: {
    "^.+\\.(ts|js)$": "ts-jest",
  },
};
