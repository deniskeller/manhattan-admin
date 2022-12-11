export type SetPopup = {
  popup: string;
};

export interface IModalState {
  popup: string;
}

export interface IFeedbackPostData {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  country: string,
  message: string,
  companiesToInvest?: string,
  investmentAmount?: string
}