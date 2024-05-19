# if-star-wars

Project to demonstrate the use of [react-if](https://github.com/romac/react-if) library to get data from the [SWAPI](https://swapi.dev/) API with React and Vite.
The project uses google login with the `@react-oauth/google` package to authenticate the user and get the data from the API.

## setting up the project
- clone the repository
- Set up a google client id and secret as described in this tutorial [here](https://muhammedsahad.medium.com/react-js-a-step-by-step-guide-to-google-authentication-926d0d85edbd)
- create a `.env` file in the root of the project
- make sure to exclude the `.env` file from git by adding it to the `.gitignore` file
- set up your own google client id in the `.env` file as follows
```env 
VITE_REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```
## running the project
Start the project with:
`npm run dev`
