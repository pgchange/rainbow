import React, {Component, useState} from 'react';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Layout, Form, Row, Col, Input, Button, Table, Tag, Space} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';

import './index.css';

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const columns = [
    {
        title: '用户Id',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '用户名',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '手机号',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '角色',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
            {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                    color = 'volcano';
                }
                return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                );
            })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];

const AdvancedSearchForm = () => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
        >
            <Row gutter={24}>
                <Col span={8} key="1">
                    <Form.Item
                        name="userId"
                        label="用户Id"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户Id!',
                            },
                        ]}
                    >
                        <Input placeholder="用户Id"/>
                    </Form.Item>
                </Col>

            </Row>
            <Row>
                <Col
                    span={24}
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        搜索
                    </Button>
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => {
                            form.resetFields();
                        }}
                    >
                        重置
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

class User extends Component {
    render() {
        return (
            <Layout>
                <AdvancedSearchForm/>
                <br/>
                <Layout>
                    <Space direction="vertical" size="middle">
                        <Table columns={columns} dataSource={data}/>
                    </Space>
                </Layout>
            </Layout>
        )
    }
}

export default User;


