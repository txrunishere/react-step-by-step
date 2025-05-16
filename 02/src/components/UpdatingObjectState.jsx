import { useState } from "react";

const UpdatingObjectState = () => {
  const [data, setData] = useState({
    name: "Tarun",
    address: {
      city: "Delhi",
      country: "India",
    },
  });

  const handleName = (val) => {
    data.name = val
    setData({...data})
  };

  const handleCity = city => {
    data.address.city = city
    setData({...data, address: {...data.address, city}})
    console.log({...data, address: {...data.address, city}});
  }


  return (
    <div>
      <h1>Updating Object State</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => handleName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter City"
          onChange={(e) => handleCity(e.target.value)}
        />
        <h3>Name: {data.name}</h3>
        <h3>City: {data.address.city}</h3>
        <h3>Country: {data.address.country}</h3>
      </div>
    </div>
  );
};







// const obj = {
//   name: "Tarun",
//   address: {
//     city: "Rajasthan",
//     country: "India",
//     area: {
//       streetNo: 12545,
//       plotNo: 56,
//     },
//   },
// };

// const city = "Delhi";
// const random = "unnt447yi4ty7i4y7";

// const obj2 = {
//   ...obj,
//   address: {
//     ...obj.address,
//     country: "Nepal",
//     city,
//     random,
//     area: {
//       ...obj.address.area,
//       plotNo: 6969
//     },
//   },
// };

// console.log(obj);
// console.log(obj2);




export default UpdatingObjectState;
