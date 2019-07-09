import React, { Component } from "react"
import Grid from 'styled-components-grid'
import {Footer} from './GridBlocks'
import {Title3, Text} from './Typography.js'


export default class FooterBlock extends Component{
	render(){
		return (
			<Footer>
			<Grid.Unit size={4 / 6}>
				<Title3 attrs={{color:'#82C600',align:'center'}} >Service Lorem ipsum dolor sit amet</Title3>
				<Text attrs={{color:'#999',align:'center'}} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </Text>
			</Grid.Unit>
			</Footer>
		)
	}
}