import '../css/Calculator.css';
import React, { useState, useEffect } from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import BeautifulScreen from './BeautifulScreen';
import MagnificientEqualButton from './MagnificientEqualButton';
import Clear from './Clear';
import ItsOver from './ItsOverNineThousand'
import Save from './Save'
import axios from 'axios';


export default function Calculator() {

  const [nombres, setNombres] = useState("");
  const [statue,setStatue] =useState(true)
  const [result, setResult] = useState(0);
  const [table, setTable] = useState([])

  const handleClick = (e) => {
    if (e.target.value=="=") {
      try {
        setResult(eval(nombres));
        eval(nombres) < 9000 ? setStatue(true): setStatue(false)
      } catch {
        setNombres("ERROR");
      }
    }else {
      setNombres(nombres+e.target.value)
    }
  }
  const handleClickClear= () => {
    setNombres("");
    setResult("");
    setStatue(true);
  }

  const save = async () => {
    console.log(nombres)
    console.log(result)
    const url = 'http://localhost:8888/Calculator9000/php/apiCalculator.php'
    try{
        const DataCalcul = await axios.post(url, {
            nombres :nombres,
            result :result
        })
        console.log(DataCalcul.data)
    }
    catch(error){
        console.log(error)
    }
  }
  // useEffect(() => {
  //   axios.get("http://localhost:8888/Calculator9000/php/getData.php").then(response => response.data)
  //   .then((data) => {
  //     setTable(data);
  //   });
  // })
  return (
    <div>
        <div className="contentAll">
              {statue === false && <ItsOver/>}
              <BeautifulScreen  class="boxCalculatorResult" numberValue = {nombres} changeNumbers = {(e) => setResult(e.target.value)} />
              <BeautifulScreen  class="boxCalculator" numberValue = {result} changeNumbers = {(e) => setNombres(e.target.value)} />
              <div className="buttonOptDisplay">
                <Clear classe="buttonsTop" value="AC" ClearButton={(e) => {handleClickClear(e)}} operator="AC"/>
                <Save classe="buttonsTop"  SaveButton={(e) => { save(e)}} operator="SAVE"/>
                <MagnificientEqualButton value="=" buttonClick= {(e)=>{handleClick(e)}} operator="=" />
                <GreatOperationButton handleClickParent= {handleClick}/>
              </div>
              <div className="buttonDigitDisplay">
                <AmazingNumberButton handleClickParent={handleClick}/>
              </div>
        </div>
        <div>
          {/* <table>
            <caption>Statement</caption>
            <thead>
              <tr>
                <th scope="col">Calcul</th>
                <th scope="col">Resultat</th>
              </tr>
            </thead>
              <tbody>
                {table.map((item) => (
                    <tr>
                        <td data-label="Account">{item.calcul}</td>
                        <td data-label="Due Date">{item.resultat}</td>
                    </tr>
                  ))}
            </tbody>
          </table> */}
          <table className='table'>
                    <tr>
                        <th>Calcul</th>
                        <th>Resultat</th>
                    </tr>
                    {table.map((item) => (
                        <tr>
                            <td>{item.calcul}</td>
                            <td>{item.resultat}</td>
                        </tr>
                    ))}
                </table>
        </div>
    </div>
  );
}
