import Block from '../../../utils/Block'
import template from './input-profile.hbs'

interface InputProps {
  type?: string
  id: string
  name: string
  placeholder?: string
  value?: string
}

export class InputProfile extends Block<InputProps> {
  constructor(props: InputProps) {
    super({ type: 'input', ...props })
  }

  public setValue(value: string) {
    return ((this.element as HTMLInputElement).value = value)
  }

  public getName() {
    return (this.element as HTMLInputElement).name
  }

  public getValue() {
    return (this.element as HTMLInputElement).value
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
