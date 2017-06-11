import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Home from './Home';
import * as Actions from '../../actions';

const mapStateToProps = state => {
  return {
    items: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cartAction: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
