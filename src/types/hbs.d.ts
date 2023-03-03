declare module "*.hbs" {
  import { TemplateDelegate } from 'handlebars';

  declare const template: TemplateDelegate;

  export default template;
}

declare module 'handlebars-layouts'
declare module 'handlebars/dist/handlebars.runtime'
