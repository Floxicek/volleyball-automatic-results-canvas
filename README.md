# Target of the project

To display Google Sheet data from a volleyball match of our private tournament.

## How does it work?

One part (api-server) hosts a server that serves as a Google API, allowing us to access Google Sheets data. I use that data to show who won.

# Start

## api-server

`npm install`
`node server.js`
(runs on localhost:3000)

## project-autoresults

`npm install`
`npm start` (wanna host, use `npm start -- --host`)
(runs on localhost:9000)

# Milestones

- [x] api-change
- [ ] move id and range into config
- [ ] design UI of the final board
- [ ] ? add cache to the API server
