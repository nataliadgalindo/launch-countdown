/* eslint-disable react/prop-types */
function Counter({ time, timePoint }) {
  return (
    <div className="counter">
      <div className="time">
        <h2>{time}</h2>
        <div className="custom-hr"></div>
      </div>
      <h3>{timePoint}</h3>
    </div>
  )
}
export default Counter
