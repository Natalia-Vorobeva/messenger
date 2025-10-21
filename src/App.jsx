import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
	// const formData = new FormData()
	// 	formData.append('actionName', 'MessagesLoad')
	// 	formData.append('messageId', 0)
	// 	const requestOptions = {
	// 		method: 'POST',
	// 		body: formData,
	// 		referrerPolicy: "unsafe-url"
	// 	}

	// 	useEffect(() => {
	// 	fetch('http://a0830433.xsph.ru/', requestOptions)
	// 		.then(response => response.json())
	// 		.then(
	// 			(result) => {
	// 				console.log(result.Messages)
	// 			},
	// 			(error) => {
	// 				console.error('%cDATA', 'color: purple', 'Ошибка при запросе:', error)
	// 			}
	// 		)
	// }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
