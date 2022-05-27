import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Result from './components/Result/Result';


function App() {
const [givenNumber, setGivenNumber] = useState<number>(0);
const [currency, setCurrency] = useState<string>('');
const [rate, setRate] = useState<number>(0);


useEffect(() => {
  if(givenNumber) {
    axios.get(`https://api.nbp.pl/api/exchangerates/rates/A/${currency}/`)
    .then(function(response) {
      setRate(response.data.rates[0].mid)
  })
}
}, [givenNumber, currency])


  return (
    <div className="App">
        <Header />
        <Form setGivenNumber={setGivenNumber} setCurrency={setCurrency}/>
        <Result rate={rate} givenNumber={givenNumber}/>
    </div>
  );
}

export default App;
