import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #F8F7FC;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
  }

  button {
      margin-right: 11px;
      border: 0;
      cursor: pointer;
      background-color: white;
  }


  ::-webkit-input-placeholder {
      color: #504F52;
      font-size: 14px;
    }
    /* Firefox 19+ */
  ::-moz-placeholder {
      color: #504F52;
    
  }
`
