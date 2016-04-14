
//React.createClass()でコンポーネントをつくり、Render()で指定したDOM要素にそのコンポーネントを
//レンダリングする。


//React.createClass()でこんぽーねんとをつくり、Render()で指定したDOM要素にそのコンポーネントを
//レンダリングする。

// var HelloMessage = React.createClass({
//     render: function() {
//         return <div>Hello {this.props.name}!</div>;
//     }
// });
//
//
// React.render(
//     <HelloMessage name="World" />,
//     document.getElementById('container')
// );

var App = React.createClass({
  getInitialState: function() {
    return { message: ""};
  },
  updateMessage: function(e) {
    this.setState( { message: e.target.value });
  },

  render : function () {
    return (
      <div>
        <input type="text" onChange={this.updateMessage} />
        <p> {this.state.message}</p>
      </div>
    );
  }
});

 React.render(
   <App />,
   document.getElementById('app-container')
 );
