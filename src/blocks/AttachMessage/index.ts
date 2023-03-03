import Block from '../../utils/Block'
import { ButtonAttach } from '../../components/buttons/ButtonAttach'
import { ButtonFile } from '../../components/buttons/ButtonFile'
import { ButtonImages } from '../../components/buttons/ButtonImages'
import { ButtonLocations } from '../../components/buttons/ButtonLocations'
import template from './attach-message.hbs'

interface AttachMessageProps {
  type?: string
  stateOpen?: boolean
}

export class AttachMessage extends Block<AttachMessageProps> {
  constructor(props: AttachMessageProps) {
    super({
      type: 'div',
      ...props,
      stateOpen: false,
    })
  }

  init() {
    this.children.ButtonAttach = new ButtonAttach({
      events: {
        click: () => this.openMenu(),
      },
    })
    this.children.ButtonImages = new ButtonImages({
      label: 'Фото или Видео',
      events: {
        click: () => {
          console.log('Фото или Видео')
          this.openMenu()
        },
      },
    })
    this.children.ButtonFile = new ButtonFile({
      label: 'Файл',
      events: {
        click: () => {
          console.log('Файл')
          this.openMenu()
        },
      },
    })
    this.children.ButtonLocations = new ButtonLocations({
      label: 'Локация',
      events: {
        click: () => {
          console.log('Локация')
          this.openMenu()
        },
      },
    })
  }

  openMenu() {
    this.props.stateOpen = !this.props.stateOpen
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
