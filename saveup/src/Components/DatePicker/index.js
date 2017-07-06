import React from 'react';
import DatePicker from 'material-ui/DatePicker';

function disableRandomDates() {
  return date.getDay() === 0 || date.getDay() === 6;
}

const DatePicker = () => (
  <div>
    <DatePicker hintText="YYYY-MM-DD" shouldDisableDate={disableRandomDates} />
  </div>
);

export default DatePicker;

// export default class DatePickerExampleToggle extends React.Component {
//   constructor(props) {
//     super(props);

//     const minDate = new Date();
//     const maxDate = new Date();
//     minDate.setFullYear(minDate.getFullYear() - 1);
//     minDate.setHours(0, 0, 0, 0);
//     maxDate.setFullYear(maxDate.getFullYear() + 1);
//     maxDate.setHours(0, 0, 0, 0);

//     this.state = {
//       date: date,
//     };
//   }

// 	handleChangeMinDate = (event, date) => {
//     this.setState({
//       minDate: date,
//     });
//   };

//  render() {
//     return (
// 				<DatePicker
//             onChange={this.handleChangeMinDate}
//             floatingLabelText="Min Date"
//             defaultDate={this.state.minDate}
//             disableYearSelection={this.state.disableYearSelection}
//           />