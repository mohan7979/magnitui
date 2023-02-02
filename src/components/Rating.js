import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; 

const Rating = ({rating, onClick, style}) => {
    return (
        <span>
            {
                [...Array(5)].map((_,i) => (
                    <span key={ i } onClick={() => onClick(i)} style={style}>
                        {rating>i ? (
                            <AiFillStar fontSize="25px" color="#f16752"/>
                        ) : (
                            <AiOutlineStar fontSize="25px" />
                        )}
                    </span>
                ))
            }
        </span>
    );
}

export default Rating;