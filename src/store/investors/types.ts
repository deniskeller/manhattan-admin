import {FieldsAboutCompany} from "../../components/RegisterSteps/AboutCompany/AboutCompany";
import {FieldsPersonal, FieldsPersonalErrors} from "../../components/RegisterSteps/Personal/Personal";
import {FieldsCompanyAddress} from "../../components/RegisterSteps/CompanyAddress/CompanyAddress";
import {FieldsCompanyIndustries} from "../../components/RegisterSteps/CompanyIndustries/CompanyIndustries";
import {
  FieldsBeneficialowner,
  shareholderType,
  uboType
} from "../../components/RegisterSteps/BeneficialOwner/BeneficialOwner";
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
  firstName:	string;
  lastName:	string;
  birthDate:	string;
  ownershipStake:	number;
  taxNumber: string;
  existanceCriminal:	boolean;
  usPerson:	boolean;
  politicallyEspoted:	boolean;
  countryCode:	string;
  phoneNumber:	string;
  email:	string;
  partcipationOtherBusiness:	string;
  passport:	string;
  type: TBeneficial
}

export type RegistrationInvestorDto = {
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
  beneficials: BeneficialsDto[]
}

export type RegistrationAppFieldsDto =
  FieldsAboutCompany &
  FieldsPersonal &
  FieldsCompanyAddress &
  FieldsCompanyIndustries &
  FieldsBeneficialowner &
  FieldsFinancialDetails


export type FieldsStep0ApiValidate = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  countryCode: string;
  title: string;
  birthDate: string;
}

export const convertFieldsToApiValidate = (step: number, fields: any ) =>{
  console.log("convertFieldsToApiValidate", fields, "passconfirm", fields.confirmPassword);
  if (step === 0){
    return {
      firstName:	fields.firstName,
      lastName:	fields.lastName,
      email:	fields.email,
      password:	fields.password,
      confirmPassword: fields.confirmPassword,
      phone:	fields.phone,
      countryCode:	fields.code,
      title:	fields.title,
      birthDate:	fields.birthDate,
    } as FieldsStep0ApiValidate
  }
  if (step === 1){
    return {
      country: fields.countryIncorporation,
      companyName: fields.companyName,
      tradeName: fields.tradeName,
      type: fields.businessType,
      registrationNumber: fields.regNumber,
      registrationDate: fields.dateReg,
      taxNumber: fields.vatTaxNumber,
      sector: fields.businessSector,
      website: fields.website,
      haveUsPerson: fields.companyUSPerson,
      financialInstitution: fields.companyInstStatus
    }
  }
  if (step === 2){
    return {
      addressActual: fields.companySameAddr,
      regCountry: fields.countryBusinessReg,
      regCity: fields.cityBusinessReg,
      regPostCode: fields.postCodeBusinessReg,
      regAddressLine1: fields.addressBusinessReg1,
      regAddressLine2: fields.addressBusinessReg2,
      actCountry: fields.countryBusinessActual,
      actCity: fields.cityBusinessActual,
      actPostCode: fields.postCodeBusinessActual,
      actAddressLine1: fields.addressBusinessActual1,
      actAddressLine2: fields.addressBusinessActual2
    }
  }
  if (step === 3){
    return {
      armamentsWeaponsDefence: fields.manufacturers,
      adaultEntertaiment: fields.entertainment,
      artAuction: fields.art,
      chemicalLegal: fields.chemical,
      moneyProcessing: fields.clientmoney,
      cryptocurrencyProcessing: fields.cryptocurrency,
      fxSpeculations: fields.speculators,
      gamblingGame: fields.gambling,
      nonprofitPoliticalReligious: fields.nonprofit,
      metalsStones: fields.metals,
      usedCarsIndustryVehicles: fields.cars
    }
  }
  if (step === 4){
    let result = [] as any;
    const formObjFields = (entries: any[], obj: any) => {
      entries.forEach((el)=>{
        let name = el[0] as string;
        let value = el[1] as any;
        if (name === "politicallyEsposed" || name === "criminalRecords" || name === "usPerson"){
          if (name === "politicallyEsposed"){
            obj.politicallyEspoted = value;
          }
          if (name === "criminalRecords"){
            obj.existanceCriminal = value;
          }
          if ( name === "usPerson" ){
            obj.usPerson = value;
          }
        } else {
          console.log("name===",name, value?.length > 0, value);
          if (value?.length > 0 || (name === "companyRegdate" && !!value)){

            if (name === "firstName" || name === "lastName" || name === "birthDate" || name === "email"){
              obj[name] = value
            }
            if (name === "companyEmail") {obj.email = value}
            if (name === "phone" || name === "companyPhone") { obj.phoneNumber = value}
            if (name === "code" || name === "companyCode") { obj.countryCode = value}
            if (name === "ownStake" || name === "companyOwnStake") { obj.ownershipStake = value}
            if (name === "taxId" || name === "companyTaxId") { obj.taxNumber = value}
            if (name === "otherBusiness" || name === "companyOtherBusiness") { obj.partcipationOtherBusiness = value}
            if (name === "filesPassport" || name === "filesBeneficiary") { obj.passport = value?.[0]?.url}

            if (name === "shareholderType") { obj.shareholderType = value}
            if (name === "companyCountry") { obj.country = value}
            if (name === "companyName") { obj.companyName = value}
            if (name === "companyRegdate") { obj.registrationDate = value}
            if (name === "companyRegNumber") { obj.regNumber = value}

          }
        }
      })
    }
    fields.ubosList.forEach((fields: uboType)=>{
      let obj = {} as any;
      let entries = Object.entries(fields);
      formObjFields(entries, obj);
//MY
      /*firstName: string; 1
      lastName: string; 1
      phone: string;
      code: string;
      email: string; 1
      birthDate: string; 1
      ownStake: string;
      taxId: string;
      criminalRecords: boolean;
      usPerson: boolean;
      politicallyEsposed: boolean;
      otherBusiness: string;
      filesPassport: any[]
      */
 //api
    /*  firstName	string
      lastName	string
      birthDate	string
      ownershipStake*	number
      minimum: 0
      maximum: 100
      taxNumber	string
      existanceCriminal	boolean
      usPerson	boolean
      politicallyEspoted	boolean
      countryCode*	string
      phoneNumber	string
      email*	string($email)
      partcipationOtherBusiness*	string
      passport*	string
      shareholderType	string
      Enum:
        Array [ 2 ]
      country	string
      companyName	string
      registrationDate	string($date)
      regNumber	string*/

      result.push({
        type: "UBO",
        ...obj
      })
    })

    fields.shareholdersList.forEach((fields: shareholderType)=>{
      let obj = {} as any;
      let entries = Object.entries(fields);

      formObjFields(entries, obj);
      result.push({
        type: "SHAREHOLDER",
        ...obj
      })


//MY
      /*shareholderType: "PERSON" | "COMPANY";

  firstName: string;
  lastName: string;
  phone: string;
  code: string;
  email: string;
  birthDate: string;
  ownStake: string;
  taxId: string;
  criminalRecords: boolean;
  usPerson: boolean;
  politicallyEsposed: boolean;
  otherBusiness: string;
  filesPassport: any[];

  companyCountry: string;
  companyName: string;
  companyRegdate: string;
  companyRegNumber: string;
  companyOwnStake: string;
  companyTaxId: string;
  filesBeneficiary: any[];
  companyPhone: string;
  companyCode: string;
  companyEmail: string;
  companyOtherBusiness: string;
      */
      //api
      /*  firstName	string
        lastName	string
        birthDate	string
        ownershipStake*	number
        minimum: 0
        maximum: 100
        taxNumber	string
        existanceCriminal	boolean
        usPerson	boolean
        politicallyEspoted	boolean
        countryCode*	string
        phoneNumber	string
        email*	string($email)
        partcipationOtherBusiness*	string
        passport*	string
        shareholderType	string
        Enum:
          Array [ 2 ]
        country	string
        companyName	string
        registrationDate	string($date)
        regNumber	string*/

    })
    console.log("result UBO", result );
    return {list: result};

    /*beneficialOwner: true
    ownStake: false
    shareholdersList: Array(1)
    0: {shareholderType: 'PERSON', firstName: 'ssss', lastName: 'sll', phone: '', code: '', …}
    length: 1
      [[Prototype]]: Array(0)
    ubosList: Array(1)
    0: {firstName: 'fff', lastName: 'lll', phone: '', code: '', email: '', …}*/
  }
  if (step === 5){
    return {
      usdDetail: fields.filesBankDetails?.[0]?.url,
      usdtDetail: fields.walletNumber
    }
  }
}