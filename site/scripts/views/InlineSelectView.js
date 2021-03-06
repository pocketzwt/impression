import React, { Component } from 'react';
import { Card, Row, Col, Breadcrumb, InlineSelect } from '../components/base';

export default class InlineSelectView extends Component{
    //初始state
    constructor(props, context){
        super(props, context);

        this.state = {
            city: '1',
            zone: '1'
        };

        this.selectCityHandle = this.selectCityHandle.bind(this);
        this.selectZoneHandle = this.selectZoneHandle.bind(this);
    }
    selectCityHandle(city){
        this.setState({
            city,
            zone: undefined
        });
    }
    selectZoneHandle(zone){
        this.setState({
            zone
        });
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                       <Row>
                           <Col col="1" className="text-right"><strong>城市：</strong></Col>
                           <Col col="11">
                               <InlineSelect value={this.state.city} onChange={this.selectCityHandle}>
                                   <InlineSelect.Option value="1">北京</InlineSelect.Option>
                                   <InlineSelect.Option value="2">上海</InlineSelect.Option>
                                   <InlineSelect.Option value="3">南京</InlineSelect.Option>
                                   <InlineSelect.Option value="4">苏州</InlineSelect.Option>
                                   <InlineSelect.Option value="5">武汉</InlineSelect.Option>
                                   <InlineSelect.Option value="6">无锡</InlineSelect.Option>
                                   <InlineSelect.Option value="7">常州</InlineSelect.Option>
                                   <InlineSelect.Option value="8">深圳</InlineSelect.Option>
                                   <InlineSelect.Option value="9">重庆</InlineSelect.Option>
                                   <InlineSelect.Option value="10">长沙</InlineSelect.Option>
                                   <InlineSelect.Option value="11">成都</InlineSelect.Option>
                                   <InlineSelect.Option value="12">天津</InlineSelect.Option>
                                   <InlineSelect.Option value="13">厦门</InlineSelect.Option>
                                   <InlineSelect.Option value="14">福州</InlineSelect.Option>
                                   <InlineSelect.Option value="15">大连</InlineSelect.Option>
                                   <InlineSelect.Option value="16">青岛</InlineSelect.Option>
                                   <InlineSelect.Option value="17">哈尔滨</InlineSelect.Option>
                                   <InlineSelect.Option value="18">济南</InlineSelect.Option>
                                   <InlineSelect.Option value="19">郑州</InlineSelect.Option>
                                   <InlineSelect.Option value="20">西安</InlineSelect.Option>
                                   <InlineSelect.Option value="21">泉州</InlineSelect.Option>
                                   <InlineSelect.Option value="22">东莞</InlineSelect.Option>
                                   <InlineSelect.Option value="23">佛山</InlineSelect.Option>
                               </InlineSelect>
                           </Col>
                       </Row> <Row>
                           <Col col="1" className="text-right"><strong>区域：</strong></Col>
                           <Col col="11">
                               <InlineSelect value={this.state.zone} onChange={this.selectZoneHandle}>
                                   <InlineSelect.Option value="1">金山区</InlineSelect.Option>
                                   <InlineSelect.Option value="2">鼓楼区</InlineSelect.Option>
                                   <InlineSelect.Option value="3">朝阳区</InlineSelect.Option>
                                   <InlineSelect.Option value="4">马尾区</InlineSelect.Option>
                               </InlineSelect>
                           </Col>
                       </Row>
                    </Card>
                </Card>
            </div>
        );
    }
}

InlineSelectView.title = 'InlineSelect';