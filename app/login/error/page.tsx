const ErrorBoundry = ({ searchParams }: { searchParams: { error?: string } }) => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-primary">Error: {searchParams.error}</h1>
        <p className="text-lg my-6">this user with this email may already exist</p>
      </div>
    </div>
  )
}

export default ErrorBoundry
