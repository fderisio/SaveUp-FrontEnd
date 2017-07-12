import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import MenuItem from 'material-ui/MenuItem';
import { fetchUser, fetchExpenses, setCategory, setPayment, setSearchText } from '../../Store/actions';
import LoadingIcon from '../../Components/LoadingIcon';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';

const styles = {
  categories: {
    width: 250,
  },
  selectPayment: {
    width: 250,
  },
  button: {
    float: 'left',
    marginLeft: 150,
  }
}

class Filters extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  constructor(props) {
    super(props)
    this.state = {
      category: '',
      payment: '',
      text: '',
    }
  }

  handleCategory = (event, index, value) => this.setState({ category: value });
  handlePayment = (event, index, value) => this.setState({ payment: value });
  handleText = (e) => this.setState({ text: e.currentTarget.value }); 

  search = (e) => {
    e.preventDefault();
    if (this.state.category > 0) {
      console.log('hola')
      const action = setCategory(this.state.category);
      this.props.dispatch(action);
    }
    if (this.state.payment > 0) {
      const action = setPayment(this.state.payment);
      this.props.dispatch(action);
    }
    if (this.state.text.length > 0) {
      const action = setSearchText(this.state.text);
      this.props.dispatch(action);
    }
  }

  render() {
    console.log(this.state)
    /* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */

    // filter non fixed categories to display as a SelectField
    let categories = [];
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        categories.push(
          <MenuItem 
            value={categoriesArray[i].id} 
            key={categoriesArray[i].id} 
            primaryText={`${categoriesArray[i].name}`} />
        );
      }
    }

    // payment methods list to display using SelectField
    let paymethods = [];
    const paymethodsArray = this.props.currentUser.paymethods;
    for (let i=0; i<paymethodsArray.length; i++) {
      paymethods.push(
        <MenuItem 
          value={paymethodsArray[i].id} 
          key={paymethodsArray[i].id} 
          primaryText={`${paymethodsArray[i].name}`} />
      );
    }


    /* ---- RENDER FILTERS ---- */
    return (
        <div>
          <h4><b>Filter</b></h4>
            <SelectField
              floatingLabelText="Category"
              style={styles.categories}
              value={this.state.category}
              onChange={this.handleCategory}>
              {categories}
            </SelectField>
            <SelectField
              floatingLabelText="Payment"
              style={styles.selectPayment}
              value={this.state.payment}
              onChange={this.handlePayment}>
              {paymethods}
            </SelectField>
            <TextField 
              hintText="Search" 
              floatingLabelText="Search" 
              style={{ width: 250 }}
              onChange={this.handleText} />
            <br/><br/>
            <RaisedButton label="Search" type="submit" style={styles.button} onClick={this.search}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Filters);