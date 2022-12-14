import { Check } from "react-feather";
import tw, { styled } from "twin.macro";

type StepperProps = {
  activeStep: number;
  steps: {
    title: string;
    completed: boolean;
  }[];
  onStepClick?: (step: number) => void;
};

export const Stepper = function ({
  activeStep,
  steps,
  onStepClick,
}: StepperProps) {
  const Circle = styled.div`
    ${tw`rounded-full w-5 h-5 flex justify-center items-center p-0.5 relative bg-gray-light-300`}
    ${onStepClick && tw`cursor-pointer`}
    ${({
      active = false,
      completed = false,
    }: {
      active?: boolean;
      completed?: boolean;
    }) => [active && tw`bg-blue-light-600`, completed && tw`bg-blue-light-600`]}
  `;
  const Line = styled.div`
    ${tw`w-32 h-0.5 bg-gray-light-300`}
  `;
  const Tooltip = styled.div`
    ${tw`-translate-x-12 absolute left-0 right-0 top-3 flex flex-col justify-center items-center whitespace-nowrap w-28 rounded-md p-2`}
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
    ${tw`text-sm font-medium text-base-light-700`}
  `;
  const ActiveCircle = styled.div`
    ${tw`w-2 h-2 bg-white rounded-full`}
  `;
  const InactiveCircle = styled.div`
    ${tw`w-3 h-3 bg-base-light-300 rounded-full flex items-center justify-center`}
  `;
  const InactiveInnerCircle = styled.div`
    ${tw`w-2 h-2 bg-gray-light-300 rounded-full`}
  `;

  return (
    <div css={tw`flex flex-row items-center`}>
      {steps.map((step, index) => {
        const { completed } = step;
        const active = index === activeStep;

        return (
          <div key={index} css={tw`flex flex-row items-center`}>
            <Circle
              active={active}
              completed={completed}
              onClick={() => {
                onStepClick && onStepClick(index);
              }}
            >
              {!active && completed && <Check color="white" />}
              {active && <ActiveCircle />}
              {!active && !completed && (
                <InactiveCircle>
                  <InactiveInnerCircle />
                </InactiveCircle>
              )}
              <Tooltip>
                <TooltipTitle active={active} completed={completed}>{`${
                  index + 1
                } Step`}</TooltipTitle>
                <TooltipText>{step.title}</TooltipText>
              </Tooltip>
            </Circle>
            {index !== steps.length - 1 && <Line />}
          </div>
        );
      })}
    </div>
  );
};
