import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MoviesCard from '../Cards/MoviesCard';
import { AddMovieAction } from '../Redux/Actions/actionShowMovie';
import SearchComponent from '../SearchComponent';

const { Header, Content, Footer, Sider } = Layout;


const MoviesList = ({Moviestate}) => {
    const dispatch = useDispatch();

    const { movies } = useSelector((store) => store.movies);

  const [ShowM, setShowM] = useState(false)

  const asign1 = (movie) => {
    setShowM(true);
    dispatch(AddMovieAction(movie));
  };
    return (
        <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <SearchComponent Moviestate={Moviestate} />
      {movies.map((movie, i) => (
                <Menu.Item key={i} icon={<VideoCameraOutlined />} onClick={() => asign1(movie)}>
                  {i ? movie.title : null}
                </Menu.Item>
              ))}
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 800 }}>

      {/* {ShowC ? Individual.name : null} */}
        {ShowM ? <MoviesCard /> : null}


        </div>
      </Content>
    </Layout>
  </Layout>
    )
}

export default MoviesList
