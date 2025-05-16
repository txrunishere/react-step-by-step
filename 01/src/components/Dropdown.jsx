import { useEffect, useState } from "react"

const Dropdown = () => {
  const [city, setCity] = useState('India')

  return (
    <div>
      <h1>Handle Dropdown in React JS</h1>
      <div>
        <h4>Select Location: {city}</h4>
        <select onChange={e => setCity(e.target.value)} defaultValue={"India"}>
          <option value="London">London</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
        </select>
      </div>
    </div>
  )
}





export const ComplexDropdown = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchOptions = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const jsonData = await fetchData.json();
      setOptions(jsonData);
    };
    fetchOptions();
  }, []);

  return (
    <div>
      <h3>Selected Album: {selectedOption}</h3>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {options.map(({ id, title }) => (
          <option key={id} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};




export default Dropdown