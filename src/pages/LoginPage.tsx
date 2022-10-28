function LoginPage() {
  return (
    <>
      <div className="bg-red-500 font-bold">login</div>
      <div className="flex">
        <div className="ml-auto mr-auto flex w-64 flex-col">
          <input type="text" placeholder="USERNAME" className="rounded-md border-2 p-1" />
          <input
            type="password"
            placeholder="PASSWORD"
            className="rounded-md border-2 p-1"
          />
          <button className=" bg-blue-400">OK</button>
        </div>
      </div>
    </>
  )
}

export default LoginPage
