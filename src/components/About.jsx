// import React from 'react'
// import User from './User'

// const About = () => {
//   return (
//     <div>
//       <User name={"Piyush Raut"} address={"Prabuddha Nagar Masala Road Wardha Maharashtra."}/>
//     </div>
//   )
// }

// export default About

// Let's try to make this class based component
// import React from 'react'
// import User from './User'
// class About extends React.Component{
//   constructor(){
//     console.log("Parent Constructor is called")
//     super();
//   }

//   componentDidMount(){
//     console.log("Parent Component Did Mount is called")
//   }
//   render(){
//     console.log("Parent Render is called")
//     return <div>
//       <User name={"Children1"}/>
//       <User name={"Children2"}/>
//     </div>
//   }
// }

/*
 *  Let's try to make an API Call
 */

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",

        followers: 9,
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/piyushmraut");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    debugger;
    const { name, followers, avatar_url } = this.state.userInfo;
    return (
      <div className="m-4 border border-slate-600">
        <img
          src={avatar_url}
          alt="default"
          className="w-72 m-4 p-4 border border-red-400 animate-pulse transition-transform"
        />
        <h1 className="m-4 pl-4">{name}</h1>
        <p className="m-4 pl-4">{followers}</p>
      </div>
    );
  }
}
export default About;
