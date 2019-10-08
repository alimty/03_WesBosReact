import React from 'react';


class StorePicker extends React.Component {
  render(){
    return (
      <React.Fragment>
      <form action="" className="store-selector">
        <h2> Please Enter A Store </h2>
        {/* {  block comment should be inside html tag } */}
        <input type="text" required palceholder="Store Name" />
        <button type="submit"> Visit Store →</button>
      </form>
      </React.Fragment>
    )
  }
}


export default StorePicker;