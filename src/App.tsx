import './App.css'
import AppRoutes from './Routes'
import { Provider } from 'react-redux';
import { store } from './app/store';
function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
