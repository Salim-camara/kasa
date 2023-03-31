import React, {useState, useEffect} from "react";
import "./../styles/components/Rating.css";


const Rating = ({ rate }) => {

    const [stars, setStars] = useState([]);

    const handleStars = () => {
        for(let i = 0; i < 6; i++) {
            if(i <= rate) {
                // setStars((prev) => [...prev, fontawsome icon active])
                return;
            }
            // grey icon
        }
    }

    useEffect(() => {
        handleStars();
    }, [])
    return (
        <div>       
            {stars.map((el) => (el))}
        </div>
    )
}       

export default Rating;