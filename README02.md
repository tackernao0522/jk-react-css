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
## CSS Modules

### node sassのインストール(以下3点を実行)

`$ yarn add node-sass`<br>

`$ npm install -s node sass`<br>

`$ yarn add node-sass`<br>

<h4>src/components/CssModules.jsxを作成</h4>

```
import classes from "./CssModules.module.scss"

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>- Css Modules -</p>
            <button className={classes.button}>FIGHT!!</button>
        </div>
    )
}
```

`src/components/CssModules.module.scss`を作成<br>

```
.container {
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.title {
    margin: 0;
    color: #3d84a8;
}
.button {
    background-color: #adedd8;
        border: none;
        padding: 8px;
        border-radius: 8px;
        &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
        }
}
```

`App.js`の編集<br>

```
import './App.css';
import { CssModules } from './components/CssModules'; // 追記
import { InlineStyle } from './components/InlineStyle';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules /> // 追記
    </div>
  );
}

export default App;
```
