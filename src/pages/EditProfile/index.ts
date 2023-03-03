import Block from '../../utils/Block'
import { ButtonBack } from '../../components/buttons/ButtonBack'
import { EditPassword } from '../../blocks/EditPassword'
import { EditProfile } from '../../blocks/EditProfile'
import { renderDOM } from '../../renderDOM'
import template from './edit-profile.hbs'

export class EditProfilePage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.ButtonBack = new ButtonBack({
      events: {
        click: () => renderDOM('profile'),
      },
    })
    this.children.EditProfile = new EditProfile()
  }

  render() {
    return this.compile(template, this.props)
  }
}
