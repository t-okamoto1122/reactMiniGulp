//React.createClass()でコンポーネントをつくり、Render()で指定したDOM要素にそのコンポーネントを
//レンダリングする。

var HelloMessage = React.createClass({displayName: "HelloMessage",
    render: function() {
      //Hello~~をつくるHelloMessageコンポーネントをつくる
        return React.createElement("div", null, "Hello ", this.props.name, "!");
    }
});

React.render(
  //上のHelloMessageコンポーネントを呼び出し
    React.createElement(HelloMessage, {name: "World"}),
    document.getElementById('container')
);
