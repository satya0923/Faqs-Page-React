import {Component} from 'react'
import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr />
          <p className="ans-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(preState => ({
      isActive: !preState.isActive,
    }))
  }

  renderActiveButton = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? MINUS_IMAGE : PLUS_IMAGE
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button
        type="button"
        className="hide-and-show-btn"
        onClick={this.onToggleIsActive}
      >
        <img src={imageUrl} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="qns-container">
          <h1 className="qns-text">{questionText}</h1>
          {this.renderActiveButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
