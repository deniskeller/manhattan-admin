import React from "react";
import {FormControl, InputLabel, Select, MenuItem, Box, ListSubheader} from "@mui/material";
import tw, { css } from "twin.macro";
import { SelectProps, InputLabelProps } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import chevronIcon from "../../../assets/images/chevronSmallWhite.svg";
import useId from "@accessible/use-id";
import styles from "./styles.module.scss";



type TSelectProps<T> = {
  variant?: "default" | "error";
  required?: boolean;
  value?: T;
  options: { value: any; label: string }[];
  onChange?: (e: any) => void;
  label?: React.ReactNode;
  readOnly?: boolean;
  message?: string;
}

export const SelectSmall = function <T>({
                                           value,
                                           required,
                                           onChange,
                                           options,
                                           variant = "default",
                                           message,
                                           label,
                                           readOnly = false,
                                         }: TSelectProps<T>){
  console.log("variant select small", variant);


  const SelectStyled = styled(Select)<SelectProps>(({ theme }) => ({
    //color: "#ff0000",
    '&' : {
      fontWeight: 500,
      alignItems: label ? "flex-end" : "center"
    },
    '& .MuiSelect-select' :{
      paddingBottom:  label ? "5px" : "0px",
      paddingTop:  label ? "5px" : "0px",
      paddingRight: "40px!important",
    },
    '& .MuiSvgIcon-root ': {
      fill: "rgba(255, 255, 255, 0.3)!important", //to theme
    },
 /*   .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input
      .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input
      .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input*/
  }));
  const InputLabelStyled = styled(InputLabel)<InputLabelProps>(() => ({
    color: "rgba(255, 255, 255, 0.7)",
    '&.MuiInputLabel-shrink' : {
      color: "rgba(255, 255, 255, 0.5)",
    },
  }));

  const randomId = useId();
  const Icon = (props : any)=>{
    const className = props.className;
    return <div className={`${styles.IconChevron} ${className}`}>{<img alt="v" src={chevronIcon}/>}</div>
  }

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <InputLabelStyled id={randomId} variant={"filled"}>{label}</InputLabelStyled>
        <SelectStyled
          labelId={randomId}
          value={value}
          onChange={onChange}
          IconComponent={Icon}
          MenuProps={{
            PaperProps: {
              sx: {
                marginTop: '4px',
                bgcolor: tw`bg-blue-dark-300`,
                border: "1px solid #474A5A",
                '& .MuiMenuItem-root': {
                  color: "white",
                },
                '& .MuiMenuItem-root:hover': {
                  bgcolor: tw`bg-blue-dark-100`,
                },
                '& .MuiMenuItem-root.Mui-selected':{
                  bgcolor: tw`bg-blue-dark-100`,
                },
                '&::-webkit-scrollbar' : {
                  width: "6px",
                  backgroundColor: "transparent"
                },
                '&::-webkit-scrollbar-track' : {
                  borderRadius: "15px",
                  marginBlock: "10px!important"
                },
                '&::-webkit-scrollbar-thumb' : {
                  height: "50px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "100px",
                }
              },
            },
          }} //to theme
          css={[
            readOnly && tw`pointer-events-none`,
            tw`whitespace-nowrap  bg-blue-dark-300! rounded-l rounded-r`, //to theme
            css`
              height: auto;
              color: white!important; //to theme
              border: none;
            
              
              &:active {
                color: white!important; 
                background-color: ${tw`bg-blue-dark-300`}                
              }
               &:hover {               
                 color: white!important; 
                background-color: ${tw`bg-blue-dark-300`} 
               }
               &:active, &:focus {
               
               }
               & .MuiOutlinedInput-notchedOutline{
                  border: none!important;
               }
            
              `, // to theme
          ]}
        >
          {options.map((option)=>{
            return <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
          })}
        </SelectStyled>
      </FormControl>
      {variant === "error" && message && (
        <div css={tw`flex gap-1 items-center mt-2`}>
          <div css={tw`text-left w-full text-red-light-450 text-sm`}>
            {message}
          </div>
        </div>
      )}
    </Box>
  )
}
