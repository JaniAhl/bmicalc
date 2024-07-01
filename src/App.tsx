import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiText, setBmiText] = useState<string>('');


  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue);

      let bmiText = '';

      if (bmiValue < 17) {
        bmiText = 'Vaarallinen aliravitsemus';
      } else if (bmiValue < 18.5) {
        bmiText = 'Alipaino';
      } else if (bmiValue < 25) {
        bmiText = 'Normaalipaino';
      } else if (bmiValue < 30) {
        bmiText = 'Ylipaino';
      } else if (bmiValue < 35) {
        bmiText = 'Merkittävä ylipaino';
      } else if (bmiValue < 40) {
        bmiText = 'Sairaalloinen ylipaino';
      }

      setBmiText(bmiText);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='title'>
          Painoindeksi laskuri
        </div>

        <div className='content'>

          <div className='heightcontainer'>
            <span>Pituus (CM):</span>
            <input 
              type='text' 
              id='heightInput'
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value) || '')}
            />
          </div>

          <div className='weightcontainer'>
            <span>Paino (KG):</span>
            <input 
              type='text' 
              id='weightInput' 
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value) || '')}
              />
          </div> 

          <div className='buttoncontainer'>
            <button onClick={calculateBmi}>Laske BMI</button>
          </div>

          {bmi !== null && (
            <div className='bmivalue'>
              <span>BMI:</span> {bmi.toFixed(2)}
            </div>
          )}

          {bmiText && (
            <div className='bmiText'>
              <span>{bmiText}</span>
            </div>
          )}

        </div>
      
      </div>

    </>
  )
}

export default App
