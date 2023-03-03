import Block from '../../utils/Block'
import { Button } from '../../components/buttons/Button'
import { InputProfile } from '../../components/fields/InputProfile'
import { renderDOM } from '../../renderDOM'
import template from './edit-password.hbs'

export class EditPassword extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.oldPassword = new InputProfile({
      type: 'password',
      id: 'oldPassword',
      name: 'phone',
      placeholder: '•••••••••••',
    })
    this.children.newPassword = new InputProfile({
      type: 'password',
      id: 'newPassword',
      name: 'newPassword',
      placeholder: '•••••••••••',
    })
    this.children.newPasswordTwo = new InputProfile({
      type: 'password',
      id: 'newPasswordTwo',
      name: 'newPasswordTwo',
      placeholder: '•••••••••••',
    })
    this.children.buttonSave = new Button({
      label: 'Сохранить',
      className: "button button_blue f-normal",
      events: {
        click: () => renderDOM('profile'),
      },
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
