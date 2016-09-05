const filterTab = (state = 'AGENTS', action) => {
  switch (action.type) {
    case 'FILTER_TAB':
      return action.tabBar
    default:
      return state
  }
};

export default filterTab
