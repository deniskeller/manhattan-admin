import {FieldsAboutCompany} from "../../components/RegisterSteps/AboutCompany/AboutCompany";
import {FieldsPersonal, FieldsPersonalErrors} from "../../components/RegisterSteps/Personal/Personal";
import {FieldsCompanyAddress} from "../../components/RegisterSteps/CompanyAddress/CompanyAddress";
import {FieldsCompanyIndustries} from "../../components/RegisterSteps/CompanyIndustries/CompanyIndustries";
import {FieldsBeneficialowner} from "../../components/RegisterSteps/BeneficialOwner/BeneficialOwner";
import {
  FieldsFinancialDetails,
  FieldsFinancialDetailsErrors
} from "../../components/RegisterSteps/FinancialDetails/FinancialDetails";

export type BaseResponseDto = {
  status: 'OK' | 'ERROR';
  result?: object;
};
export type LoginResponseDto = {
  access_token: string;
  refresh_token: string;
};
export type UserDto = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user';
};

export type AboutCompanyDto = {
  country:	string;
  companyName:	string;
  tradeName:	string;
  type:	string;
  registrationNumber:	string;
  registrationDate:	string;
  taxNumber:	string;
  sector:	string;
  website: string;
  addressActual:	boolean;
  haveUsPerson:	boolean;
  financialInstitution:	boolean;
}
export type IndustriesDto = {
  armamentsWeaponsDefence:	boolean;
  adaultEntertaiment:	boolean;
  artAuction:	boolean;
  chemicalLegal:	boolean;
  moneyProcessing:	boolean;
  cryptocurrencyProcessing:	boolean;
  fxSpeculations:	boolean;
  gamblingGame:	boolean;
  nonprofitPoliticalReligious:	boolean;
  metalsStones:	boolean;
  usedCarsIndustryVehicles: boolean;
}
export type TBeneficial = "UBO" | "SHAREHOLDER";

export type BeneficialsDto = {
  shareholderType?: "COMPANY" | "PERSON";
  firstName?:	string;
  lastName?:	string;
  birthDate?:	string;
  ownershipStake:	number;
  taxNumber: string;
  existanceCriminal?:	boolean;
  usPerson?:	boolean;
  politicallyEspoted?:	boolean;
  countryCode:	string;
  phoneNumber:	string;
  email:	string;
  partcipationOtherBusiness:	string;
  passport:	string;
  type: TBeneficial,

  country?: string;
  companyName?: string;
  registrationDate?: string;
  regNumber?: string;
}

export type RegistrationInvestorDto = {
  type: "FUND" | "INVESTOR",
  investor: InvestorDto,
}
export type InvestorDto = {
  firstName:	string;
  lastName:	string;
  email:	string;
  password:	string;
  phone:	string;
  countryCode:	string;
  title:	string;
  birthDate:	string;
  aboutCompany: AboutCompanyDto;
  industries: IndustriesDto;
  financial: FinancialDto;
  beneficials: BeneficialsDto[]
}
export type	FinancialDto = {
  usdDetail: string;
  usdtDetail:  string;
}
export type RegistrationAppFieldsDto =
  FieldsAboutCompany &
  FieldsPersonal &
  FieldsCompanyAddress &
  FieldsCompanyIndustries &
  FieldsBeneficialowner &
  FieldsFinancialDetails
