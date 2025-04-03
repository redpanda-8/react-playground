import './App.css'
import { Uzduotis1 } from './assets/Components/Uzduotis1'
import { Uzduotis2 } from './assets/Components/Uzduotis2'
import { Uzduotis3 } from './assets/Components/Uzduotis3'

function App() {

  return (
    <>
      {/* color - propsas o jo viduje value, color yra tas vardas kuri aprasem componento uzduotis1 viduje, sis vardas gali buti bet
      koks, geriausia kad turetu semantine reiksme, example- className klases vardams, bgcolor-background color*/}
      <Uzduotis1 color={'#000000'}>Uzduotis1</Uzduotis1>
      <Uzduotis2 title={'Uzduotis2'}/>
      <Uzduotis3 title={'Uzduotis3'}/>
    </>
  )
}

export default App
