import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

class App extends Component {
  render() {
    return (
    <div className="container">
      <div className="main">Hello Parcel!</div>
      <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad incidunt deserunt ex, mollitia molestiae placeat nihil eveniet nostrum beatae enim neque natus autem repudiandae sequi distinctio quam amet ipsam.</div>
    </div>
    )
  }
}

const mountNode = document.getElementById("app")
ReactDOM.render(
  <App />,
  mountNode
)