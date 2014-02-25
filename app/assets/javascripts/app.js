require.config({
	baseUrl: "/assets/javascripts",
	paths: {
		react: "lib/react-0.9.0",
		text: "lib/require-text",
		jsx: "lib/require-jsx",
		JSXTransformer: "lib/JSXTransformer-0.9.0"
	},
	shim: {
		JSXTransformer: {
			exports: "JSXTransformer"
		}
	}
});

require(["react", "jsx!Component"],
	function (React, Component) {
		React.renderComponent(
			Component({text: "Hello from React component"}),
			document.body
		);
	}
);
