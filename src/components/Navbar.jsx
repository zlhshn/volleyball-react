import Card from "../components/Card";
import { useState } from "react";
import  {data} from "../data";

const Navbar = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filteredFunc = (player) => {
    const inputValue = value
      .trim()
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase();

    if (player.name.toLowerCase().includes(inputValue)) {
      return player;
    }}

    return (
      <div className="container text-center m-auto m-5 " >
        <div>
          <input placeholder="search player" className="mb-4 p-2"  type="search" onChange={handleChange} />
        </div>

        <div className="bg-danger m-auto rounded-4 row  gap-2 p-4 d-flex justify-content-center">
          {data.filter(filteredFunc).map(({ name, img, statistics }) => (
            <Card 
            key={name} 
            name={name} 
            img={img} 
            statistics={statistics}
             />
          ))}
        </div>
      </div>
    );
  };

export default Navbar;
