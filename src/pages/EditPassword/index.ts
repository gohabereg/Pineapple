import Block from '../../utils/Block'
import { ButtonBack } from '../../components/buttons/ButtonBack'
import { EditPassword } from '../../blocks/EditPassword'
import { renderDOM } from '../../renderDOM'
import template from './edit-password.hbs'

export class EditPasswordPage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.ButtonBack = new ButtonBack({
      events: {
        click: () => renderDOM('profile'),
      },
    })
    this.children.EditPassword = new EditPassword()
  }
  
  render() {
    return this.compile(template, this.props)
  }
}
