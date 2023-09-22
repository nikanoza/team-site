import { Footer, Header, Routing } from "./layout";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-smoke">
        <Header />
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
