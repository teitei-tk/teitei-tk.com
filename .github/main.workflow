workflow "Lint TypeScript code" {
  on = "push"
}

action "install packages" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  args = "install"
}

action "run tslint" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["install packages"]
  args = "run lint"
}