workflow "New workflow" {
  on = "push"
  resolves = ["w9jds/firebase-action"]
}

action "lint command" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "run lint"
}

action "build assets" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["lint command"]
  runs = "run build"
}

action "w9jds/firebase-action" {
  uses = "w9jds/firebase-action@master"
  needs = ["build assets"]
  secrets = ["FIREBASE_TOKEN"]
  runs = "deploy"
}
