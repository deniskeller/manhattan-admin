import React, { forwardRef, ReactNode } from "react";
import tw, { css, styled } from "twin.macro";
import { Tooltip as MUITooltip } from "@mui/material";
import {
  TooltipProps as TooltipMUIProps,
  tooltipClasses as tooltipMUIClasses,
} from "@mui/material/Tooltip";
import { Info } from "react-feather";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    arrow: {
      fontSize: 16,
      width: 17,
      "&::before": {
        border: "1px solid #424555",
        backgroundColor: "#191D31",
        boxSizing: "border-box"
      }
    }
  })
);

const TooltipWrapper = ({ className, ...props }: TooltipMUIProps) => {
  const classes = useStyles();
  return <MUITooltip
    {...props}
    classes={{ popper: className, arrow: classes.arrow }}
    componentsProps={{
      tooltip: {
        sx: {
          color: "white",
          padding: "8px 12px",
          fontSize: "12px",
          borderRadius: "4px",
          border: "1px solid #424555",
          bgcolor: '#191D31',
          '& .MuiTooltip-arrow': {
            color: '#191D31',
          },
        },
      },
    }}
  />
};

type TooltipProps = {
  variant?: "default";
  tooltip: NonNullable<ReactNode>;
  tooltipProps?: Partial<TooltipMUIProps>;
  theme?: "light" | "dark",
};

export const Tooltip = forwardRef<HTMLElement, TooltipProps>(
  ({ variant = "default",
     theme="dark",
     tooltip,
     tooltipProps, ...props }, ref) => {
    return (
      <div css={tw`[&>*]:stroke-base-light-10`}>
        <TooltipWrapper
          {...tooltipProps}
          arrow
          title={tooltip}
          placement="top"
        >
          <Info width={18} height={18} style={{cursor: "pointer"}}/>
        </TooltipWrapper>
      </div>
    );
  }
);
Tooltip.displayName = "Tooltip";