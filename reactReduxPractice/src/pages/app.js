import React, { Component } from 'react';
import classNames from 'classnames';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

import reducers from 'reducers/index';
import PageHeader from '../components/pageHeader';
import Welcome  from './welcome';
import AgentItem from '../components/agentItem';
import '../css/app.scss';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBar: 'agents'
    };
  }

  _onClickTab(tabBar) {
    this.setState({
      activeBar: tabBar
    })
  }

  _renderTabBarTitle() {
    const { activeBar } = this.state;

    return activeBar === 'agents' ?
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
    const { activeBar } = this.state;
    return (
      <div className='app__application'>
        <PageHeader />
        <div>
          <div className='tab-bar'>
            <span className={classNames({'tab-bar__active': activeBar==='dashboard'})} onClick={this._onClickTab.bind(this, 'dashboard')}>DASHBOARD</span>
            <span className={classNames({'tab-bar__active': activeBar==='mycruise'})} onClick={this._onClickTab.bind(this, 'mycruise')}>MY CRUISE</span>
            <span className={classNames({'tab-bar__active': activeBar==='agents'})} onClick={this._onClickTab.bind(this, 'agents')}>AGENTS</span>
            <span className={classNames({'tab-bar__active': activeBar==='help'})} onClick={this._onClickTab.bind(this, 'help')}>HELP</span>
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

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}></Route>
      <Route path="welcome" component={Welcome}></Route>
    </Router>
  </Provider>
), document.getElementById('app'));
