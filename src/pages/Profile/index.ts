import Block from '../../utils/Block'
import template from './profile.hbs'

export class ProfilePage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}