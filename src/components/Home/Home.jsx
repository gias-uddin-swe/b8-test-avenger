/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
import photo from "../../assets/giphy.gif";

const Home = () => {
  const [actors, setactors] = useState([]);
  const [selectedActor, setSelectedActor] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [control, setControl] = useState(true);
  const Budget = 20000;

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setactors(data));
  }, []);
  // console.log(actors);

  const handleAddActor = (actor) => {
    const isExist = selectedActor.find((act) => act.id == actor.id);
    let temp = actor?.salary;

    if (isExist) {
      return alert("already booked try another actor");
    } else {
      setSelectedActor([...selectedActor, actor]);
      selectedActor.forEach((item) => {
        temp += item.salary;
      });
      const sum = Budget - temp;
      console.log(Budget - temp);
      if (sum < 0) {
        return alert("bhai  taka sesh");
      } else {
        setTotalCost(temp);
        setRemaining(sum);
      }
    }
  };

  const handleControl = (status) => {
    setControl(status);
  };

  console.log(control);

  return (
    <div className="container">
      {control ? (
        <div className="card-container">
          {actors.map((actor) => (
            <div key={actor.id} className="card">
              <div className="card-img">
                <img className="photo" src={actor?.image} alt="" />
              </div>
              <h2>{actor?.name}</h2>
              <p>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                </small>
              </p>
              <div className="price-container">
                <p>salary:{actor?.salary} $</p>
                <p>{actor?.role}</p>
              </div>
              <button
                onClick={() => handleAddActor(actor)}
                className="card-select-btn"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <img src={photo} alt="" />
          <button onClick={() => handleControl(true)}>back</button>
        </div>
      )}
      <div className="cart">
        <Cart
          selectedActor={selectedActor}
          remaining={remaining}
          totalCost={totalCost}
          handleControl={handleControl}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
