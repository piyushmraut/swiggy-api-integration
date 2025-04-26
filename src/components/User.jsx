// Let's try to write the code for class based component

// Let's try to understand that how can you pass props

import React from "react";
// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       count:0
//     }
//   }
//   render() {
//     const { name, address } = this.props;
//     return (
//       <div className="m-4 border border-black">
//         <div className="p-4 bg-red-200">
//           <p>{name}</p>
//           <p>{address}</p>
//           <p>{this.state.count}</p>
//           <button onClick={()=>{
//             this.setState({
//               count:this.state.count+1
//             })
//           }} className="border border-1 bg-red-500 text-yellow-100">Increase</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default User;

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Constructor is called ");
  }

  componentDidMount() {
    console.log(this.props.name + " ComponentDid Mount is Called");
  }
  render() {
    const { name } = this.props;
    console.log(name + " Render is Called");
    return <div></div>;
  }
}

export default User;
