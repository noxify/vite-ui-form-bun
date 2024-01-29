import { TestForm } from "@/components/test-form"

function App() {

  return (

    <div className="relative flex min-h-screen flex-col bg-background">

    <div className="sticky h-12 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      Navigation
    </div>
    <div className="flex-1 mx-auto w-72">
      <TestForm />
    </div>
    </div>
  )
}

export default App
