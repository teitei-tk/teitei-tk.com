workflow "New workflow" {
  on = "push"
  resolves = ["w9jds/firebase-action"]
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

action "build assets" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["run tslint"]
  args = "run build"
}

action "w9jds/firebase-action" {
  uses = "w9jds/firebase-action@master"
  needs = ["build assets"]
  secrets = ["FIREBASE_TOKEN"]
  args = "deploy"
}
