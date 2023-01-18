# Overview
ChronoMap is an isochrone mapping tool made with Mapbox GL JS, the Mapbox Isochrone API, and MUI, with testing done using Cypress.

<img width="1440" alt="Screen Shot 2023-01-17 at 5 08 47 AM" src="https://user-images.githubusercontent.com/110298370/212870031-ee46de25-32ae-4469-8bc8-c8084e910766.png">

# Using the App
## Installation Instructions
1. Clone down [this repository]('https://github.com/jwasmer/ChronoMap')
1. Run `npm install` in your terminal
1. Run `npm start` in your terminal
1. `control + c` in terminal to quit

Deployed app coming soon!

## About
This app allows users to search for an address and be shown a isochrone. An isochrone is a map visualization that represents travel time instead of travel distance. By default, this map displays an isochrone showing the distance that can be travelled by car in one hour, but you can change those settings by using the selections to the right of the search bar.

After you've confirmed your travel time and method of transportation (or are fine with the defaults!), go ahead and type your search into the search bar and click the magnifying glass icon. You'll be shown the exact distance you can travel from the address you've searched in a certain amount of time.

Once you have an isochrone, you can save it to your favorites by clicking on the heart icon in the search bar. This will save the isochrone as you see it on the map, so if you want to update the travel time or type of transportation you're using in the search, you'll need to make sure to submit the search again.

You can click the "View Saved" button in the top right to view your saved isochrones. From here, feel free to adjust the information used to generate that isochrone. If you have an isochrone showing travel time by car, for example, you can change it to show travel time by cycling or walking instead.

![Guide](https://user-images.githubusercontent.com/110298370/213281788-e31d41ed-8d89-4e45-9717-95f1f430f9d1.jpg)

## Project Goals
 * Build an interactive map-based app
 * Gain experience using geoJSON data
 * Broaden my experience
 * Build something fun

 ## Features

## Technologies Used
* Mapbox GL JS
* MUI
* React
* Cypress
* Netlify deploy
* GeoJSON objects

## Wins
* Built an interactive app that can query using both coordinates and search strings
* Save and manipulate geoJSON data
* Update map with saved geoJSON isochrones

## Future Extensions
* User auth
* Heatmap!



