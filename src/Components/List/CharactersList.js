import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ShowPersonAction } from '../Redux/Actions/actionShowPerson';
import CharactersCard from '../Cards/CharactersCard';
import SearchComponent from '../SearchComponent';


const { Header, Content, Footer, Sider } = Layout;

const CharactersList = ({Characterstate}) => {
  const dispatch = useDispatch();

  const { people } = useSelector((store) => store.people);

  const [ShowC, setShowC] = useState(false);

  const asign = (person) => {
    setShowC(true);
    dispatch(ShowPersonAction(person));
  };

  return (
      
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
        <SearchComponent Characterstate={Characterstate} />
          {people.map((person, i) => (
            <Menu.Item key={i} icon={<UserOutlined />} onClick={() => asign(person)}>
              {i ? person.name : null}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className='site-layout-sub-header-background' style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className='site-layout-background' style={{ padding: 24, minHeight: 800 }}>
            {/* {ShowC ? Individual.name : null} */}
            {ShowC ? <CharactersCard /> : null}
          </div>
        </Content>
      </Layout>
    </Layout>
   );
};

export default CharactersList;
