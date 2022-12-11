import { Check } from "react-feather";
import tw, { styled, css } from "twin.macro";

type StepperProps = {
  activeStep: number;
  steps: {
    title: string;
    status: "default" | "completed" | "started";
  }[];
  onStepClick?: (step: number) => void;
  theme: "light" | "dark"
};

export const Stepper = function ({
                                   activeStep,
                                   steps,
                                   onStepClick,
                                   theme
                                 }: StepperProps) {
  const stylesThemed = {
    light:{
      circle: {
        common: [
          `${tw`bg-blue-dark-300`}`
        ],
        active: tw`bg-blue-light-550`,
        completed: tw`bg-blue-light-550`
      },
      line: {
        default: tw`bg-blue-dark-300`,
        completed: tw`bg-blue-light-550`,
        started: tw`bg-blue-light-550`
      },
      tooltipText: tw`text-base-light-700`,
      activeCircle: tw`bg-base-light-10`,
      inactiveCircle: tw`bg-blue-dark-300 border-blue-light-1000`,
      inactiveInnerCircle: tw`bg-blue-dark-300`
    },
    dark: {
      circle: {
        common: [
          `${tw`bg-blue-dark-300`}`
          ],
        active: tw`bg-blue-light-550`,
        completed: tw`bg-blue-light-550`
      },
      line: {
        default: tw`bg-blue-dark-300`,
        completed: tw`bg-blue-light-550`,
        started: tw`bg-blue-light-550`
      },
      tooltipText: css`color: rgba(255, 255, 255, 0.7);`,
      activeCircle: tw`bg-base-light-10`,
      inactiveCircle: tw`bg-blue-dark-300 border-blue-light-1000`,
      inactiveInnerCircle: tw`bg-blue-dark-300`
    }
  }
  const Circle = styled.div`
    ${tw`rounded-full w-7 h-7 flex justify-center items-center p-0.5 relative bg-blue-dark-300`}
    ${onStepClick && tw`cursor-pointer`}
    ${({
        active = false,
        completed = false,
      }: {
    active?: boolean;
    completed?: boolean;
  }) => [active && tw`bg-blue-light-550`, completed && tw`bg-blue-light-550`]}
  `;
  /*${tw`w-14 md:w-24 lg:w-32 h-0.5`}*/
  const Line = styled.div`
    ${tw`h-0.5`}
    ${css`margin-right: -1px!important; margin-left: -1px!important; flex-grow: 1; min-width: 40px;`}
    ${({
                                                                        status = "default",
                                                                      }: {
    status?: "default" | "completed" | "started";
  }) => [
    status === "default" && stylesThemed[theme].line.default,
    status === "completed" && stylesThemed[theme].line.completed,
    status === "started" && stylesThemed[theme].line.started,
    tw`rounded-sm m-1`,
  ]}
  `;
  const Tooltip = styled.div`
    ${tw`absolute left-0 top-7 flex flex-col justify-center items-center text-center rounded-md p-2`} 
    ${css`flex-shrink: 0; width: 160px; transform: translateX(-67px)`} 
  `;
  const TooltipTitle = styled.div`
    ${tw`text-lg font-medium text-base-light-500`}
    ${({
                                                                                             active = false,
                                                                                             completed = false,
                                                                                           }: {
    active?: boolean;
    completed?: boolean;
  }) => [(completed || active) && tw`text-base-light-900`]}
  `;
  const TooltipText = styled.div`
    ${tw`text-sm font-medium`}
    ${css` font-family: 'Avenir Next', sans-serif`}
    ${stylesThemed[theme].tooltipText}
  `;
  const ActiveCircle = styled.div`
    ${tw`w-2 h-2 rounded-full`}
    ${stylesThemed[theme].activeCircle}
  `;
  const InactiveCircle = styled.div`
    ${[tw`w-3 h-3  rounded-full flex items-center justify-center`,
    stylesThemed[theme].inactiveCircle,
    css`border-styles: solid; border-width: 1px;`]}
  `;
  const InactiveInnerCircle = styled.div`
    ${tw`w-2 h-2 rounded-full`}
    ${stylesThemed[theme].inactiveInnerCircle}
  `;

  return (
    <div css={[tw`flex flex-row items-center`, css`& > div:last-child{flex-grow: 0}`]}>
      {steps.map((step, index) => {
        const { status } = step;
        const active = index === activeStep;

        return (
          <div key={index} css={[tw`flex flex-row items-center`, css`flex-grow: 1`]}>
            <Circle
              active={active}
              completed={status === "completed"}
              onClick={() => {
                onStepClick && onStepClick(index);
              }}
            >
              {!active && status === "completed" && <Check color="white" />}
              {active && <ActiveCircle />}
              {!active && status !== "completed" && (
                <InactiveCircle>
                  <InactiveInnerCircle />
                </InactiveCircle>
              )}
              <Tooltip>
             {/*   <TooltipTitle
                  active={active}
                  completed={status === "completed"}
                >{`${index + 1} Step`}</TooltipTitle>*/}
                <TooltipText>{`${index + 1}. `}{step.title}</TooltipText>
              </Tooltip>
            </Circle>
            {index !== steps.length - 1 && <Line status={status} />}
          </div>
        );
      })}
    </div>
  );
};
