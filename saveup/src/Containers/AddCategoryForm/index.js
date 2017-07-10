import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style.css';
import LoadingIcon from '../../Components/LoadingIcon';
import { addCategoryAction, addExpenseAction } from '../../Store/actions';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import { RaisedButton } from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styles = {
  textField: {
    width: 350,
    float: 'left',
    marginLeft: 55,
  },
  checkbox: {
    float: 'left',
    marginLeft: 55,
    textAlign: 'left',
  },
  paper: {
    width: 450, 
    height: 330, 
    margin: 'auto',
    marginTop: 50,
  },
  button: {
    marginTop: 25,
    float: 'right',
    marginRight: 150,
  },
}

class AddCategory extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      fixed: false,
      company: '',
      total: '',
    }
  }

  // handle functions (changes the state)
  handleName = (e) => { this.setState({ name: e.currentTarget.value }); };
  handleFixed = (e) => { this.setState({ fixed: !(this.state.fixed) }); };
  handleCompany = (e) => { this.setState({ company: e.currentTarget.value }); };
  handleTotal = (e) => { this.setState({ total: parseFloat(e.currentTarget.value) }); };

  currentDate = () => {
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = yyyy + '-' + mm + '-' +  dd + "T00:00:00.000Z";
    return today;
  };



  addCategory = (e) => {
    e.preventDefault();
    console.log('inside category form clicked')
    const addCategoryAct = addCategoryAction(this.state.name, this.state.fixed);
    this.props.dispatch(addCategoryAct);

    // save fixed category as a expense
    const currentDate = Date.now();
    const text = "Fixed charge";
    const paymentId = 0;
    if (this.state.fixed === true) {
      this.props.dispatch(addExpenseAction(text, this.state.company, this.state.total, this.currentDate()));
    }
    this.props.history("/profile");
  };

  render() {

    /* ---- LOADING INFO ---- */
    if (this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */
    console.log('addCategory props', this.props);

    // filter non fixed categories
    let nonfixedCategories = [];
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        let newArray = [categoriesArray[i].id, categoriesArray[i].name];
        nonfixedCategories.push(newArray);
      }
    }

    // categories list to display using dropdownmenu
    const categories = [];
    for (let i = 0; i < nonfixedCategories.length; i++ ) {
      categories.push(nonfixedCategories[i]);
    }

    /* ---- RENDER ADD EXPENSE FORM ---- */

    return (
        <Paper zDepth={2} style={styles.paper}>
          <form>
            <TextField 
              hintText="Category name" 
              floatingLabelText="Category name" 
              style={styles.textField} 
              onChange={this.handleName} /><br/>
            <Checkbox
              label="Fixed category"
              style={styles.checkbox}
              onClick={this.handleFixed} />
            <TextField 
              disabled={!(this.state.fixed)}
              hintText="Company" 
              floatingLabelText="Category name" 
              style={styles.textField} 
              onChange={this.handleCompany} /><br/>
            <TextField 
              disabled={!(this.state.fixed)}
              hintText="Monthly cost in CHF" 
              floatingLabelText="Monthly cost in CHF" 
              maxLength={10}
              style={styles.textField} 
              onChange={this.handleTotal} />
            <p className="SmallNotes">*ONLY FOR FIXED CATEGORIES</p><br/><br/>
            <Link to="/profile"><RaisedButton 
              label="Add Category" 
              type="submit" 
              style={styles.button}
              onClick={this.addCategory} /></Link>
          </form>
        </Paper>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(AddCategory);