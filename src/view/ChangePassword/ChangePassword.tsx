import React from "react";
import {AuthForm, ChangePasswordForm} from "@content/index";
type Props = {
  id: string;
}
const ChangePassword: React.FC<Props> = ({id})=>{
  return(
    <ChangePasswordForm id={id}/>
  )
}

export default ChangePassword;