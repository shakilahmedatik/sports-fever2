import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import Header from '../Header/Header'
import maleImage from '../../Images/men-player.jpg'
import femaleImage from '../../Images/women-player.jpg'
import './TeamDetails.css'

const TeamDetails = () => {
  const { idTeam } = useParams()
  const [team, setTeam] = useState([])
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
    fetch(url)
      .then(res => res.json())
      .then(data => setTeam(data.teams[0]))
  }, [idTeam, setTeam])
  console.log(team)
  const {
    strTeamBadge,
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
  } = team
  console.log(strTeam)
  return (
    <div>
      <Header image={strTeamBadge} />
      <Container>
        <div className='middle-card'>
          <Row className='justify-content-between p-5 m-5'>
            <Col className='col-sm-12 col-xs-12 col-xl-6 p-4'>
              <h1>{strTeam}</h1>
              <br />
              <h5>
                <i class='fas fa-map-marker-alt'></i> Founded: {intFormedYear}
              </h5>
              <h5>
                <i class='fas fa-flag'></i> Country: {strCountry}
              </h5>
              <h5>
                <i class='fas fa-futbol'></i> Sport Type: {strSport}
              </h5>
              <h5>
                <i class='fas fa-mars'></i> Gender: {strGender}
              </h5>
            </Col>
            <Col className='col-sm-12 col-xs-12 col-xl-6 p-4'>
              {strGender === 'Male' ? (
                <img style={{ width: '100%' }} src={maleImage} alt='' />
              ) : (
                <img style={{ width: '100%' }} src={femaleImage} alt='' />
              )}
            </Col>
          </Row>
        </div>
        <p className='text-center'>{strDescriptionEN}</p>
        <div className='text-center'>
          <a href={`https://${strFacebook}`} target='__blank'>
            <i class='fab fa-facebook brand-icon facebook'></i>
          </a>
          <a href={`https://${strTwitter}`} target='__blank'>
            <i class='fab fa-twitter brand-icon twitter'></i>
          </a>
          <a href={`https://${strYoutube}`} target='__blank'>
            <i class='fab fa-youtube brand-icon youtube'></i>
          </a>
        </div>
      </Container>
    </div>
  )
}

export default TeamDetails
