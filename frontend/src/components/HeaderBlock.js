import React, { Component } from "react";
import {Header} from './GridBlocks'
import logo from '../assets/logo-black.png';


export default class HeaderBlock extends Component{
	render(){
		return (
			<Header>
			<img src={logo} alt="Elead Mail"/>
			</Header>
		)
	}
}