import { useState } from 'react'
import type { ReactNode } from 'react'
import { Route, HashRouter ,Routes} from 'react-router-dom'
import routes from '@/routes/index';
// import routes from '@/pages/home'

// import routes from '../src/routes/index';
function App() {

  function updateTitle(title: string) {
    document.title = title;
    var iframe = document.createElement('iframe')
    iframe.src = `/favicon.ico?t=${new Date().getTime()}`
    iframe.onload = function () {
      setTimeout(function () {
        iframe.remove();
      }, 0)
    }
    document.body.appendChild(iframe);
  }

  return (
    <HashRouter>
      <Routes>
      {
        routes.map((item,i)=>
          <Route key={i} path={item.path} element={<item.component /> as unknown as ReactNode} />
        )
      }
      </Routes>
    </HashRouter>
  )
}

export default App
