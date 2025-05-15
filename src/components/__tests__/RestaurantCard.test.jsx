import React from "react"
import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import RES_MOCK_DATA from '../../components/mocks/resCardMock.json'

test("Should load restaurant card with prop",()=>{
    render(<RestaurantCard resData={RES_MOCK_DATA} />);
    const data = screen.getByText('Toran Foods And Restaurant');
    expect(data).toBeInTheDocument();

})