import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { fetchUser, fetchExpenses, setSearchText } from '../../Store/actions';
import SelectField from 'material-ui/TextField';
import { RaisedButton, MenuItem } from 'material-ui';
import YearSavings from '../../Containers/Charts/YearSavings';
import YearForecast from '../../Containers/Charts/YearForecast';

const styles = {
  categories: {
    width: 250,
  },
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
      chart: '',
    }
  }

  handleChart = (event, index, value) => this.setState({ chart: value });

  chart = () => {
    switch (this.state.chart) {
      case 1:
        const chart = (
          <div>
            <YearForecast />
          </div>
        )
      default:
        return (
          <div>
            <YearSavings />
          </div>
        )
    }
  } 

  render() {
    return (
        <div>
          <h3>Search chart</h3>
          <SelectField
              floatingLabelText="Category"
              style={styles.categories}
              value={this.state.chart}
              onChange={this.handleChart}>
            <MenuItem value={1} primaryText="Year - to Present" />
            <MenuItem value={2} primaryText="Annual Forecast" />
            <MenuItem value={3} primaryText="Annual Categories" />
            <MenuItem value={4} primaryText="Current Month" />
            <MenuItem value={5} primaryText="Last Mont" />
          </SelectField>
          <div>
          { () => this.chart() }
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

// connect component to get dispatch()
export default connect(mapStateToProps)(Search);