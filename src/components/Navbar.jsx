import Card from "../components/Card";
import { useState } from "react";
import { data } from "../data";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

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
    }
  };

  return (
    <>
      <div className="text-center">
        <input
          placeholder="search player"
          className="mb-4 p-2"
          type="search"
          onChange={handleChange}
        />
      </div>
      <Container className="card-container rounded-4 bg-danger p-4 ">
        <Row className=" gap-2  justify-content-center text-center">
          {data.filter(filteredFunc).map(({ name, img, statistics }) => (
            <Col xl={3} lg={4} md={6} key={name}>
              <Card name={name} img={img} statistics={statistics} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
