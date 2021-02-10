import React from 'react'
import { useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;



const CharactersCard = () => {
     const { showPerson } = useSelector((store) => store.person);
    // console.log(showPerson, "p3")
    return (
        <Card
    style={{ width: 600 }}
    cover={
      <img
        alt="example"
        src="https://miro.medium.com/max/1200/0*hMSkoUZvauXqzCPl.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={showPerson.name}
      description={showPerson.gender}
    />
    <br />
    height: {showPerson.height}
    <br />
    hair_color: {showPerson.hair_color}
    <br />
    skin_color: {showPerson.skin_color}
    <br />
    eye_color: {showPerson.eye_color}
    <br />
    birth_year:{showPerson.birth_year}

  </Card>
    )
}

export default CharactersCard
