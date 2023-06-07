import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchProvider } from './context/search_context.jsx';
import { UserProvider } from './context/user_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </SearchProvider>
)
