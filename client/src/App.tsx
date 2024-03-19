import './App.css'
import { Button } from '@/components/ui/button'
import { MyCard } from './components/MyCard'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <div className='app'>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MyCard />
      </ThemeProvider>
    </div>
  )
}

export default App
