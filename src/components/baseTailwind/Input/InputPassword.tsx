import React, {ComponentProps, forwardRef, useState} from "react";
import Input from "./Input";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Eye, EyeOff, Check } from "react-feather";
import { css } from "twin.macro";
import styles from "./styles.module.scss";

export const InputPassword = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof Input>
  >((props,
     ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
   setShowPassword((prev)=>!prev)
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const isMoreThan8 = typeof props.value !== "undefined" ? props.value?.toString()?.length >= 8 : false;
  const haveNumber =  typeof props.value !== "undefined" ? /\d/.test(props.value?.toString()) : false;
  const haveLetter = typeof props.value !== "undefined" ? /[a-zA-Z]/.test(props.value?.toString()) : false;
  const rightIcon =  !showPassword ? <EyeOff color={"rgba(255, 255, 255, 0.5)"} /> : <Eye color={"rgba(255, 255, 255, 0.5)"}/>;
  const isEqual = typeof props.valueCompare !== "undefined" && props.value === props.valueCompare && props.valueCompare?.length > 0;
  return <Input {...props} ref={ref}
                type={showPassword ? 'text' : 'password'}
                right={<div className={styles.IconPass}
                        style={{cursor: "pointer", width: "19px"}}
                        onClick={handleClickShowPassword}
                        //@ts-ignore
                        onMouseDown={handleMouseDownPassword}
                            >
                       {rightIcon}
                      </div>}
                bottom={ (props.noBottom === true ) ? "" :
                  props?.message && props?.message?.length > 0 && props.variant !== "error" ? props?.message :
                  typeof props?.valueCompare !== "undefined" ? <div>
                     <span>
                              <Check
                                width={20}
                                stroke={isEqual ? "green" : "gray"}
                                style={{
                                  display: "inline-block",
                                }}
                              />{" "}
                       <span>Passwords match</span>
                            </span>
                  </div> :

                  <div>
                            <span>
                              <Check
                                width={20}
                                stroke={isMoreThan8 ? "green" : "gray"}
                                style={{
                                  display: "inline-block",
                                }}
                              />{" "}
                              <span>8+ symbols</span>
                            </span>
                            <span style={{width: "16px", display: "inline-block"}}/>
                            <span>
                              <Check
                                width={20}
                                stroke={haveNumber ? "green" : "gray"}
                                style={{
                                  display: "inline-block",
                                }}
                              />{" "}
                              <span>Numbers</span>
                            </span>
                            <span style={{width: "16px", display: "inline-block"}}/>
                            <span>
                                        <Check
                                          width={20}
                                          stroke={haveLetter ? "green" : "gray"}
                                          style={{
                                            display: "inline-block",
                                          }}
                                        />{" "}
                              <span>Letters</span>
                            </span>
                </div> }
  />;
});

InputPassword.displayName = "Input.Password";
