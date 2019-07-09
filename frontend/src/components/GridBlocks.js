import styled from "styled-components";
import { grid } from "styled-components-grid";

export const Header = styled.header`
	${grid({halign: 'center'})}
	background-color:#82C600;
	min-height:50px;
`;
export const Feature = styled.div`
	${grid.unit({ size: { tablet: 1 / 2 } })}
`;
export const Section = styled.section`
${grid({halign: 'center'})}
background-img
min-height:100vh;
`
export const Footer = styled.footer`
	${grid({halign: 'center'})}
	border-top:20px solid #82C600;
	background-color:#1D1D1B;
	min-height:300px;
`
export const Main = styled.main`
	padding-bottom: 1em;
`;