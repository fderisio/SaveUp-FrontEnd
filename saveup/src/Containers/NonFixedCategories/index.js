import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';

const styles = {
	list: {
		width: 300,
		height: 490,
    overflowY: 'auto',
    marginLeft: 100,
	}
}

class NonFixedCategories extends React.Component {

 	render() {
 		const user = this.props.currentUser.categories;

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
 			<List style={styles.list}>
 			{ nonfixedCategories.map((category) => {
 				return(
		      <ListItem primaryText={category[1]} key={category[0]}/>
		    );
      }) }
    	</List>
 		)
 	}
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(NonFixedCategories);