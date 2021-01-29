import './App.css';
import { Component } from 'react';
import TopBar from "./components/Topbar";
import Content from "./components/Content";
import bgImg from "./asset/bg.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    // const { windowWidth } = this.state;

    const styles = {
      purple: (opacity = 1) => `rgba(165, 55, 253, ${opacity})`,
      topBarHeight: 40,
      colorContent: "white"
    };

    return (
      <div
        style={{
          backgroundImage: "url(" + bgImg + ")",
          backgroundColor: styles.purple(1),
          minHeight: "100vh",
          position: "relative",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <TopBar styles={styles} />
        <Content styles={styles} />
      </div>
    );
  }
}

export default App;
