import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import CharactersList from './List/CharactersList';
import MoviesList from './List/MoviesList';
import SearchComponent from './SearchComponent';

import { Typography, Space } from 'antd';
const { Title } = Typography;
const { Text, Link } = Typography;

const { Header, Sider, Content } = Layout;


const Layout2 = () => {

    

    const [state, setState] = useState({collapsed: false})
    const [Characterstate, setCharacterstate] = useState(false)
    const [Moviestate, setMoviestate] = useState(false)
    let y = false;
    
      const toggle = () => {
        setState({
          collapsed: !state.collapsed,
        });
      };

      function showCharacters(x) {
          setCharacterstate(true);
          setMoviestate(false)
      }

      function showMovies(x) {
          console.log("algo2");
          setMoviestate(true);
          setCharacterstate(false);
      }


    return (
        <div>
        <Title style= {{backgroundColor : "white"}}>Star Wars Challenge</Title>
        <Layout>   
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
        
          <div className="logo" /> 
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick = {() => showCharacters()}>
              Characters
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick = {() => showMovies()} >
              Movies
            </Menu.Item>
           
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '0px 0px',
              padding: 0,
              minHeight: 1000,
            }}
          >
            
{Characterstate ? <CharactersList Characterstate={Characterstate} /> : Moviestate ? <MoviesList Moviestate={Moviestate} /> : null }
          </Content>
          <Text type="secondary">In this Challenge I implemented most the tools of React and Redux combined. Simultaneously I employed Antdesign style to govern the appereance of the website</Text>

        </Layout>
      </Layout>
      </div>
    )
}

export default Layout2;


