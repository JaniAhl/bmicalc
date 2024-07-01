import './App.css'


function App() {

  return (
    <>
      <div className='container'>
        <div className='title'>
          Painoindeksi laskuri
        </div>

        <div className='content'>

          <div className='heightcontainer'>
            <span>Pituus (CM):</span>
            <input type='text' id='heightInput'/>
          </div>

          <div className='weightcontainer'>
            <span>Paino (KG):</span>
            <input type='text' id='weightInput' />
          </div> 

          <div className='buttoncontainer'>
            <button>Laske BMI</button>
          </div>

        </div>
      
      </div>

    </>
  )
}

export default App
