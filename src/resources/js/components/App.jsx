import ReactDOM from 'react-dom';
import { MainGoogleMap } from './maps/MainGoogleMap';

function App() {
  const GoogleApiKey = appDom?.dataset.googleApiKey;

  return (
    <>
      <MainGoogleMap GoogleApiKey={GoogleApiKey} />
    </>
  );
}

const appDom = document.getElementById('app');
if (appDom) {
  const app = ReactDOM.createRoot(appDom);
  app.render(<App />);
}

export default App;

