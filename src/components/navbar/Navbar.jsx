import { useState } from "react";
import { data } from "../../data";
import NavStyled from "./navbar.module.css";
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
      <h1 className={NavStyled.h1}>Filenin Sultanları</h1>

      <div className="mb-3">
        <input
          type="search"
          onChange={handleChange}
          className={NavStyled.input}
          id="search"
          placeholder="search player"
        />
      </div>

      {value ? (
        <main>
        <div className={NavStyled.container}>
          <div className="row">
            {data.filter(filtered).map(({ name, img, statistics }) => (
              <Card key={name} name={name} img={img} statistics={statistics} />
            ))}
          </div>
        </div>
        </main>
      ) : (
        <main>
          <div className={NavStyled.container}>
            <div className="row">
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
