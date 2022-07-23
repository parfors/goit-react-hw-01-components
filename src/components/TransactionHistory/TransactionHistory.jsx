import PropTypes from 'prop-types'

const TransactionHistory = ({ transactions }) => {
    return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
        {transactions.map(transaction => {
    return <tr key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
    </tr>})}
    
  </tbody>
</table>
}

export default TransactionHistory

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
}