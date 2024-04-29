import React from 'react'
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap'

const Mypage = () => {
  return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMThfMjIg%2FMDAxNjc5MTI1OTAyODA3.DwZdSyumpdFW1CVd_frf0eHaVJxJBSOJ84Vdu61ffEsg.rwR_YmiFGL69TBoIaSDMGtdZ6bemY-P2GGvuufkI3-Qg.PNG.anhyo1201%2F%25B8%25B6%25C0%25CC%25C5%25A9%25B7%25CE%25BC%25D2%25C7%25C1%25C6%25AE_%25C7%25C1%25BB%25E7.png&type=a340" />
              <Card.Body>
                <Card.Title>닉네임</Card.Title>
                <Card.Text>
                  한 줄 설명
                </Card.Text>
                <Button variant="outline-info">확인</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="my-col">
          <Col lg={3} className="mb-5">
            <Image src="https://react-bootstrap-v3.netlify.app/thumbnail.png" />
          </Col>
          <Col lg={3} className="mb-5">
            <Image src="https://react-bootstrap-v3.netlify.app/thumbnail.png" />
          </Col>
          <Col lg={3} className="mb-5">
            <Image src="https://react-bootstrap-v3.netlify.app/thumbnail.png" />
          </Col>
          </Col>
        </Row>
      </Container>
      
  )
}

export default Mypage