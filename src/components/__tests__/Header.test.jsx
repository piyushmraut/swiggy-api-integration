import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should login button loaded into the header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "LogIn" });
  expect(loginButton).toBeInTheDocument();
});

// Let's try to write the another test case

test("Should Cart Items is loaded into the header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItemButton = screen.getByText("Cart-(0)");
  expect(cartItemButton).toBeInTheDocument();
});

// test("Should Cart Items is added into the header Component", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItem = screen.getByText(/cart/);
//   expect(cartItem).toBeInTheDocument();
// });

test("Should change logIn button to logOut", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(logInButton);
  const logOutButton = screen.getByRole("button", { name: "LogOut" });
  expect(logOutButton).toBeInTheDocument();
});
