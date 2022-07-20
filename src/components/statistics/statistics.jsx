
const Statistics = ({title, stats}) => {
return <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
            <span className="label">{title}</span>
            <span className="percentage">{stats}</span>
    </li>
  </ul>
</section>
}

export default Statistics