import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const CurrencyExchange = () => {
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [exchangeRates, setExchangeRates] = useState({});
  const accessKey = 'YOUR_API_KEY'; // Replace with your actual API key

  const currencies = [
    { value: 'EUR', label: 'Euro' },
    { value: 'USD', label: 'US Dollar' },
    { value: 'GBP', label: 'British Pound' },
    { value: 'TRY', label: 'Turkish Lira' },
    { value: 'AUD', label: 'Australian Dollar' },
    // Add more currencies here
  ];

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = () => {
    axios
      .get(`http://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}`)
      .then(response => {
        setExchangeRates(response.data.rates);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleBaseCurrencyChange = selectedOption => {
    setBaseCurrency(selectedOption.value);
  };

  const handleTargetCurrencyChange = selectedOption => {
    setTargetCurrency(selectedOption.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const convertCurrency = () => {
    const baseRate = exchangeRates[baseCurrency];
    const targetRate = exchangeRates[targetCurrency];

    if (baseRate && targetRate) {
      const convertedAmount = (amount / baseRate) * targetRate;
      const formattedAmount = convertedAmount.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      });
      return formattedAmount;
    }

    return 'Invalid currency';
  };

  return (
    <div className='center'>
      <div className='con'>
        <h2>Currency Exchange</h2>
        <div className='Curr_list'>
          <label>Base Currency:</label>
          <Select
            options={currencies}
            value={currencies.find(curr => curr.value === baseCurrency)}
            onChange={handleBaseCurrencyChange}
            styles={{
              control: provided => ({
                ...provided,
                width: '150px', // Adjust the width as needed
              }),
              menu: provided => ({
                ...provided,
                width: '150px', // Adjust the width as needed
              }),
            }}
          />

          <label>&nbsp;</label> 

          <label>Target Currency:</label>
          <Select
            options={currencies}
            value={currencies.find(curr => curr.value === targetCurrency)}
            onChange={handleTargetCurrencyChange}
            styles={{
              control: provided => ({
                ...provided,
                width: '150px', // Adjust the width as needed
              }),
              menu: provided => ({
                ...provided,
                width: '150px', // Adjust the width as needed
              }),
            }}
          />
        </div>
        <label>&nbsp;</label>

         <div className="input-container">
          <input
            required="required"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Amount"
            name="text"
            className="input"
          />
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="3em"
            viewBox="0 0 448 512"
            
          >
            <path fill='#46416C'  d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
          </svg>
          <input
            type="text"
            readOnly
            value={`${convertCurrency()} ${targetCurrency}`}
            className="input-disabled"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;



















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CurrencyExchange = () => {
//   const [baseCurrency, setBaseCurrency] = useState('EUR'); // Euro is the default base currency
//   const [targetCurrency, setTargetCurrency] = useState('USD');
//   const [amount, setAmount] = useState(1);
//   const [exchangeRates, setExchangeRates] = useState({});
//   const accessKey = '32eb16a67ddb404a550222d0cb4c1813'; // Replace with your actual API key

//   useEffect(() => {
//     fetchExchangeRates();
//   }, []);

//   const fetchExchangeRates = () => {
//     axios
//       .get(`http://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}`)
//       .then(response => {
//         setExchangeRates(response.data.rates);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   const handleBaseCurrencyChange = event => {
//     setBaseCurrency(event.target.value);
//   };

//   const handleTargetCurrencyChange = event => {
//     setTargetCurrency(event.target.value);
//   };

//   const handleAmountChange = event => {
//     setAmount(event.target.value);
//   };

//   const convertCurrency = () => {
//     const baseRate = exchangeRates[baseCurrency];
//     const targetRate = exchangeRates[targetCurrency];

//     if (baseRate && targetRate) {
//       const convertedAmount = (amount / baseRate) * targetRate;
//       return convertedAmount.toFixed(2);
//     }

//     return 'Invalid currency';
//   };

//   return (
//     <div>
//       <h2>Currency Exchange</h2>
//       <div>
//         <label>Base Currency:</label>
//         <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
//           <option value="EUR">EUR</option>
//           {/* Add more currency options here */}
//         </select>
//       </div>
//       <div>
//         <label>Target Currency:</label>
//         <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
//           <option value="USD">USD</option>
//           {/* Add more currency options here */}
//         </select>
//       </div>
//       <div>
//         <label>Amount:</label>
//         <input type="number" value={amount} onChange={handleAmountChange} />
//       </div>
//       <div>
//         {amount} {baseCurrency} is approximately {convertCurrency()} {targetCurrency}
//       </div>
//     </div>
//   );
// };

// export default CurrencyExchange;
