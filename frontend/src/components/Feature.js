import React, { Component } from "react"
import {Padding} from 'styled-components-spacing'
import {Feature} from './GridBlocks'
import {Title4, Text} from './Typography.js'

export default class FeatureBlock extends Component{
	render(){
		return (
			<Feature><Padding all={5}>
				<Title4 attrs={{color:'#82C600',align:'center'}} >Service Lorem ipsum dolor sit amet</Title4>
				<Text attrs={{color:'#dfdfdf',align:'center'}} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </Text>
			</Padding></Feature>
		)
	}
}