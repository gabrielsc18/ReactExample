//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

//Assets
import logo from './img/logo.svg';
import './css/Header.css';

class Header extends Component {

	routes = [this.props.location.pathname];

	static propTypes = {
		title: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired
	};

	navigate(url){		
		console.log(url);
		this.routes.push(url);
		this.props.history.push(url);		
	}

	render() {		
		const { title, items } = this.props;
		return (
			<div className="Header">
				<header className="Logo">
					<img src={logo} alt="logo" />
					<p>
						{title}
					</p>
					<ul className="Menu">
						{items &&
							items.map((item, key) =>
								<li key={key} onClick={() => this.navigate(item.url)}>
								{item.title}
								</li>
							)}
					</ul>
					<a>{this.routes}</a>
				</header>
			</div>
		);
	}
}

export default withRouter(Header);
