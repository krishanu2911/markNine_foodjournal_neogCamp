import React, { useState } from "react";
import "./styles.css";
const foodDb = {
  INDIAN: [
    { name: "PannerMakni", description: "This is amazing", stars: "🌟🌟🌟🌟" },
    { name: "Khichri", description: "healthy food", stars: "🌟🌟🌟" },
    { name: "AlooParata", description: "loved it", stars: "🌟🌟🌟🌟🌟" }
  ],
  CHINESE: [
    { name: "Noodles", description: "it is so nice", stars: "🌟🌟🌟" },
    { name: "Manchurian", description: "tastes heaven", stars: "🌟🌟🌟🌟" },
    { name: "Sushi", description: "non-veg", stars: "🌟🌟" }
  ],
  ITALIAN: [
    { name: "Pizza", description: "no words", stars: "🌟🌟🌟🌟🌟" },
    { name: "Lasagna", description: "ok ok", stars: "🌟🌟🌟" },
    { name: "Spaghetti", description: "nice", stars: "🌟🌟🌟🌟" }
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
                <div>{food.description}</div>
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
