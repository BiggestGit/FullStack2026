import { useMemo } from "react";

const Total = ({parts}) =>{
    const totalExercises= useMemo(() => {return parts.reduce(
        (accumulator, currentPart) => accumulator + currentPart.exercises, 0);}, [parts]);    
    return(
            <b>Number of exercises {totalExercises}</b>
    )      
}
export default Total