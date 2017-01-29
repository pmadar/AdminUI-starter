import { connect } from 'react-redux'
import ViewTemplate from '../components/ViewTemplate'
import { testSaga } from '../actions'

const mapStateToProps = state => ({})

const ViewTemplateContainer = connect(
  mapStateToProps,
  { testSaga }
)(ViewTemplate)

export default ViewTemplateContainer
