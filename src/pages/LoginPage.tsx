import { useState } from 'react'

function LoginPage() {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const login = () => {
    console.log({ userName })
    console.log({ password })
  }
  return (
    <>
      <div className="bg-red-500 font-bold">login</div>
      <div className="flex">
        <div className="ml-auto mr-auto flex w-64 flex-col">
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            value={userName}
            placeholder="USERNAME"
            className="rounded-md border-2 p-1"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="PASSWORD"
            className="rounded-md border-2 p-1"
          />
          <button onClick={() => login()} className="bg-blue-400">
            OK
          </button>
        </div>
      </div>
    </>
  )
}

export default LoginPage
