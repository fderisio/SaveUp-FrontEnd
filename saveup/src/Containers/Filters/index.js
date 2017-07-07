import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { RaisedButton } from 'material-ui';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  categoriesmenu: {
    width: 250,
  },
  paymentmenu: {
    width: 250,
  },
  button: {
    float: 'left',
    marginLeft: 150,
  }
}

class Filters extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      category: 0,
    }
  }

  handleCategory = (event, index, value) => this.setState({ category: value });
  handleNotes = (e) => { this.setState({ notes: e.currentTarget.value }); };
  handleCompany = (e) => { this.setState({ company: e.currentTarget.value }); };
  handleDate = (e) => { this.setState({ expenseDate: e.currentTarget.value }); };
  handleTotal = (e) => { this.setState({ total: e.currentTarget.value }); };
  handlePayment = (event, index, value) => this.setState({ payment: value });

  addExpense = (e) => {
    e.preventDefault();
  };
  

  render() {

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */
    console.log('addExpense props', this.props);

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
    categories.push(<MenuItem value={0} key={0} primaryText={`All`} />);
    for (let i = 0; i < nonfixedCategories.length; i++ ) {
      categories.push(<MenuItem value={nonfixedCategories[i][0]} key={nonfixedCategories[i][0]} 
      primaryText={`${nonfixedCategories[i][1]}`} />);
    }
    
    // payment methods list to display using dropdownmenu
    let paymethods = [];
    categories.push(<MenuItem value={0} key={0} primaryText={`All`} />);
    const paymethodsArray = this.props.currentUser.paymethods;
    for (let i=0; i<paymethodsArray.length; i++) {
      paymethods.push(<MenuItem value={paymethodsArray[i].id} key={i} primaryText={`${paymethodsArray[i].name}`} />);
    }


    /* ---- RENDER FILTERS ---- */
    return (
        <div>
          <h4><b>Filter</b></h4>
            <DropDownMenu maxHeight={300} value={this.state.category} style={styles.categoriesmenu} onChange={this.handleCategory}>
              {categories}
            </DropDownMenu>
            <DropDownMenu maxHeight={300} value={this.state.payment} style={styles.paymentmenu} onChange={this.handlePayment}>
              {paymethods}
            </DropDownMenu>
            <br/><br/><br/>
            <RaisedButton label="Search" type="submit" style={styles.button}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Filters);