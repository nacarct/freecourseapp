import React, {Component} from 'react';
import {Card, Row, Col, List, Avatar} from 'antd';
import Meta from "antd/es/card/Meta";
import {EllipsisOutlined} from "@ant-design/icons";

const data = [
    {
        educatorName: 'Engin Demiroğ',
        title: 'Yazılım Danışmanı',
        imagesrc: 'https://avatars.githubusercontent.com/u/10206539?v=4'
    },
    {
        educatorName: 'Mustafa Murat Coşkun',
        title: 'Yazılım Mühendisi',
        imagesrc: 'https://avatars.githubusercontent.com/u/15064847?v=4'
    },
    {
        educatorName: 'Gökhan Kandemir',
        title: 'Bilgisayar Mühendisi',
        imagesrc: 'https://avatars.githubusercontent.com/u/5469995?v=4'
    },
    {
        educatorName: 'Ömer Faruk Çolakoğlu',
        title: 'Yazılım Danışmanı',
        imagesrc: 'https://yt3.ggpht.com/ytc/AKedOLSQQtQcN9AEqISl3zBBnGMeaUN6rl8xbwL5ZWFhAw=s900-c-k-c0x00ffffff-no-rj'
    },
    {
        educatorName: 'Dr. Angela Yu',
        title: 'Yazılım Mühendisi',
        imagesrc: 'https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk_400x400.jpg'
    },
    {
        educatorName: 'Sadık Turan',
        title: 'Yazılım Uzmanı',
        imagesrc: 'https://avatars.githubusercontent.com/u/19492591?v=4'
    },
];

class Dashboard extends Component {
    render() {
        return (
            <div>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card actions={[
                                <EllipsisOutlined key="Kurslar" />,
                            ]}>
                                <Meta
                                    avatar={
                                        <Avatar src={item.imagesrc} />
                                    }
                                    title={item.educatorName}
                                    description={item.title}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Dashboard;