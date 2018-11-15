import * as React from 'react'
interface Props {
  name: string
  onClick: () => void
}

export class Button extends React.Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.name}</button>
      </div>
    )
  }
}
