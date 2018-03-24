import React from 'react'
import '../styles.scss'

const InfoCard = ({ name, description }) => (
  <div className="info-card-container">
    <h5>{name}</h5>
    <p>{description}</p>
  </div>
)

export default InfoCard