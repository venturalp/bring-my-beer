import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.window.scrollTo = jest.fn()

global.window.matchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
})

global.window.sessionStorage = jest.fn()
global.window.sessionStorage.setItem = jest.fn()
global.window.sessionStorage.getItem = jest.fn()

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}))

Enzyme.configure({
  adapter: new Adapter(),
})
