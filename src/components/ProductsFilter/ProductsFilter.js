import React from "react";
import PropTypes from "prop-types";
// import { Slider } from "antd";

const ProductsFilter = (props) => {
  const { categories, categoryUpdate } = props;
  const OptionsList = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  //   const filterByPrice = (e =

  //   }

  return (
    <div className="collection-sort">
      {/* <label>Filter by Price:</label>
      <Slider range defaultValue={[0, 100]} /> */}
      <label>Filter by:</label>
      <select onChange={(event) => categoryUpdate(event.target.value)}>
        <option value="All Products">All Products</option>
        {OptionsList}
      </select>
    </div>
  );
};

ProductsFilter.propTypes = {
  categories: PropTypes.array,
  categoryUpdate: PropTypes.func,
};

export default ProductsFilter;

// import { Slider, Switch } from "antd";

// class Demo extends React.Component {
//   state = {
//     disabled: false,
//   };

//   handleDisabledChange = (disabled) => {
//     this.setState({ disabled });
//   };

//   render() {
//     const { disabled } = this.state;
//     return (
//       <>
//         <Slider defaultValue={30} disabled={disabled} />
//         <Slider range defaultValue={[20, 50]} disabled={disabled} />
//         Disabled:{" "}
//         <Switch
//           size="small"
//           checked={disabled}
//           onChange={this.handleDisabledChange}
//         />
//       </>
//     );
//   }
// }

// ReactDOM.render(<Demo />, mountNode);

// import { Slider } from 'antd';

// function onChange(value) {
//   console.log('onChange: ', value);
// }

// function onAfterChange(value) {
//   console.log('onAfterChange: ', value);
// }

// ReactDOM.render(
//   <>
//     <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
//     <Slider
//       range
//       step={10}
//       defaultValue={[20, 50]}
//       onChange={onChange}
//       onAfterChange={onAfterChange}
//     />
//   </>,
//   mountNode,
// );
