import Block from '../../utils/Block'
import { Button } from '../../components/buttons/Button'
import { InputProfile } from '../../components/fields/InputProfile'
import { renderDOM } from '../../renderDOM'
import template from './edit-profile.hbs'
import user from '../../mock/user.json'
export class EditProfile extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.editEmail = new InputProfile({
      type: 'text',
      id: 'email',
      name: 'email',
      placeholder: 'Почта',
      value: user.email,
    })
    this.children.editLogin = new InputProfile({
      type: 'text',
      id: 'login',
      name: 'login',
      placeholder: 'Логин',
      value: user.login,
    })
    this.children.editFirstName = new InputProfile({
      type: 'text',
      id: 'first_name',
      name: 'first_name',
      placeholder: 'Имя',
      value: user.first_name,
    })
    this.children.editLastName = new InputProfile({
      type: 'text',
      id: 'second_name',
      name: 'second_name',
      placeholder: 'Фамилия',
      value: user.second_name,
    })
    this.children.editDisplayName = new InputProfile({
      type: 'text',
      id: 'display_name',
      name: 'display_name',
      placeholder: 'Имя в чате',
      value: user.display_name,
    })
    this.children.editPhone = new InputProfile({
      type: 'text',
      id: 'phone',
      name: 'phone',
      placeholder: '+7(123)123-34-56',
      value: '+7(123)123-34-56',
    })


    
    this.children.ButtonProfile = new Button({
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
