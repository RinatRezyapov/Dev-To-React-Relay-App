import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import logo from './logo.svg';
import './App.css';

const AppQuery = graphql`
  query AppQuery {
    greetings,
  }
`;

function App() {
  const data = useLazyLoadQuery(
    AppQuery,
    {},
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{data.greetings}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        and 
        <a
          className="App-link"
          href="https://relay.dev/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Relay
        </a>
      </header>
    </div>
  );
}

export default App;
