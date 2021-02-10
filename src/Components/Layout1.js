import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ShowPersonAction } from './Redux/Actions/actionShowPerson';




const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Layout1 = () => {
  const dispatch = useDispatch();

  const { people } = useSelector((store) => store.people);
  console.log(people, 'p1');

  const [loading, setloading] = useState(false);

  const asign = (person) => {
    console.log(person);
    dispatch(ShowPersonAction(person));
  };

  const [ShowCharacters, setShowCharacters] = useState(false)
  console.log(ShowCharacters);
  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>Star War Challenge</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            <SubMenu key='sub1' icon={<UserOutlined />} title='Characters' onClick = {() => setShowCharacters(true)} >
              {people.map((person, i) => (
                <Menu.Item key={i} onClick={() => asign(person)}>
                  {i ? person.name : null}
                </Menu.Item>
              ))}
            </SubMenu>
            <SubMenu key='sub2' icon={<LaptopOutlined />} title='Movies' onClick = {() => setShowCharacters(true)}>
              <Menu.Item key='5'>option5</Menu.Item>
              <Menu.Item key='6'>option6</Menu.Item>
              <Menu.Item key='7'>option7</Menu.Item>
              <Menu.Item key='8'>option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Layout1;
