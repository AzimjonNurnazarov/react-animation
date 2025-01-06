import React from "react";
import styled from "styled-components";
import { Bounce } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  height: 135vh;
  flex-direction: column;
  padding: 20px 150px;
  gap: 20px;
  background-color: #f5f8fd;

  div {
    h2 {
      font-size: 30px;
      width: 3%;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      color: #173b6c;
      border-bottom: 3px solid #149ddd;
      padding-bottom: 10px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    .item {
      width: 100%;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
`;

const data = [
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-1.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/branding-1.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/product-1.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/books-1.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-2.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/product-2.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/branding-2.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/books-2.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/content/demo/iPortfolio/assets/img/portfolio/app-3.jpg",
  },
];

const Portfolio = () => {
  return (
    <Container>
      <div>
        <h2>Facts</h2>
      </div>

      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <div className="grid">
        {data.map((item) => {
          return (
            <Bounce>
              <div className="item">
                <img src={item.imgUrl} alt="" />
              </div>
            </Bounce>
          );
        })}
      </div>
    </Container>
  );
};

export default Portfolio;
