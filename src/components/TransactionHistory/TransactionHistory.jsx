import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistoryTable}>
    <thead className={css.headersRow}>
      <tr className={css.valuesRow}>
        <th className={css.columnHeader}>Type</th>
        <th className={css.columnHeader}>Amount</th>
        <th className={css.columnHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      
      {items.map(item => (
        <tr key={item.id} className={css.valuesRow}>
          <td >{item.type}</td>
          <td >{item.amount}</td>
          <td >{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};