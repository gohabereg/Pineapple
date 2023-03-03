import { AttachMessage } from '../../blocks/AttachMessage'
import Block from '../../utils/Block'
import { ButtonProfile } from '../../components/buttons/ButtonProfile'
import { EnterMessage } from '../../components/buttons/EnterMessage'
import { HeadBar } from '../../blocks/HeadBar'
import { InputMessage } from '../../components/fields/InputMessage'
import { InputSearch } from '../../components/fields/InputSearch'
import { renderDOM } from '../../renderDOM'
import template from './message.hbs'

export class MessagePage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.AttachMessage = new AttachMessage({})
    this.children.buttonProfile = new ButtonProfile({
      events: {
        click: () => renderDOM('profile'),
      },
    })
    this.children.HeadBar = new HeadBar({
      avatar: 'https://rg.ru/uploads/images/177/18/63/1000s.jpg',
      display_name: 'Ананас',
    })
    this.children.InputSearch = new InputSearch({
      id: 'search',
    })

    this.children.InputMessage = new InputMessage({
      id: 'message',
    })

    this.children.EnterMessage = new EnterMessage({
      events: {
        click: () => {
          const input = this.children.InputMessage as InputMessage
          const message = input.getValue()
          input.setValue('')
        },
      },
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
