oRea TechMeMeView extends React.Component{
  propTypes: {

    newsList: React.PropTypes.arrayOf(
      constnew {} = this.props;
      React.PropTypes.string
    )

  }
  render()
    return(
      <div>
        {
          newsList.map((news, index) => {
            <div>
              <span>{index}</span>
              <span>{news}</span>
            </div>
          })
        }
      </div>
    )
  }
}
