import Block from '../../utils/Block'
import { Button } from '../../components/buttons/Button'
import { Input } from '../../components/fields/Input'
import { renderDOM } from '../../renderDOM'
import template from './registration.hbs'

export class RegistrationPage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.inputEmail = new Input({
      id: 'email',
      name: 'email',
      type: 'text',
      maxLength: '50',
      placeholder: 'Почта',
    })
    this.children.inputLogin = new Input({
      id: 'login',
      name: 'login',
      type: 'text',
      maxLength: '50',
      placeholder: 'Логин',
    })
    this.children.inputFirstName = new Input({
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      maxLength: '50',
      placeholder: 'Имя',
    })
    this.children.inputLastName = new Input({
      id: 'secondName',
      name: 'secondName',
      type: 'text',
      maxLength: '50',
      placeholder: 'Фамилия',
    })
    this.children.inputPhone = new Input({
      id: 'phone',
      name: 'phone',
      type: 'text',
      maxLength: '50',
      placeholder: 'Телефон',
    })
    this.children.newPassword = new Input({
      id: 'newPassword',
      name: 'newPassword',
      type: 'password',
      maxLength: '50',
      placeholder: 'Пароль',
    })
    this.children.newPasswordTwo = new Input({
      id: 'newPasswordTwo',
      name: 'newPasswordTwo',
      type: 'password',
      maxLength: '50',
      placeholder: 'Пароль (еще раз)',
    })
    this.children.buttonRegistration = new Button({
      label: 'Зарегистрироваться',
      type: "onsubmit",
      className: "button button_blue f-normal",
      events: {
        click: () => this.onSubmit(),
      },
    })
    this.children.buttonNextLogin = new Button({
      label: 'Войти',
      className: 'button button_blue f-normal btn-white',
      events: {
        click: () => this.onLogin(),
      },
    })
  }
  

  onSubmit() {
    renderDOM('message')
  }

  onLogin() {
    renderDOM('login')
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
