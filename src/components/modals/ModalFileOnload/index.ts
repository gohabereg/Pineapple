import Block from '../../../utils/Block'
import { Button } from '../../buttons/Button'
import { ModalWindowBack } from '../ModalWindowBack'
import template from './modal-file-onload.hbs'

interface ModalFileOnloadProps {
  type?: string
  state: boolean
  callbackOnload?: () => void
}

export class ModalFileOnload extends Block<ModalFileOnloadProps> {
  constructor(props: ModalFileOnloadProps) {
    super({ type: 'div', ...props })
  }

  init() {
    this.children.ModalWindowBack = new ModalWindowBack({
      events: {
        click: () => {
          this.onCancel()
        },
      },
    })
    this.children.Button = new Button({
      label: 'Поменять',
      className: 'button button_blue f-normal',
      type: 'submit',
      events: {
        click: () => {
          this.onClose()
        },
      },
    })
  }

  onCancel() {
    if (this.props.callbackOnload) this.props.callbackOnload()
  }

  onClose() {
    if (this.props.callbackOnload) this.props.callbackOnload()
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
