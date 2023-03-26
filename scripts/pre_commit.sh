#!/bin/sh
# Source: https://dev.to/akdevcraft/git-pre-hook-pre-commit-hook-with-npm-project-44p2

echo "Running linter, format and tests before commit"

git stash -q --keep-index

npm test -- --watchAll=false

status=$?

git stash pop -q

exit $status