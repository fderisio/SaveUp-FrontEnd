import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { fetchUser, fetchExpenses, setSearchText } from '../../Store/actions';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';

const styles = {
  button: {
    float: 'left',
    marginLeft: 150,
  }
}

class Search extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  handleText = (e) => { 
    this.setState({ text: e.currentTarget.value }); 
    const action = setSearchText(this.state.text);
    this.props.dispatch(action);
  };

  render() {
    return (
        <div>
          <TextField 
              hintText="Search" 
              floatingLabelText="Search" 
              style={{ width: 250 }}
              onChange={this.handleText} />
          <br/><br/>
          <RaisedButton label="Search" type="submit" style={styles.button}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

// connect component to get dispatch()
export default connect(mapStateToProps)(Search);