# World's Info Web app 
<img src="src/media/logo-black.png" width="15%"/>

### URL:
https://worldsinfo.herokuapp.com/

## :diamond_shape_with_a_dot_inside: **Project's goal:**

This project is about creating a mini info application about all the countries in the world.<br>
Additionally displaying the current weather of each country's capital.<br>
The project started as a practice project for using **React and Bootstrap** but I will continue<br>
to develope it more and add extra features.

## :page_with_curl: **How it's done:** 

- Upon launching, the app fetch from **Rest Countries** website the countries info and store it in a state.
- Once search receives inputs, it checks if it's valid alphabetic letters or not.
- Then if the search text generic, which means there are multiple countries that matches,<br>
the search limits up to 4 countries names only to display at once.
- A card displays simple information about the country and on button click, it forwards<br>
to a full display page.
- The button routes to a component that receives the country name and display it's info from the state.
- An additional fetch happens with the country's name from **OpenWeather** website to get the current weather<br>
in the capital of this country.

## :arrow_forward: **Install the program:**

- ```git clone```
- ```npm install```
- create account in <a href="https://openweathermap.org/">OpenWeather</a>
- copy your API Key
- create ```.env``` file in root
- write in ```.env``` file the following: ```REACT_APP_API_KEY=your api key here```
- ```npm start```

## :lady_beetle: **Bug fix:**

- 02.08.2022<br /> 
Fixed error when searching with ``mac`` as the country Macau did not have a capital to display and that caused the app to crash
