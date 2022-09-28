import React from "react";
import Header from "./Header";
//extend react component
//use this only if you needto use states
class App extends React.Component {
  state = {
    pageHeader: "Naming Contests",
  };

  componentDidMount() {
    //life cycle method-this guarantees that the DOM has been mounted to the brwser successfully
    console.log("did mount");
    debugger;
  }

  componentWillUnmount() {
    //life cycle mthod-the component is about to be unmounted
    console.log("will unmount");
    debugger;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader}></Header>
        <div>----</div>
      </div>
    );
  }
}

export default App;
