import React, {useState} from 'react';
import {AutoComplete, Button, Descriptions, Drawer, Modal, Table, Tabs, Input, Row, Col, Radio, Space} from 'antd';
import {Card} from 'antd';
import {Layout, Menu, Breadcrumb} from 'antd';
import {PlusOutlined, StopOutlined, DeleteOutlined, EditOutlined,BranchesOutlined,AlignLeftOutlined} from '@ant-design/icons';
import "./default.css"
import Complete from "./test";

const {TabPane} = Tabs;

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu, ItemGroup} = Menu;

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '5',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '6',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '8',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '9',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '10',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },

];

const columns = [
    {
        title: '期效',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '时间',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '内容',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '用法',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '时间方案',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '开嘱人',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '执行科室',
        dataIndex: 'address',
        key: 'address',
    },
];


class DefaultLayout extends React.Component {
    state = {
        collapsed: false,
        visible: false,
        modalVisible: false
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };


    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={this.state.collapsed} trigger={null} style={{height: '100vh'}}>

                    <Menu theme="dark" defaultSelectedKeys={['1-1']} defaultOpenKeys={['1']} mode="inline">
                        <SubMenu key="1" icon={<AlignLeftOutlined />} title="医嘱项目">
                            <Menu.Item key="1-1">医嘱</Menu.Item>
                            <Menu.Item key="1-2">检查</Menu.Item>
                            <Menu.Item key="1-3">检验</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/*<Header className="site-layout-background" style={{padding: 0}}>*/}
                    {/*   */}
                    {/*   */}
                    {/*</Header>*/}
                    <Card>
                        <Descriptions title={<div style={{textAlign: "left"}}><h2>吕布</h2></div>} bordered={true}
                                      size='small'>
                            <Descriptions.Item label="床位号">123</Descriptions.Item>
                            <Descriptions.Item label="性别">男</Descriptions.Item>
                            <Descriptions.Item label="年龄">32</Descriptions.Item>
                            <Descriptions.Item label="医生">张飞</Descriptions.Item>
                            <Descriptions.Item label="科室">外科</Descriptions.Item>
                        </Descriptions>
                    </Card>

                    <Content className="site-layout-background" style={{margin: '24px 16px 0'}}>
                        <div style={{textAlign: 'left',margin: '5px 0'}}>
                            <Space>
                                <Button type="primary"><PlusOutlined/>新开</Button>
                                <Button type="primary"><BranchesOutlined />合并</Button>
                                <Button type="primary"><StopOutlined/>停嘱</Button>
                                <Button type="primary"><EditOutlined/>签署</Button>
                                <Button type="primary"><DeleteOutlined/>删除</Button>
                            </Space>
                        </div>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                            scroll={{x: 1500, y: 350}}
                            bordered
                            onRow={record => {
                                return {
                                    onClick: event => {
                                        this.showDrawer()
                                    }, // 点击行
                                    onDoubleClick: event => {
                                    },
                                    onContextMenu: event => {
                                    },
                                    onMouseEnter: event => {
                                    }, // 鼠标移入行
                                    onMouseLeave: event => {
                                    },
                                };
                            }}
                        />;
                        <Drawer
                            width={640}
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            医嘱详情
                        </Drawer>

                        <Modal
                            title="新开长期医嘱"
                            visible={this.state.modalVisible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="检索" key="1">
                                    <Complete/>
                                </TabPane>
                                <TabPane tab="个人模板" key="2">
                                    Content of Tab Pane 2
                                </TabPane>
                                <TabPane tab="科室模板" key="3">
                                    Content of Tab Pane 3
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        <div>
                            <Row>
                                <Col span={6}>
                                    <div>
                                        <Radio.Group defaultValue="a" buttonStyle="solid">
                                            <Radio.Button value="a">全部</Radio.Button>
                                            <Radio.Button value="b">临时</Radio.Button>
                                            <Radio.Button value="c">长期</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </Col>

                                <Col span={6}>
                                    <div>
                                        <Radio.Group defaultValue="a" buttonStyle="solid">
                                            <Radio.Button value="a">全部</Radio.Button>
                                            <Radio.Button value="b">当前</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default DefaultLayout;
