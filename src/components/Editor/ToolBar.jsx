import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    var { napchart } = this.props
    if (!napchart) {
      return null
    }

    return (
      <div className="ToolBar">
        <div className="level is-mobile">
          <div className="level-left"></div>
          <div className="level-center">
            <div className="level-item">
              <h2 className="subtitle is-6 has-text-grey">{this.props.title}</h2>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button
                onClick={napchart.history.back.bind(napchart)}
                className="button is-dark is-outlined is-small"
                disabled={!napchart.history.canIGoBack()}
                title={'Undo ' + napchart.history.canIGoBack()}
              >
                Undo
              </button>
            </div>
            <div className="level-item">
              <button
                onClick={napchart.history.forward.bind(napchart)}
                className="button is-dark is-outlined is-small"
                disabled={!napchart.history.canIGoForward()}
                title={'Redo ' + napchart.history.canIGoForward()}
              >
                Redo
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  changeColor = (color) => {
    var napchart = this.props.napchart
    napchart.changeColor(this.props.napchart.selectedElement, color)
    napchart.config.defaultColor = color
    this.forceUpdate()
  }
}
