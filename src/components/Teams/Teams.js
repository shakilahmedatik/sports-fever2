import React from 'react'
import { useHistory } from 'react-router'
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = ({ team }) => {
  const { strTeam, strSport, strTeamBadge, idTeam } = team

  const history = useHistory()

  const teamDetails = idTeam => {
    const url = `team/${idTeam}`
    history.push(url)
  }

  return (
    <Col className='col-md-6 col-sm-12 col-xl-4 p-4'>
      <Card className='rounded shadow p-3' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={strTeamBadge} />
        <Card.Body className='text-center'>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>Sports Type: {strSport}</Card.Text>
          <button
            className='btn btn-primary'
            onClick={() => teamDetails(idTeam)}
          >
            Explore <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Teams
