import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Docker + React!</h2>
        <p>{`.env -> ${process.env.REACT_APP_NAME}`}</p>
        <a
          className='App-link'
          href='https://docs.docker.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Docker
        </a>
      </header>
    </div>
  );
};

export default App;
