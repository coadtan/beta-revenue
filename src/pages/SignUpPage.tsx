import { useState } from 'react'
import signUp from '/Users/milly/beta-revenue/src/assets/signUp.png'

function SignUpPage() {
  const [email, setEmail] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const signup = () => {
    console.log({ userName })
    console.log({ password })
    const a = 
  }
  return (
    <>
      <div className="h-screen bg-slate-600 p-40">
        <div className="rounded-xl bg-sky-50 p-36">
          <div className="m-auto flex w-auto flex-col space-y-2">
            <img src={signUp} className="m-auto w-40 py-8" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              placeholder="EMAIL"
              className="rounded-md border-2 border-slate-100 p-1 pl-3"
            />
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              value={userName}
              placeholder="USERNAME"
              className="rounded-md border-2 border-slate-100 p-1 pl-3"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="PASSWORD"
              className="rounded-md border-2 border-slate-100 p-1 pl-3"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="rounded-md border-2 border-slate-100 p-1 pl-3"
            />
            <div className="flex flex-row-reverse">
              <div className="grid justify-items-stretch">
                <button
                  onClick={() => signup()}
                  className="rounded-md border-2 border-slate-500 bg-slate-500 p-1 hover:border-amber-500 hover:bg-amber-500"
                >
                  <text className="text-white">Sign Up</text>
                </button>
              </div>
              <div>
                <button
                  onClick={() => cancel()}
                  className="rounded-md border-2 border-slate-300 bg-slate-300 p-1 hover:border-amber-400 hover:bg-amber-400"
                >
                  <text className="text-white">Cancel</text>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
