import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import AddExpense from '../../Containers/AddExpense';
import Footer from '../../Components/Footer';

const QuickAdd = () => (
    <div>
      <Navbar />
      <AddExpense />
      <Footer />
    </div>
);

export default QuickAdd;