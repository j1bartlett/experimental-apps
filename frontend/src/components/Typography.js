// Typography.js
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Title1 = styled.h1`
color: ${props=>props.attrs.color || "#000"};
text-align: ${props=>props.attrs.align || "left"};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 36px;
  font-weight: bold;
${breakpoint('tablet')`
  font-size: 48px;
    text-shadow: none;
  `}
  
  ${breakpoint('desktop')`
     font-size: 72px;
    text-shadow: none;
  `}
`
Title1.defaultProps = {
  attrs:{
    color:"#000",
    align:"left"
  }
}
export const Title2 = styled.h2`
color: ${props=>props.attrs.color || "#000"};
text-align: ${props=>props.attrs.align || "left"};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;



  ${breakpoint('tablet')`
    font-size: 36px;
 `}

  ${breakpoint('desktop')`
    font-size: 48px;
  `}
`
Title2.defaultProps = {
  attrs:{
    color:"#000",
    align:"left"
  }
}
export const Title3 = styled.h3`
color: ${props=>props.attrs.color || "#000"};
text-align: ${props=>props.attrs.align || "left"};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: bold;
 ${breakpoint('tablet')`
    font-size: 24px;
 `}

  ${breakpoint('desktop')`
    font-size: 48px;
    font-size: 36px;
  `}
`
Title3.defaultProps = {
  attrs:{
    color:"#000",
    align:"left"
  }
}
export const Title4 = styled.h4`
color: ${props=>props.attrs.color || "#000"};
text-align: ${props=>props.attrs.align || "left"};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: bold;

  ${breakpoint('tablet')`
    font-size: 20px;
  `}

  ${breakpoint('desktop')`
    font-size: 24px;
   `}
`
Title4.defaultProps = {
  attrs:{
    color:"#000",
    align:"left"
  }
}
export const Text = styled.p`
color: ${props=>props.attrs.color || "#000"};
text-align: ${props=>props.attrs.align || "left"};
  margin-top: 0;
  font-size: 16px;

  ${breakpoint('tablet')`
    font-size: 18px;
`}

 ${breakpoint('desktop')`
    font-size: 21px;
  `}
`
Text.defaultProps = {
  attrs:{
    color:"#000",
    align:"left"
  }
}