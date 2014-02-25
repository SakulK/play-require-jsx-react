/**
 * @jsx React.DOM
 */
define(["react"], function (React) {
	"use strict";

	var Component = React.createClass({
		render: function () {
			return (
				<div>
					{this.props.text}
				</div>
				);
		}
	});

	return Component;
});