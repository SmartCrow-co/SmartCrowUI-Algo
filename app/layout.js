import '@/styles/globals.css'
import Hometwo from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'SmartCrow',
  description: 'The new future of escrow contracts!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Hometwo />
          {children}
        </main>
      </Provider>
    </body>
  </html>
  )
}
