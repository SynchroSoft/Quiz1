import React from "react";

import Calculator from "./Calculator";

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<header className="app-header">
					<div> Basic Calculator </div>
				</header>
				<Calculator />
			</div>
		);
	}
}
