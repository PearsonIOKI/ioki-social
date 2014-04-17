# How to contribute

If you would like to contribute to the project please follow the guidelines set out below. Keep in mind that they are not here to make your contributions a chore, but to make our job of going through hundreds of issues and pull requests easier.

## Pull Request

Pull Requests for new features, bugs or translations are always appreciated. However, please, follow the guidelines below in order to save as much time as possible for the maintainer.

- __Make your commit message as descriptive as possible.__ Include as much information as you can. Explain anything that the file diffs themselves don’t make obvious.
- __Document your pull request__. Explain your fix, link to the relevant issue. A pull request without any comment will get closed.
- __Consolidate multiple commits into a single commit when you rebase.__ If you’ve got several commits in your local repository and all of them refer to a single change, try transforming them into a single, clean, descriptive commit when using git-rebase. When you do, good karma is yours.
- __Make sure the target of your pull request is the relevant dev branch__. Most of bugfix or new feature should go to the `dev` branch. Translation work should go into `translation` branch.
- __Include only commits fixing a specific issue__. If your pull request has unrelated commit, it will get closed.

## Report a bug

Before reporting any issues, please use the search tools to see if someone filed the same bug before.

When creating a new issue make sure to include the following:
- Version of IOKI Social used. Are you running from source? Which revision? Are you using a released build? Which release?
- Your environment. What is your operating system? 32 or 64 bits?
- Step to reproduce. even if the step only describes opening the of the app, __include it!__ include both the actual and the expected results.
- Messages you get when running from console
- A screenshot of any visual bug.

Here is what a great bug report would look like:
```
Can not log in

Version: Release 0.2.7 for Windows
OS: Windows 7
How to reproduce:
 - Open Application
 - Click on the `login`
 - enter valid username and password
 - Press enter or click log-in button
Actual result:
 - Blank page
Expected result:
 - Reload logged-in page

Console output:
[6239:0317/031639:INFO:CONSOLE(0)] "event.returnValue is deprecated. Please use the standard event.preventDefault() instead.", source:  (0)
...
```

## Feature suggestions

Feature suggestions should go to the mailing list. Please visit <https://groups.google.com/d/forum/iokisocial> or send message on <iokisocial@googlegroups.com>