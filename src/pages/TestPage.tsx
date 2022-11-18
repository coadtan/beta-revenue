type TestPageProps = {
  message: string
  age?: number
}

const TestPage = ({ message, age = 10 }: TestPageProps) => {
  return (
    <>
      <h1>Test Page</h1>
      <p>message: {message}</p>
    </>
  )
}

export default TestPage
