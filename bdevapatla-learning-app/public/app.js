// function Clock(props){
//   return (
//       <div>
//         <h1>Hello, World!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//   );
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {date:new Date()};
  }

  //Life cycle hook
  //You should be thorough with fat-arrow
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

//Life cycle hook
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
