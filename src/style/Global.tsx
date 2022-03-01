import { createGlobalStyle, useTheme } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
  }
  body {
    // background-image: url(../background.png);
    background-size: cover;
    background: #0A0A3C;
    height: auto;
    // img {
    //   height: auto;
    //   max-width: 100%;
    // }
  }
`

export default GlobalStyle
