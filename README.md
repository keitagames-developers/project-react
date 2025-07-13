<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=150&section=header&animation=twinkling" />
</div>

# Project-React
〜keitagamesのreactコンポーネントライブラリ〜
### こんにちはkeitaです。
### これは私達のサイトで使うと思うreactコンポーネントライブラリです。

# 使い方
インストール

```
npm install @keitagames/keitaui
```
サンプル
```javascript
//インストール npm install @keitagames/keitaui
import { default as Input } from '@keitagames/keitaui/src/components/Input'

import { default as Button } from '@keitagames/keitaui/src/components/Button'


function App() {
  
  function a(){

  }
  return (
    <>
      <h1>welcome to project-react</h1>
      <Button label="keitagames" onClick={a}></Button> 
      
      <Input p="keitagames..."></Input>
    </>
  )
}

export default App
```
