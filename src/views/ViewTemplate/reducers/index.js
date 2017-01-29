const custom = (state = '', action) => {
  switch(action.type) {
    case 'TEST_SAGA':
      return 'test success'
    default:
      return state
  }
}

export default custom
