import { useState, useEffect } from 'react'

import './App.css'

function App() {

let [fromCurrency, setFromCurrency] = useState("USD");
let [toCurrency, setToCurrency] = useState("INR");
let [inputAmount, setInputAmount] = useState("");
let [outputAmount, setOutputAmount] = useState(0);  
let [rate, setRate] = useState(0);

useEffect(() => {

const fetcheddata =fetch(`https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${toCurrency}_${fromCurrency}.json`)
.then(response => response.json())
.then((res)=>{
  const cur=res.rate;
 setRate(cur);
 console.log(cur);
})



},[toCurrency,fromCurrency])



useEffect(()=>{
  setOutputAmount(inputAmount*rate);
  
},[inputAmount,rate])

const swapping = ()=>{
const c = fromCurrency;
setFromCurrency(toCurrency);
setToCurrency(c);

const q=inputAmount;
setInputAmount(outputAmount);
setOutputAmount(inputAmount*rate);

const handelinput(e){
  if (Number.isInteger(e.target.value))
      setInputAmount(e.target.value)
  }


}

  return (
    <>
      <div className='container'>

        <div className='card'>
          <div className='input-container'>
            <label className='input-label' htmlFor="from">from</label>
            <div className='input'>
              <input type="number" id="from" name="from"  placeholder="type here" defaultValue={"TYPE"} className='innerinput' value={inputAmount} onChange={handelinput}></input>
            </div>
            <div className='options'>
              <select name="from" id="from" defaultValue="USD" value={fromCurrency} onChange={(e)=>{setFromCurrency(e.target.value);setOutputAmount(0);setInputAmount(0);}}>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="HKD">HKD</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PHP">PHP</option>
                <option value="PLN">PLN</option>
                <option value="RON">RON</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="USD">USD</option>
              </select>
            </div>

          </div>
          <button className='swap-button' onClick={swapping}>swap</button>
          <div className='output-container'>
            <label className='output-label' htmlFor="to">to</label>
            <div className='output'>
             {outputAmount}
            </div>
            <div className='options'>
              <select name="from" id="to" defaultValue="INR" value={toCurrency} onChange={(e)=>{setToCurrency(e.target.value)}}>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="HKD">HKD</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PHP">PHP</option>
                <option value="PLN">PLN</option>
                <option value="RON">RON</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="USD">USD</option>
              </select>
            </div>

          </div>
       

        </div>



      </div>
    </>
  )
}

export default App
