import React, {Component} from 'react'
import '../css/agentItems.scss'

export default class AgentItem extends Component {
  render() {
    return (
      <div className='agent-items'>
        <div className='agent-items__each'>
          <div className='agent-items__each__icon'></div>
          <div className='agent-items__each__detail-info'>
            <div className='agent-items__each__detail-info__up'>
              <span>bjstdmngbgr02.thoughtworks.com</span>
              <span className='agent-items__each__detail-info__vertical'>|</span>
              <span>idle</span>
              <span className='agent-items__each__detail-info__vertical'>|</span>
              <span>192.168.1.2</span>
              <span className='agent-items__each__detail-info__vertical'>|</span>
              <span>/var/lib/cruise-agent</span>
            </div>
            <div className='agent-items__each__detail-info__down'>
              <span className='agent-items__each__detail-info__specify-resource'>+ Specify Resources</span>
              <span className='agent-items__each__detail-info__vertical'>|</span>
              <span className='agent-items__each__detail-info__resource'>Resource:</span>
              <span className='agent-items__each__detail-info__machine'> ubuntu</span>
              <span className='agent-items__each__detail-info__machine-times'>&times;</span>
              <span className='agent-items__each__detail-info__machine'> firefox3</span>
              <span className='agent-items__each__detail-info__machine-times'>&times;</span>
              <span className='agent-items__each__detail-info__machine'> core-duo</span>
              <span className='agent-items__each__detail-info__machine-times'>&times;</span>
            </div>
          </div>
          <div className='agent-items__each__delay'> &oslash; Deny</div>
        </div>
      </div>
    )
  }
}
