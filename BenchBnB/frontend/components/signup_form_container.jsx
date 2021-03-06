import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "signup"
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user))
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;