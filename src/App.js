import './index.css';
import React, {useState} from 'react'
 
function App() {
 

  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 16) {
        setMessage('You are underweight')
      } else if (bmi >= 16 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI CALCULATOR</h2>
      <form onSubmit={calcBmi}> 
          <div>
          <label>Height (cm)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>

        <div>
          <label>Weight (kg)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div> 

        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;