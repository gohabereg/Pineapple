import Block from '../../../utils/Block'
import template from './input.hbs'

interface InputProps {
  name: string
  type?: string
  placeholder: string
  id: string
  maxLength: string
}

export class Input extends Block<InputProps> {
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
