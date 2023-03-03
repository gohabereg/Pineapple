import Block from '../../utils/Block'
import { Button } from '../../components/buttons/Button'
import { Input } from '../../components/fields/Input'
import { renderDOM } from '../../renderDOM'
import template from './login.hbs'

export class LoginPage extends Block {
  constructor() {
    super({})
  }

  _componentDidMount(): void {
    console.log('This page Login')
  }

  init() {
    this.children.Login = new Input({
      id: 'login',
      name: 'login',
      type: 'text',
      maxLength: '50',
      placeholder: 'Логин',
    })
    this.children.Password = new Input({
      id: 'password',
      name: 'password',
      type: 'password',
      maxLength: '50',
      placeholder: 'Пароль',
    })
    this.children.ButtonLogin = new Button({
      className: 'button button_blue f-normal',
      label: 'Авторизоваться',
      type: 'submit',
      events: {
        click: () => {
          this.onSubmit()
        },
      },
    })
    this.children.ButtonNextRegistration = new Button({
      label: 'Нет аккаунта?',
      className: 'button button_blue f-normal btn-white',
      events: {
        click: () => this.onRegistration(),
      },
    })
    this.children.NotFound = new Button({
      label: '404',
      className: 'button button_blue f-normal btn-white',
      events: {
        click: () => renderDOM('notFound'),
      },
    })
    this.children.ErrorServer = new Button({
      label: '500',
      className: 'button button_blue f-normal btn-white',
      events: {
        click: () => renderDOM('errorServer'),
      },
    })
  }

  onSubmit() {
    const values = Object.values(this.children)
      .filter((child) => child instanceof Input)
      .map((child) => [(child as Input).getName(), (child as Input).getValue()])
    const data = Object.fromEntries(values)
    console.log(data)
    renderDOM('message')
  }

  onRegistration() {
    renderDOM('registration')
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
