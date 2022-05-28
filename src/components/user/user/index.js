import React, {PureComponent, useState} from 'react';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Layout, Form, Row, Col, Input, Button, Table, Tag, Space, Modal} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';

import './index.css';

const {confirm} = Modal;

const data = [
    {
        id: '1',
        name: 'admin',
        phone: 32,
        role: '',
        roles: ['管理员'],
    },
    {
        id: '2',
        name: 'Jim Green',
        phone: 42,
        address: 'London No. 1 Lake Park',
        roles: ['业务员'],
    },
    {
        id: '3',
        name: 'Joe Black',
        phone: 32333,
        address: 'Sidney No. 1 Lake Park',
        roles: ['业务员', '商品管理者'],
    },
];


class User extends PureComponent {

    state = {
        loading: false,
        visible: true,
    };

    constructor(props) {
        super(props);
    }

    deleteUser = () => {
        confirm({
            title: '你确定要删除该用户吗?',
            content: '删除用户不可恢复，请谨慎操作！',
            okText: '是的',
            cancelText: '取消',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    render() {

        const columns = [
            {
                title: '用户Id',
                dataIndex: 'id',
                key: 'id',
                render: text => <a>{text}</a>,
            },
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '手机号',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: '角色',
                key: 'roles',
                dataIndex: 'roles',
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
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a onClick={() => {
                        }}>编辑</a>
                        <a onClick={() => {
                            this.deleteUser();
                        }}>删除</a>
                    </Space>
                ),
            },
        ];

        const AdvancedSearchForm = () => {
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
                                name="id"
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

        const { visible, loading } = this.state;
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
