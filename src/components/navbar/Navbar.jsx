import { useState } from "react";
import { data } from "../../data";
import "./navbar.css";
import Card from "../card/Card";

const Navbar = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filtered = (search) => {
    const inputValue = value
      .trim()
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase();
    if (search.name.toLowerCase().includes(inputValue)) {
      return search;
    }
  };

  return (
    <nav className="text-center">
      <h1 className="h1">Filenin Sultanları</h1>

      <div className="mb-3">
        <input
          type="search"
          onChange={handleChange}
          className="input"
          id="search"
          placeholder="search player"
        />
      </div>

      {value ? (
        <main >
        <div className="card-div d-flex justify-content-center align-items-center m-auto bg-danger rounded-4">
          <div className="row d-flex justify-content-center ">
            {data.filter(filtered).map(({ name, img, statistics }) => (
              <Card key={name} name={name} img={img} statistics={statistics} />
            ))}
          </div>
        </div>
        </main>
      ) : (
        <main>
          <div className="card-div d-flex justify-content-center align-items-center m-auto">
            <div className="row d-flex justify-content-center">
              {data.map(({ name, img, statistics }) => (
                <Card
                  key={name}
                  name={name}
                  img={img}
                  statistics={statistics}
                />
              ))}
            </div>
          </div>
        </main>
      )}
    </nav>
  );
};

export default Navbar;
