## CSSの当て方

### Inline Styles

`src/components/InlineStyle.jsx`の作成<br>

```
export const InlineStyle = () => {
    const containerStyle = {
        border: "solid 2px #392eff",
        borderRadius: "20px",
        padding: "8px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
    const titleStyle = {
        margin: 0,
        color: "#3d84a8"
    }
    const buttonStyle = {
        backgroundColor: "#adedd8",
        border: "none",
        padding: "8px",
        borderRadius: "8px"
    }
    return (
        <div style={containerStyle}>
        <p style={titleStyle}>- Inline Styles -</p>
        <button style={buttonStyle}>FIGHT!!</button>
        </div>
    )
}
```

`App.js`の編集<br>

```
import './App.css';
import { InlineStyle } from './components/InlineStyle';

function App() {
  return (
    <div className="App">
      <InlineStyle />
    </div>
  );
}

export default App;
```
