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

## Styled JSX

<h5>styled-jsxのインストール</h5>

npmの場合<br>

`$ npm i -S styled-jsx`<br>
又は<br>
`$ npm install --save styled-jsx`<br>

yarnの場合<br>

`$ yarn add styled-jsx` <br>

<h5>$ npm run eject を実行する(yarnでもnpmでもどちらでも実行)</h5>

`pacckage.json`の編集<br>

```
"babel": {
    "presets": [
      "react-app"
    ],
      // 以下を追加
    "plugins": [
      "styled-jsx/babel"
    ]
},
```

`src/components/StyledJsx.jsx`を作成<br>

```
export const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p className="title">- Styled JSX -</p>
                <button className="button">FIGHT!!</button>
            </div>

            <style jsx="true">{`
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
                }
                .button:hover {
                    background-color: #46cdcf;
                    color: #fff;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}
```

`App.js`の編集<br>

```
import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx'; // 追記

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx /> // 追記
    </div>
  );
}

export default App;
```

## Styled Components

<h5>styled componentsのインストール</h5>

npmの場合<br>

`$ npm install --save styled-components`<br>

yarnの場合<br>

`$ yarn add styled-components`<br>

`src/components/StyledComponents.jsx`を作成(scssも有効)<br>

```
import styled from 'styled-components'

export const StyledComponents = () => {
    return (
        <SContainer>
            <STitle>- Styled Components -</STitle>
            <SButton>FIGHT!!</SButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const STitle = styled.p`
    margin: 0;
    color: #3d84a8;
`

const SButton = styled.button`
    background-color: #adedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #46cdcf;
        color: #fff;
        cursor: pointer;
}
`
```

`App.js`の編集<br>

```
import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents'; // 追記
import { StyledJsx } from './components/StyledJsx';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents /> // 追記
    </div>
  );
}

export default App;
```

## Emotion

+ `$ yarn add @emotion/react`の実行<br>

又は<br>

+ `$ npm install @emotion/react`の実行<br>

+ `$ npm install @emotion/styled`の実行<br>

又は<br>

+ `yarn add @emotion/styled`の実行<br>

<h5>src/components/Emotion.jsxを作成</h5>

```
/** @jsxRuntime classic */ // 必須追記
/** @jsx jsx */ // 必須追記
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"

export const Emotion = () => {
    const containerStyle = css`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `

    const titleStyle = css({
        margin: 0,
        color: '#3d84a8',
    })

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>- Emotion -</p>
            <SButton>FIGHT!!</SButton>
        </div>
    )
}

const SButton = styled.button`
background-color: #adedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #46cdcf;
        color: #fff;
        cursor: pointer;
`
```

`App.js`の編集<br>

```
import './App.css';
import { CssModules } from './components/CssModules';
import { Emotion } from './components/Emotion'; // 追記
import { InlineStyle } from './components/InlineStyle';
import { StyledComponents } from './components/StyledComponents';
import { StyledJsx } from './components/StyledJsx';

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion /> // 追記
    </div>
  );
}

export default App;
```