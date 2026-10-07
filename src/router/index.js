import { createElement } from 'react'
import { createBrowserRouter } from 'react-router'
import App from '../App'
import AboutPage from '../pages/About'
import FaqPage from '../pages/Faq'
import HomePage from '../pages/Home'
import NotFoundPage from '../pages/NotFound'
import TestimonyPage from '../pages/Testimony'

export const router = createBrowserRouter([
  {
    path: '/',
    element: createElement(App),
    children: [
      { index: true, element: createElement(HomePage) },
      { path: 'about', element: createElement(AboutPage) },
      { path: 'testimony', element: createElement(TestimonyPage) },
      { path: 'faq', element: createElement(FaqPage) },
      { path: '*', element: createElement(NotFoundPage) },
    ],
  },
])
