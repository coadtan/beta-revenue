import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import imageLogo from '/Users/milly/beta-revenue/src/assets/imageLogo.png'

function LoginPage() {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const login = () => {
    console.log({ userName })
    console.log({ password })
  }

  return (
    <>
      <div className="h-screen bg-slate-600 p-40">
        <div className="rounded-xl bg-sky-50 p-36">
          <div className="m-auto flex w-auto flex-col space-y-2">
            <img src={imageLogo} className="m-auto w-40 py-8" />
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
            <button
              onClick={() => login()}
              className="rounded-md border-2 border-slate-500 bg-slate-500 p-1 hover:border-amber-500 hover:bg-amber-500"
            >
              <text className="text-white">SIGN IN</text>
            </button>
            <div className="flex justify-between">
              <div>
                <Link
                  to="/signup"
                  className="text-slate-500 hover:text-amber-500 hover:underline"
                >
                  No account? Sign Up for free here!
                </Link>
              </div>
              <div>
                <Link
                  to="/forgotpassword"
                  className="text-slate-500 hover:text-amber-500 hover:underline"
                >
                  Forgot password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
