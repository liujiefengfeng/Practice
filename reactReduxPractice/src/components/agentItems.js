import React, {Component} from 'react'
import '../css/agentItems.scss'

export default class AgentItem extends Component {
  render() {
    return (
      <div className='agent-items'>
        <div className='agent-items__each'>
          <div className='agent-items__each__icon'></div>
          <div className='agent-items__each__detail-info'>
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
