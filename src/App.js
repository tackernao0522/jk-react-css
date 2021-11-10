import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}

export default App;
