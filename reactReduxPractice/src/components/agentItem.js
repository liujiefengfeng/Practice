import React, {Component} from 'react'

export default class AgentItem extends Component {
  render() {
    return (
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
    )
  }
}
