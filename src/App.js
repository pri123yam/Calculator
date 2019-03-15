import React, { Component } from 'react';
import Buton from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props)
	{
		super(props);
		this.state={
			exp:" ",
			val:0
		}
	}
	// num=(id)=>{
	// 	this.calc(id);
	// 	this.setState((prevState)=>{
	// 		return {
	// 			exp: prevState.exp + id,
	// 			val: prevState.val
	// 		}
	// 	})
	// }
	


	// this is a dynamic calculator function in which the parameter is id,
	//if id is defined it calculates the value, 
	//else it means equal sign is pressed. In that case it clears the expression.
	calc=(id)=>{
		if(this.state.exp==="reenter the value")
		this.state.exp="";
		var expN,valN;
		{
			if(typeof(id)!== 'undefined')
			{
				var a=this.state.exp;
				expN=this.state.exp + id;
				
				valN=eval(expN);
			}
			else
			{
				valN=eval(this.state.exp);
				expN="";
			}
		}
		this.setState(()=>{
			return {
					exp: expN,
					val: valN,
					op:0
				}
			});
	}

	//this function pushes an operator to the expression
	op=(id)=>{
		if(this.state.exp!=='reenter the value')
		{
			if(this.state.op===0){
				var a;
				if(this.state.exp.length===0 && this.state.val!==0)
				a=this.state.val+"";
				else 
				a=this.state.exp;
				this.setState(()=>{
					return {
							exp: a+id,
							val: this.state.val,
							op:1
						}
					});}
			else
			{
				this.setState(()=>{
					return {
							exp: "reenter the value",
							val: 0,
							op:0
						}
					});}
		}
		else
		this.clearr();
	}


	//this function deletes the last character in the expression
	del=()=>{
		if(this.state.exp.length===1)
		{
			this.clearr();
		}
		else
		{
			var a=this.state.exp;
			var str=a.substring(0,a.length-1);
			var b=str[str.length-1];
			a=0;
			if(b==='/' || b==='+' || b==='-' || b==='*' )
			a=1;
			{
				if(a===0)
				{
					this.setState(()=>{
						return {
							exp: str,
							val: eval(str),
							op:a
						}
					});
				}
				else
				{
					this.setState(()=>{
						return{
							exp:str,
							val: this.state.val,
							op:a
						}
					});
				}
			}
		}
	}
	//this function clears the entire state
	clearr=()=>{
		this.setState(()=>{
			return {
					exp: "",
					val: 0,
					op:0
				}
			});
	}
	render() {
		var keyval=[1,2,3,4,5,6,7,8,9,0];
		var keyop=['+','-','/','*','.'];
		var spe=['.','(',')'];
		return (
			<div className="App">
				
				<div className='Display'>
					
					<div className='Value'>
						<p>{this.state.val}</p>
					</div>
								
					<div className='Express'>
						<p>{this.state.exp}</p>
					</div>
				
				</div>


				<div className='keys'>
				{
					keyval.map((id)=>(
						<Buton data={id} click={()=>{this.calc(id)}}></Buton>
					))
				}
				<br></br><br></br>
				{
					keyop.map((id)=>(
						<Buton data={id} click={()=>{this.op(id)}}></Buton>
					))
				}
				<Buton data={'AC'} click={()=>{this.clearr()}}></Buton>
				<br></br><br></br>
				<Buton data={'='} click={()=>{this.calc()}}/>
				<Buton data={'<--'} click={()=>{this.del()}}/>
				</div>
			</div>
		);
	}
}

export default App;
/*{
	spe.map((id)=>(
		<Buton data={id} click={()=>{this.op(id)}}></Buton>
	))
}*/