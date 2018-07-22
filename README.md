# React Native Pokedex Demo
I built this small-scale application using React Native as a means of teaching myself how to work with it and subsequently teach the fundementals of the technology in an hour long lecture to a class of web development students.

In this application, the user can browse from a list of a pokemon pulled from the[Pokemon API](pokeapi.co). Then they can touch a specific pokemon and they will be routed to a reusable component that displays the pokemon's stats and an 8-bit image. There are also navigation tabs at the bottom of the screen that allow the user to click between different views. This was achieved using the React-navigation dependency and the contact page and settings menus are leaning on the React-native-elements package. Settings and contacts do not actually work -- the focus of this demo was to teach students was as follows:

1. How to install create-react-native-app and start a project
2. How to use an emulator or your phone to develop with hot reloading
3. How to style pages using the React Native StyleSheet component
4. How View, Text, TouchableOpacity, and other Native components differ from developing in React
5. How to use React-Navigation, a React Native routing solution
6. Using the react-native-elements package to create a nicely designed layout and what to be aware of vs. developing for a normal website

## To Run
### Install Dependecies: `npm i`

## Running the server: `node server/` OR `nodemon server/`

### If you have an emulator installed on your computer:
### Mac: `npm run ios`
### Android: `npm run android`

### If you want to run it on your phone:
1. Download the expo application on your phone from google play or the apple app store
2. `npm run start` in your terminal 
3. scan the QR code in your terminal with the expo application on your phone



## Screenshots

![[Landing View](https://i.imgur.com/sUcmmU3.png)

![Detailed Pokemon View](https://i.imgur.com/dnqYUkb.png)

![Detailed Pokemon View 2](https://i.imgur.com/gdBUKqW.png)

![Settings](https://i.imgur.com/hbqvgIC.png)

![Contact](https://i.imgur.com/y0Y6e0J.png)



