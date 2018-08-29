## Neighborhood Map with React | Udacity FEND Nanodegree | 2018

# About the Project

It's a final SPA project featuring a map of a chosen neighborhood. The goal of this project was to create a functional project with a react mindset, including highlighted locations, third-party data about those locations and various ways to browse the content.

To achieve that I decided to create **_Neighborhood Map - Parks of New York_**

# How to start ?

* Clone this [repository](https://github.com/soyaposeidon/FEND-Neighborhood-MapApp-React.git)
* type **_npm install_** in your favorite console
* run localhost:3000 server with **_npm start_**
* for production build enter **_npm run build_**

# Features

- [x] Google Maps API
- [x] Foursquare API
- [x] React

The map uses Foursquare's API to fetch information about parks of New York. InfoWindow provides rating, address and the best photo of the venue. App also provides basic functionality to filter and search for places using concepts learnt during Udacity course on React.

* if you want to add more places, just list them accordingly in the **_markerData.json_** file. Don't forget to provide an ID and app will do the rest.

# Dependencies

* [Create React App](https://github.com/facebook/create-react-app) repository
* I used a premade styling from [SnazzyMaps](https://snazzymaps.com/style/47/nature). All styles are licensed under [creative commons](https://creativecommons.org/publicdomain/zero/1.0/) and are completely free to use
* [react-google-maps](https://github.com/tomchentw/react-google-maps) package. The best documented component I've found, you can read the docs [here](https://tomchentw.github.io/react-google-maps/)
* [recompose](https://github.com/acdlite/recompose), a React utility belt for function components and higher-order components.
* [react-icons](https://www.npmjs.com/package/react-icons) package
* [react-throttle](https://www.npmjs.com/package/react-throttle) for debouncing the filter
* [sort-by](https://www.npmjs.com/package/sort-by) and [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp) for sorting and filtering parks

# Special Thanks

As always, thanks to StackOverflow, great people of internet and lofi hip hop radio - beats to relax/study to

A lot of the concepts became clear to me after I read those articles:
[How to Write a Google Maps React Component](https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/)
[Map Making with Google Sheets and React](https://appendto.com/2018/08/map-making-with-google-sheets-and-react/)
[Writing a Google Maps React Component](https://medium.com/@eighteen0seven/writing-a-google-maps-react-component-fae411588a91)

For accurate lat & lng coordinates try [this website](https://www.gps-latitude-longitude.com)