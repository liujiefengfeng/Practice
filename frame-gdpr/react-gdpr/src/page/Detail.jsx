import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Detail extends React.Component {
  render() {
    return (
      <div>
        <AppBar>
          <Tabs>
            <Tab label="Company Detail"/>
            <Tab label="Personal Information"/>
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

export default Detail;