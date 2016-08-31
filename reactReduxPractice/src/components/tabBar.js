import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import '../css/tabBar.scss'

export default class TabBar extends Component {
  render () {
    const { onClickTab, activeBar } = this.props;
    return (
      <div className='tab-bar'>
        <span className={classNames({'tab-bar__active': activeBar==='dashboard'})} onClick={onClickTab.bind(this, 'dashboard')}>DASHBOARD</span>
        <span className={classNames({'tab-bar__active': activeBar==='mycruise'})} onClick={onClickTab.bind(this, 'mycruise')}>MY CRUISE</span>
        <span className={classNames({'tab-bar__active': activeBar==='agents'})} onClick={onClickTab.bind(this, 'agents')}>AGENTS</span>
        <span className={classNames({'tab-bar__active': activeBar==='help'})} onClick={onClickTab.bind(this, 'help')}>HELP</span>
      </div>
    )
  }
}

TabBar.propTypes = {
  onClickTab: PropTypes.func,
  activeBar: PropTypes.string
};