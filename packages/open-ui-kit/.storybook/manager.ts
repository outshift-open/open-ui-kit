import "./css/manager.css";

console.log(
  process.env.CI_COMMIT_SHORT_SHA &&
    process.env.CI_COMMIT_SHORT_SHA !== "undefined"
    ? `The currently deployed commit is: ${process.env.CI_COMMIT_SHORT_SHA}`
    : "You are running locally 🚀",
);
