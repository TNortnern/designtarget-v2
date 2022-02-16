
export interface NavigationRoute {
  text: string
  to?: string
  action?: string
  class?: string
  guest?: boolean
  auth?: boolean
}
export const routes: NavigationRoute[] = [
  {
    text: 'Illustrations',
    to: '/collection/illustrations',
  },
  {
    text: 'Images',
    to: '/collection/images',
  },
  {
    text: 'Icons',
    to: '/collection/icons',
  },
]
export const secondaryRoutes: NavigationRoute[] = [
  {
    text: 'Login',
    to: '/login',
    guest: true,
  },
  {
    text: 'Sign Up',
    to: '/signup',
    class: 'btn-red',
    guest: true,
  },
]

export const dropdownRoutes: NavigationRoute[] = [
  {
    text: 'My Resources',
    to: '/myresources',
    auth: true,
  },
  {
    text: 'Logout',
    action: 'logout',
    auth: true,
  },
]
