import React from 'react'
import personData from './data'
import InfoCard from './InfoCard'

const InfoCardList = () => {
    return (
      personData.map(person => {
        return <InfoCard name={person.first_name + " " + person.last_name} description={person.description} key={person.first_name + person.last_name}/>
      })
    )
}

export default InfoCardList