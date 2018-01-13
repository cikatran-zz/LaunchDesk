import Person from './Person'
import {connect} from 'react-redux';
import {getPerson} from './action/getPersonAction'
function mapStateToProps (state) {
  return {
    person: state.person,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPerson: (name) => dispatch(getPerson(name)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);