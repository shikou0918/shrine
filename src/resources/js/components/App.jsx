import ReactDOM from 'react-dom';

function App() {

  return (
    <>
      <h1>test</h1>
    </>
  );
}

const appDom = document.getElementById('app');
if (appDom) {
  const app = ReactDOM.createRoot(appDom);
  app.render(<App />);
}

export default App;

