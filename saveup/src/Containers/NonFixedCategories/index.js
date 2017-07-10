import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import { RaisedButton } from 'material-ui';
import { fetchUser } from '../../Store/actions';
import LoadingIcon from '../../Components/LoadingIcon';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
	list: {
		width: 300,
		height: 490,
    overflowY: 'auto',
    marginLeft: 100,
	}
}

class NonFixedCategories extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
  }

 	render() {

    if (this.props.expenses === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

 		// filter non fixed categories
    let nonfixedCategories = [];
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        let newArray = [categoriesArray[i].id, categoriesArray[i].name];
        nonfixedCategories.push(newArray);
      }
    }

 		console.log(nonfixedCategories)
 		return(
      <div>
      <h2 style={styles.headline}>Variable Expense Categories</h2>
      <Link to='/addcategory'><RaisedButton 
        label="Add new category" 
        type="submit" /></Link>
      <List style={styles.list}>
 			{ nonfixedCategories.map((category) => {
 				return(
		      <ListItem primaryText={category[1]} key={category[0]}/>
		    );
      }) }
    	</List>
      </div>
 		)
 	}
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(NonFixedCategories);