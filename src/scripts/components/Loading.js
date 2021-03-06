import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import LoadingAddon from './LoadingAddon';

let _loading = undefined,
    _startDate = undefined,
    _endDate = undefined,
    _duration = 1000;

/**
 * Loading组件.
 */
export default class Loading extends Component{
    /**
     * 初始信息.
     */
    constructor(props, context){
        super(props, context);
        _loading = this;

        props.duration && (_duration = props.duration);
        this.state = {
            show: false
        };

        this.hideHandle = this.hideHandle.bind(this);
    }
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //类型
        type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
        //加载文本
        loadingMsg: PropTypes.string,
        //可关闭
        closeable: PropTypes.bool
    }
    //默认props
    static defaultProps = {
        type: 'cyclone',
        closeable: false,
        loadingMsg: '加载中'
    }
    /**
     * 关闭loading.
     */
    hideHandle(){
        let { closeable } = this.props;

        closeable && this.setState({
            show: false
        });
    }
    //渲染
    render(){
        let { type, loadingMsg } = this.props,
            { show } = this.state;

        return (
            <div className={classnames('loading-mask', {invisible: !show})} onClick={this.hideHandle}>
                <LoadingAddon type={type} show={show} loadingMsg={loadingMsg}/>
            </div>
        );
    }
}

Loading.Addon = LoadingAddon;
Loading.show = () => {
    _startDate = new Date();
    _loading.setState({
        show: true
    });
};

Loading.hide = () => {
    _endDate = new Date();
    if(_endDate - _startDate < _duration){
        setTimeout(() => {
            _loading.setState({
                show: false
            });
        }, (_duration - (_endDate - _startDate)));

        return false;
    }

    _loading.setState({
        show: false
    });
};
