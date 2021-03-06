import React, { Component } from 'react';
import { Card, Row, Col, Button, Breadcrumb } from '../components/base';
import { CommenTable } from '../components';
import { withRouter } from 'react-router';


class ButtonView extends Component{
    buttonClickHandle(event){
        this.props.router.push('/layout');
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col col="2">
                                <Button type="button" style="primary" onClick={this.buttonClickHandle.bind(this)}>primary</Button>
                            </Col>
                            <Col col="2">
                                <Button style="default">default</Button>
                            </Col>
                            <Col col="2">
                                <Button style="secondary">secondary</Button>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Outline buttons</h3>
                    <Card block className="bg-inverse">
                        <Row>
                            <Col col="2">
                                <Button style="primary" outline>primary</Button>
                            </Col>
                            <Col col="2">
                                <Button style="default" outline>default</Button>
                            </Col>
                            <Col col="2">
                                <Button style="secondary" outline>secondary</Button>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Sizes</h3>
                    <Card block>
                        <Row>
                            <Col col="2">
                                <Button style="primary" size="sm">Sm</Button>
                            </Col>
                            <Col col="2">
                                <Button style="primary">Normal</Button>
                            </Col>
                            <Col col="2">
                                <Button style="primary" size="lg">Large</Button>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Pill buttons</h3>
                    <Card block>
                        <Row>
                            <Col col="2">
                                <Button style="primary" shape="pill">primary</Button>
                            </Col>
                            <Col col="2">
                                <Button style="default" shape="pill">default</Button>
                            </Col>
                            <Col col="2">
                                <Button style="secondary" shape="pill">secondary</Button>
                            </Col>
                        </Row>
                    </Card>
                    <h3>Link buttons</h3>
                    <Card block>
                        <Row>
                            <Col col="2">
                                <Button style="primary" href="www.github.com">primary</Button>
                            </Col>
                            <Col col="2">
                                <Button style="default" href="www.github.com">default</Button>
                            </Col>
                            <Col col="2">
                                <Button style="secondary" href="www.github.com">secondary</Button>
                            </Col>
                        </Row>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['style', '设置按钮的样式，可选值为 primary、default、secondary', 'string', 'primary'],
                            ['onClick', 'click 事件的 handler', 'function', ''],
                            ['outline', '设置按钮样式是否有外边线', 'boolean', 'false'],
                            ['size', '设置按钮大小，可选值为 sm、normal、large', 'string', ''],
                            ['shape', '设置按钮形状，可选值为 pill', 'string', ''],
                            ['href', '设置按钮链接', 'string', ''],
                            ['close', '设置是否关闭按钮样式', 'boolean', ''],
                            ['classname', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                    <h3 className="text-secondary">组件应用扩展</h3>
                    <ul>
                        <li>style、size、shape 可自行扩展，样式改变本质是字符串拼接。</li>
                        <li>为 Button 设置路由跳转可在 onClick 事件函数内添加路由跳转。</li>
                    </ul>
                </Card>
            </div>
        );
    }
}

ButtonView.title = 'Button';


export default withRouter(ButtonView);
