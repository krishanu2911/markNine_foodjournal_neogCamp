import React, { useState } from "react";
import "./styles.css";
const foodDb = {
  INDIAN: [
    { name: "PannerMakni", stars: "🌟🌟🌟🌟" },
    { name: "Khichri", stars: "🌟🌟🌟" },
    { name: "AlooParata", stars: "🌟🌟🌟🌟🌟" }
  ],
  CHINESE: [
    { name: "Noodles", stars: "🌟🌟🌟" },
    { name: "Manchurian", stars: "🌟🌟🌟🌟" },
    { name: "Sushi", stars: "🌟🌟" }
  ],
  ITALIAN: [
    { name: "Pizza", stars: "🌟🌟🌟🌟🌟" },
    { name: "Lasagna", stars: "🌟🌟🌟" },
    { name: "Spaghetti", stars: "🌟🌟🌟🌟" }
  ]
};

export default function App() {
  var [selectedgenre, setselectedgenre] = useState("INDIAN");
  function genreclickhandler(genres) {
    setselectedgenre(genres);
  }

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#6366F1",
          padding: "2rem",
          textAlign: "center",
          color: "white"
        }}
      >
        <h1
          style={{
            margin: "0px"
          }}
        >
          <span role="img" aria-label="burgir">
            {" "}
            🍔
          </span>
          foodjournal
        </h1>
      </div>

      <p
        style={{
          backgroundColor: "#C7D2FE",
          margin: "0px",
          padding: "1rem"
        }}
      >
        Cuisine Options here{" "}
        <span role="img" aria-label="fingerDown">
          👇🏼
        </span>{" "}
      </p>
      <div
        style={{
          backgroundColor: "#C7D2FE",
          padding: "1rem"
        }}
      >
        {Object.keys(foodDb).map((genres) => (
          <button
            className="btn-border"
            style={{
              margin: "1rem",
              border: "none",
              borderRadius: "1rem",
              padding: " 1.5rem 2rem",
              backgroundColor: "#818CF8",
              color: "white"
            }}
            onClick={() => genreclickhandler(genres)}
          >
            {genres}
          </button>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#818CF8"
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: "auto"
          }}
        >
          {foodDb[selectedgenre].map((food) => (
            <li
              style={{
                backgroundColor: "#A5B4FC",
                color: "#312E81",
                textAlign: "left"
              }}
            >
              <div
                style={{
                  padding: "1rem"
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "2rem"
                    }}
                  >
                    {food.name}
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "1.5rem"
                    }}
                  >
                    Ratings:
                  </span>
                  <span
                    style={{
                      // fontSize: "3rem",
                      color: "#6366F1"
                    }}
                  >
                    {" "}
                    {food.stars}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#A5B4FC"
        }}
      >
        © | 2021 | krishanuDutta
      </div>
    </div>
  );
}
