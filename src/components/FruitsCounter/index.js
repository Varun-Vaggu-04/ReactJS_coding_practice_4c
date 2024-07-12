// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  onEatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="background-container">
        <div className="inner-container">
          <h1>
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>
          <div className="images-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.onEatMango}>
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.onEatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
