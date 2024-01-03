import "./topBox.scss"
import {topDealUsers} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Road Projects</h1>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="username">{user.email}</span>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox