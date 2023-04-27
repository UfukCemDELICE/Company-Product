import {Layout, Menu, Col, Row } from 'antd'
import { HomeOutlined, RadarChartOutlined, PieChartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const  navigate  = useNavigate();
  return (
    <Row>
      <Col span={10}>
        </Col>
          <Layout>
          <Menu
            onClick={({key}) => {
              navigate(key);
          }}
            theme="light"
            mode="horizontal"
            items={[
              {
                label: 'Home',
                key: '/',
                icon: <HomeOutlined />,
              },
              {
                label: 'Company',
                key: '/company',
                icon: <RadarChartOutlined />,
              },
              {
                label: 'Product',
                key: '/product',
                icon: <PieChartOutlined />,
              }
            ]}
          />
          </Layout> 
        <Col span={8}>
      </Col>
    </Row>
    
  );
}
