import React from 'react';
const Contact = () => {
  return (
    <div className="p-4 m-4 border border-black">
      <h1>Contact Us</h1>
      <form action="">
        <input type="text" placeholder="Enter Your Name" className=" border border-violet-700"/>
        <input type="text" placeholder="Enter Your Number" className="ml-4 border border-violet-800" />
        <button className="ml-4 bg-gray-200 border border-black rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
