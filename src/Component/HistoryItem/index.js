import './index.css'

const HistoryItem = props => {
  const {eachItem, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem
  const deleteResult = () => {
    onDelete(id)
  }
  return (
    <li className="contain-container">
      <div className="history-details">
        <p>{timeAccessed}</p>
        <div className="site-details">
          <div className="site-image-container">
            <img src={logoUrl} className="site-image" alt="domain logo" />
          </div>
          <div className="site-name">
            <div className="more-details">
              <p className="paragraph">{title}</p>
              <p className="site-url">{domainUrl}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="delete-image">
        <button onClick={deleteResult} type="button" className="btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
