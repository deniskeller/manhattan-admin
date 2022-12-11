import React from "react";

export const ArrowRight = ({color}: {color?:string})=>{
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8333 9.33325L24.5 13.9999M24.5 13.9999L19.8333 18.6666M24.5 13.9999L3.5 13.9999"
          stroke={color ? color : "white"} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}
export const ArrowLeft = ({color}: {color?:string})=>{
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.16667 18.6666L3.5 13.9999M3.5 13.9999L8.16667 9.33325M3.5 13.9999L24.5 13.9999"
          stroke={color ? color : "white"} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}