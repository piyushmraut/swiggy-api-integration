import { render } from "@testing-library/react"
import { act } from "react"
import React from 'react'
import RestaurantMenu from '../RestaurantMenu'

it("should load the restaurant Card Component",async ()=>{
    await act(async()=> render(<RestaurantMenu/>))
})