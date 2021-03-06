import React, { Component } from 'react';
import { Card, Row, Col, Loading, Button, Breadcrumb } from '../components/base';
import { CommenTable } from '../components/';

export default class LoadingView extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
        this.state = {
            type: 'cyclone'
        };

        this.showLoadingHandle = this.showLoadingHandle.bind(this);
    }
    /**
     * 显示Loading.
     * @param  {String} type loading类型
     */
    showLoadingHandle(type){
        this.setState({
            type,
            msg: type
        });
        Loading.show();
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Loading</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Button style="default" onClick={() => this.showLoadingHandle('fountain')}>fountain</Button>
                            </Col>
                            <Col>
                                <Button style="default" onClick={() => this.showLoadingHandle('wave')}>wave</Button>
                            </Col>
                            <Col>
                                <Button style="default" onClick={() => this.showLoadingHandle('pendule')}>pendule</Button>
                            </Col>
                            <Col>
                                <Button style="default" onClick={() => this.showLoadingHandle('cyclone')}>cyclone</Button>
                            </Col>
                        </Row>
                    </Card>
                    <Loading type={this.state.type} loadingMsg={this.state.msg} closeable={true}/>
                    <h3>Loading API</h3>
                    <CommenTable
                        data = {[
                            ['className', '自定义样式', 'string', ''],
                            ['type', '类型，可选值为 fountain, wave, pendule, cyclone',  'string', 'cyclone'],
                            ['loadingMsg', '加载文本', 'string', '加载中'],
                            ['closeable', '是否可关闭', 'boolean', 'false'],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

LoadingView.title = 'Loading';