import * as React from 'react';
interface Props {
  handleChange: (value: string) => void;
  value: string;
}
export class SearchField extends React.Component<Props> {
  onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.props.handleChange(event.currentTarget.value);

  render() {
    return (
      <input type="text" onChange={this.onChange} value={this.props.value} />
    );
  }
}
