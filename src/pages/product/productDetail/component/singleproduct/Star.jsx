import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';

const  Star = ({rate , change_rating}) => {

    const d = [1,2,3,4,5]

    const get_rating = (rating) => {
        change_rating(rating)
    }


    return(
        // <Icon icon="material-symbols:star-outline" className="text-red-400"/>
    d.map((d , i) => {
        if(i < rate){
            return(
                <Icon 
                icon="material-symbols:star"
                className="text-red-400"
                onClick={()=>{get_rating(d)}}
                />
                    )
        }else{
            return(
    <Icon 
    icon="material-symbols:star-outline"
     className="text-red-400"
     onClick={()=>{get_rating(d)}}
    />                )  
        }
    })
    )
}

export default Star