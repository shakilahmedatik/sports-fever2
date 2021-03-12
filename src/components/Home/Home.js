import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Teams from '../Teams/Teams'
import image from '../../Images/logo.png'
import { Container, Row } from 'react-bootstrap'

const Home = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const url =
      'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
    fetch(url)
      .then(res => res.json())
      .then(data => setTeams(data.teams))
  }, [])

  return (
    <div>
      <Header image={image} />
      <Container>
        <Row>
          {teams.map(team => (
            <Teams team={team}></Teams>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home
