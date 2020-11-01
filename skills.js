const SKILLS = [
{ type: "HTML", level: 85 },
{ type: "CSS", level: 80 },
{ type: "Photoshop", level: 97 },
{ type: "Video Creation", level: 90 },
{ type: "Python", level: 78 },
{ type: "Robotics", level: 69 },
{ type: "Illustrator", level: 95 },
{ type: "Java Script", level: 39 },
{ type: "Java", level: 45 },
{ type: "C++", level: 23  }];


class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return (
      React.createElement("div", { id: "app", className: `container ${collapsed ? 'collapsed' : ''}` },
      React.createElement("h1", null, "My Skills"),
      React.createElement("hr", null),
      React.createElement("ul", { className: "skills" },
      skills.map((skill, index) =>
      React.createElement("li", {
        key: skill.type,
        style: { width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` } },

      React.createElement("p", null, skill.type, React.createElement("span", null, skill.level)))))));





  }}


ReactDOM.render(
React.createElement(SkillBars, { hue: "180", saturation: "40", skills: SKILLS }),
document.getElementById('root'));