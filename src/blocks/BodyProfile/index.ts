import Block from '../../utils/Block'
import { LinkProfile } from '../../components/buttons/LinkProfile'
import { renderDOM } from '../../renderDOM'
import template from './body-profile.hbs'

export class BodyProfile extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.buttonEditProfile = new LinkProfile({
      label: "Изменить данные",
      className: "btn-edit",
      events: {
        click: () => renderDOM('editProfile')
      }
    }) 
    this.children.buttonEditPassword = new LinkProfile({
      label: "Изменить пароль",
      className: "btn-edit",
      events: {
        click: () => renderDOM('editPassword')
      }
    }) 
    this.children.buttonExit = new LinkProfile({
      label: "Выйти",
      className: "btn-exit",
      events: {
        click: () => renderDOM('login')
      }
    })  
  }

  render() {
    return this.compile(template, this.props)
  }
}
