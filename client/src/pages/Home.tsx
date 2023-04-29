import { Col, Row, Card } from 'antd';

const { Meta } = Card;
function Home() {
  const number = 0
  const lastAddedCompanies: string[] = [];
  return (
    <>
    <br/><br/>
      <Row>
        <Col span={6}></Col>
          <Card
            hoverable
            style={{ width: 1050 }}
            cover={<img alt="example" src="https://images.pexels.com/photos/552784/pexels-photo-552784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />}
            >
            <Meta title={`There are ${number} companies in the system right now, last added companies are : ${lastAddedCompanies}`} />
            </Card>
        <Col span={12}></Col>
      </Row>
    </>
  )
}

export default Home