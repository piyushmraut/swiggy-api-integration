import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import React from "react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should Search Res List for Pizza text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});

// it("Should Filter Cards with top rated restaurant", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const cardsBeforeFilter = screen.getAllByTestId('resCard');
//   expect(cardsBeforeFilter.length).toBe(20);
//   const filterButton = screen.getByRole('button',{name:'Top Rated Restaurants'})
//   fireEvent.click(filterButton);
//   const cardsAfterFilter = screen.getAllByTestId('resCard');
//   expect(cardsAfterFilter.length).toBe(11);
// });
