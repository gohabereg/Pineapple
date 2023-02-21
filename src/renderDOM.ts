//pages
import { EditPasswordPage } from './pages/EditPassword'
import { EditProfilePage } from './pages/EditProfile'
import { ErrorServerPage } from './pages/ErrorServer'
import { LoginPage } from './pages/Login'
import { MessagePage } from './pages/Message'
import { ModalsPage } from './pages/Modals'
import { NotFoundPage } from './pages/NotFound'
import { ProfilePage } from './pages/Profile'
import { RegistrationPage } from './pages/Registration'
// mock
import contacts from './mock/contacts.json'
import user from './mock/user.json'

interface PagesI {
  login: typeof LoginPage
  registration: typeof RegistrationPage
  editPassword: typeof EditPasswordPage
  editProfile: typeof EditProfilePage
  errorServer: typeof ErrorServerPage
  notFound: typeof NotFoundPage
  profile: typeof ProfilePage
  message: typeof MessagePage
  modals: typeof ModalsPage
}

const ROUTES: PagesI = {
  login: LoginPage,
  registration: RegistrationPage,
  editPassword: EditPasswordPage,
  editProfile: EditProfilePage,
  errorServer: ErrorServerPage,
  notFound: NotFoundPage,
  profile: ProfilePage,
  message: MessagePage,
  modals: ModalsPage,
}

export function renderDOM(route: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!
  root.innerHTML = ''

  const PageComponent = ROUTES[route]
  const page = new PageComponent()

  if (page.element) {
    root.appendChild(page.element)
    page.dispatchComponentDidMount()
  }
}
