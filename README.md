INTRODUCTION

This repository contains the following tests:
Onboarding - goes through the onboarding process.
Sign Up new user - goes through the sign up process using invalid email, invalid password and valid email and password.
Sign In - goes through the sign in process with an existing user account then it logs out.


REQUIREMENTS

This project requires the following modules:
Node.js
Cypress
cypress-iframe plugin


INSTALLATION

Create package.json file
- run npm init

Install Node.js - https://nodejs.org/en/download/
Verify the installation of Node.js by runing node -v command.

Install Cypress
- run  npm install cypress --save-dev

Install cypress-iframe plugin
- run npm install -D cypress-iframe

How to run test
After cloning the repo locally, go to the project’s folder using the terminal. Run this command: 
npx cypress run - to run headless
npx cypress open - to run through UI
(for MAC, replace npx with yarn)
