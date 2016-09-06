import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Link } from 'react-router';

import reducers from 'reducers/index';
import PageHeader from '../components/pageHeader';
import AgentItem from '../components/agentItems';
import '../css/app.scss';
import { filterTab } from '../js/actions'

class Application extends Component {

  constructor(props) {
    super(props);
  }

  _onClickTab(tabBar) {
    const {onTabClick} = this.props;
    onTabClick(tabBar);
  }

  _renderTabBarTitle() {
    const { activeBar } = this.props;
    return activeBar === 'AGENTS' ?
      (
        <div className='tab-bar__title'>
          <span className='tab-bar__title--agents'>Agents</span>
          <span className='tab-bar__title--all'>All</span>
          <span className='tab-bar__title--physical'>Physical</span>
          <span className='tab-bar__title--virtual'>Virtual</span>
        </div>
      ):
      (
        <div className='tab-bar__title'>
          need to refactor
        </div>
      )
  }

  render() {
    const { activeBar } = this.props;
    return (
      <div className='app__application'>
        <PageHeader />
        <div>
          <div className='tab-bar'>
            <span className={classNames({'tab-bar__active': activeBar==='DASHBOARD'})} onClick={this._onClickTab.bind(this, 'DASHBOARD')}>DASHBOARD</span>
            <span className={classNames({'tab-bar__active': activeBar==='MYCRUISE'})} onClick={this._onClickTab.bind(this, 'MYCRUISE')}>MY CRUISE</span>
            <span className={classNames({'tab-bar__active': activeBar==='AGENTS'})} onClick={this._onClickTab.bind(this, 'AGENTS')}>AGENTS</span>
            <span className={classNames({'tab-bar__active': activeBar==='HELP'})} onClick={this._onClickTab.bind(this, 'HELP')}>HELP</span>
          </div>
          <div>
            {
              this._renderTabBarTitle()
            }
            <div className='tab-content'>
              <AgentItem />
              <div className='tab-content__info'>
                <div>
                  <div>Summary</div>
                  <div>building</div>
                  <div>idle</div>
                </div>
                <div>
                  <div>History</div>
                  <div>bjstdmngbgr02/Acceptance_test</div>
                  <div>bjstdmngbgr02/Acceptance_test</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="welcome">welcome</Link>
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  activeBar: PropTypes.string,
  onTabClick: PropTypes.func
}

module.exports = Application;