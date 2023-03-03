import Block from '../../../utils/Block'
import template from './link-profile.hbs'

interface ButtonProps {
  type?: string
  label: string
  className?: string
  events: {
    click: () => void
  }
}

export class LinkProfile extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'div', ...props })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
