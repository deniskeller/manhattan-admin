export type IFormsState = {
  invest: any;
}
export type SetInvest = {
  data: TInvestData
};

export type TInvestData = {
  companiesToInvest: string;
  investmentAmount: string;
}