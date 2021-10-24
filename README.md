## Welcome to the Crypto-Watch app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />

### `yarn test`

Launches the test runner in the interactive watch mode.<br />


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Features Implemented 
1) React with Typescript
2) State management with Redux
3) Routing using `react-router-dom` with provision to pass & retrieve query params by url
4) Common filter Component to choose between crypto type as well as number of records to be fetched
5) with `Bootstrap` & `react-table` created grid with client side pagination
6) Currency formatting as per German format.
7) Bubble chart implemented using `apex chart` library.
8) Mobile friendly design
9) few unit test cases using Jest
10) Error Handling & message on screen

## Limitation & future improvement scope
1) Current bubble chart is not good enough to show all the crypto bubbles at same time due to vast difference of values (tried to overcome this using rounding up till 3-4 digits & setting chart's scale dynamically, but still not satiesfactory results)
2) Negative value of price change is not supported by current charting library so had to take its absolute value to dispaly
3) More custom representation for tooltip & x-y axis label can be needed.
4) Was facing issues to write unit test cases for tabel & chart so those components are not covered
5) missed cypress test cases because of more time spent on correcting chart behaviour.
6) wanted to deploy via docker but missed to manage alloted time properly.
7) improved UX & colour theme cab be added

## Screenshots of Application 

### Full Screen Home Page
![image](https://user-images.githubusercontent.com/41572852/138609691-6064a444-1835-4ef7-8e32-26eb43c20e58.png)
![image](https://user-images.githubusercontent.com/41572852/138609854-491cc77a-f4b1-4d2f-a918-6c62d1a1a5c0.png)


### Small Screen Home Page
![image](https://user-images.githubusercontent.com/41572852/138609754-02ac1f27-9def-43ba-8fe6-f08d9fc1cfe1.png)
![image](https://user-images.githubusercontent.com/41572852/138609764-f47b3b6c-303f-4ef8-aaf7-073409a25f1e.png)

### Full Screen Liquidity Page
![image](https://user-images.githubusercontent.com/41572852/138609845-296f5ac3-7ac1-42f1-8ce7-42844705c82c.png)
![image](https://user-images.githubusercontent.com/41572852/138609863-b411844f-b157-404c-869d-3de2ef66aa00.png)


### Small Screen Liquidity Page
![image](https://user-images.githubusercontent.com/41572852/138609795-7d9195c3-b71b-4ceb-a382-d857f4bb6ce4.png)
![image](https://user-images.githubusercontent.com/41572852/138609809-f35191f1-f264-412a-a9ac-952fe51fe407.png)


