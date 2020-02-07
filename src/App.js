import React from "react";

import Calculator from "./Calculator";

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div> Basic Calculator </div>
				</header>
				<Calculator />
			</div>
		);
	}
}
