import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
  transition: all 1s ease-in-out;
}
img, figure{
  -webkit-user-drag: none;

}

*::selection{
  background-color: ${({ theme }) => theme.colors.third};
  color:${({ theme }) => theme.colors.secondary}
}

#root, body{
  overflow-x: hidden;
}

#svgWrapper{
  position: absolute;
  top: 28rem;
  margin-left:4vw;
  svg{
    width: 96vw;
  }
}

h1{
  font-size:2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing:0.22rem;
}
h2{
  font-size:1rem;
  color: ${({ theme }) => theme.colors.primary};
}
p{
  font-size: 1rem;
  font-weight: 100;
  line-height: 150%;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.basic};
  
}


`;

export default GlobalStyles;
