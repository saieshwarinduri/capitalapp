import {Component} from 'react'

import Options from '../options/index'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {stateid: 'NEW_DELHI'}

  onchangeValue = event => {
    console.log(event.target.value)
    this.setState({stateid: event.target.value})
  }

  render() {
    const {stateid} = this.state
    console.log(stateid)
    const list = countryAndCapitalsList.filter(each => each.id === stateid)

    return (
      <div className="mainContainer">
        <div className="smallContainer">
          <div>
            <h1 className="heading">Countries And Capitals</h1>
            <div className="capitalContainer">
              <select
                className="select_input"
                id="capital"
                onChange={this.onchangeValue}
              >
                {countryAndCapitalsList.map(eachItem => (
                  <Options capital={eachItem} key={eachItem.id} />
                ))}
              </select>
              <p className="captialLabel" htmlFor="capital">
                is capital of which country?
              </p>
            </div>
            <p className="couuntryName">{list[0].country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
