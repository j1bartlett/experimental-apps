import React, { Component } from "react"

import {Section} from './GridBlocks'

import FeatureBlock from './Feature'

export default class SectionBlock extends Component{
	render(){
		return (
			<Section>
			
			<FeatureBlock/>
			<FeatureBlock/>

			</Section>
		)
	}
}