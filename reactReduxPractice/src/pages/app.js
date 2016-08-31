import React, { Component } from 'react';
import classNames from 'classnames';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

import reducers from 'reducers/index';
import PageHeader from '../components/pageHeader';
import TabBar from '../components/tabBar';
import Welcome  from './welcome';
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
          <TabBar onClickTab={this._onClickTab} activeBar={activeBar}/>
          <div>
            {
              this._renderTabBarTitle()
            }
            <div className='tab-content'>
              <div className='tab-content__item'>
                <div className='tab-content__item--first'>
                  <div>icon</div>
                  <div>
                    <div>
                      <span>bjstdmngbgr02.thoughtworks.com</span>
                      <span>| idle</span>
                      <span>| 192.168.1.2</span>
                      <span>| /var/lib/cruise-agent</span>
                    </div>
                    <div>
                      <span>+ Specify Resources</span>
                      <span>| Resource:</span>
                      <span> ubuntu</span>
                      <span> firefox3</span>
                      <span> core-duo</span>
                      <span>Deny</span>
                    </div>
                  </div>
                </div>
              </div>
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
