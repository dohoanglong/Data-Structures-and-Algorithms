import {createContext} from 'react'

const AlgorithmContext = createContext({
    currentAlgorithm: (arr)=>arr,
    changeAlgorithm: ()=>{}
})

export default AlgorithmContext;