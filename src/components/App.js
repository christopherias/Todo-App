import React, { Component } from "react"
import InputContainer from "./InputContainer"
import TodoContainer from "./TodoContainer"

const appStyle = {
	width: "100%",
	height: "100%",
	display: "grid",
	gridTemplateColumn: "1fr",
	gridTemplateRow: "3fr 7fr",
	gridRowGap: "20px"
}

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			entries: []
		}

		// wichtig, da Methoden standardmäßig keinen this-Kontext haben
		this.handleNewEntry = this.handleNewEntry.bind(this)
		this.handleDeleteEntry = this.handleDeleteEntry.bind(this)
	}

	handleNewEntry(entry) {
		let newEntryList = this.state.entries
		newEntryList.push(entry)

		this.setState(() => {		
			return {
				entries: newEntryList
			}
		})
	}

	handleDeleteEntry(id) {
		const newEntryList = this.state.entries.filter((entry, index) => {
			return index !== id
		})

		console.log(newEntryList)

		this.setState(() => {
			return {
				entries: newEntryList
			}
		})
	}

	render() {
		return (
			<div className="App" style={appStyle}>
				<InputContainer addEntry={this.handleNewEntry} />
				<TodoContainer entries={this.state.entries} deleteEntry={this.handleDeleteEntry} />
			</div>
		)
	}
}

export default App
