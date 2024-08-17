# Currency Converter App

This is a simple currency converter application built using React. The app allows users to convert amounts between different currencies using real-time exchange rates.

## Features

- **Currency Selection**: Users can select the currency they want to convert from and to using dropdown menus.
- **Amount Input**: Users can input the amount they wish to convert.
- **Real-Time Conversion**: The app fetches the latest exchange rates and automatically calculates the converted amount.
- **Swap Currencies**: A button allows users to swap the currencies, switching the "from" and "to" currencies.

## Installation

1. **Clone the repository:**

    
    git clone https://github.com/Himalay-NRHS/currency_converter.git
    ```

2. **Navigate to the project directory:**

   
    cd currency-converter
   

3. **Install dependencies:**

    ```
    npm install
    ```

4. **Start the development server:**

    ```
    npm start
    ```

5. **Open the app in your browser:**

    The app will be available at `http://localhost:3000`.

## Usage

1. **Select Currencies**: Choose the currencies you want to convert between using the dropdown menus.
2. **Input Amount**: Enter the amount you want to convert in the input field.
3. **See Results**: The converted amount will be displayed in the output field.
4. **Swap Currencies**: Click the "swap" button to exchange the "from" and "to" currencies.

## How It Works

- **React Hooks**: The app uses React's `useState` and `useEffect` hooks to manage state and handle side effects like fetching data.
- **Fetching Exchange Rates**: The app fetches the exchange rate from a JSON file hosted on GitHub based on the selected currencies.
- **Automatic Calculation**: When the user inputs an amount or changes the currency, the app automatically calculates and displays the converted amount.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling for the app.

## Future Improvements

- **Error Handling**: Add proper error handling for network requests.
- **API Integration**: Integrate a more reliable currency exchange rate API for real-time data.
- **Responsive Design**: Improve the app's responsiveness for different screen sizes.
- **Add a button to show all the currencies**

## Contributing

Feel free to contribute by submitting a pull request or opening an issue to discuss any improvements or bugs.


 ## screenshot
 ![frontend](./public/frontend.png)