import React,{useContext} from 'react'
//import CustomButton from '../custom-button/CustomButton.component'
import Selection from '../../Sort/selection-sort.js'
import Bubble from '../../Sort/bubble-sort'

import AlgorithmContext from '../../provider/algorithm.provider.js'
import './options.styles.css'

const Sort =[Selection,Bubble]

const Options = () => {
    const {changeAlgorithm}=useContext(AlgorithmContext)
    return (
        <div className="dropdown">
        <button className="dropbtn">Sorting Algorithm</button>
        <div className="dropdown-content"> {
            Sort.map((method,idx) => <button key={idx} onClick={()=>changeAlgorithm(()=>method)}> {method.name} Sort</button>)
        }
        </div>
    </div>
    )
}


export default Options;