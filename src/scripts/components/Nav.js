import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import NavItem from './NavItem';
import NavLink from './NavLink';
import NavTitle from './NavTitle';
import NavCollapse from './NavCollapse';

/**
 * Nav 组件
 */
export default class Nav extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.state = {
            activeKey: this.props.activeKey,
        };

        //绑定上下文
        this.onSelectHandle = this.onSelectHandle.bind(this);
    }
    //props校验
    static propTypes ={
        type: PropTypes.string,
        stacked: PropTypes.bool,
        activeKey: PropTypes.any,
        onSelect: PropTypes.func,
    }
    //默认props
    static defaultProps = {
        stacked: false,
    }
    //选中回调
    onSelectHandle(eventKey){
        let { activeKey } = this.state,
            { onSelect } = this.props;

        if(activeKey === eventKey){
            return false;
        }
        this.setState({activeKey: eventKey});
        onSelect && onSelect(eventKey);
    }
    //返回type映射的class
    getTypeClassMap(type){
        let map = {
            tab: 'nav-tabs',
            pill: 'nav-pills',
            inline: 'nav-inline',
            'inline-bordered': 'nav-inline nav-inline-bordered',
        };

        return map[type]? map[type]: type;
    }
    //渲染
    render(){
        let { type, stacked, className, children, ...others } = this.props,
            { activeKey } = this.state,
            navStacked = stacked && type === 'pill' ? 'nav-stacked' : null,
            navStyle = this.getTypeClassMap(type);

        delete others.activeKey;
        children = React.Children.toArray(children);
        type && (children = children && children.map((child, index) => {
            let { eventKey } = child.props,
                options = {
                    key: index,
                    onClick: this.onSelectHandle
                };

            if(eventKey !== undefined){
                options.eventKey = eventKey;
                options.active = eventKey === activeKey;
            }

            return React.cloneElement(child, options);
        }));

        return(
            <ul {...others} className={classnames('nav', navStacked, navStyle, className)}>
                {children}
            </ul>
        );
    }
}

Nav.Item = NavItem;
Nav.Link = NavLink;
Nav.Title = NavTitle;
Nav.Collapse = NavCollapse;
