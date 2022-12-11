import {
  RegistrationInvestorDto,
  RegistrationAppFieldsDto,
  AboutCompanyDto,
  IndustriesDto,
  BeneficialsDto
} from "./types";

type TConvertFieldsRegToApi = (fields: RegistrationAppFieldsDto, type?: "FUND" | "INVESTOR")=>RegistrationInvestorDto;
type TConvertApiErrorsToFieldsReg = (errors: any)=>any;

export const convertFieldsRegToApiDto:TConvertFieldsRegToApi = (fields, type = "INVESTOR" ) => {
  let beneficials = [] as BeneficialsDto[];
  fields.ubosList.forEach((ubo)=>{
    beneficials.push({
      type: "UBO",
      firstName:	ubo.firstName,
      lastName:	ubo.lastName,
      birthDate:	ubo.birthDate,
      ownershipStake: +ubo.ownStake,

      taxNumber: ubo.taxId,
      existanceCriminal:	ubo.criminalRecords,
      usPerson:	ubo.usPerson,
      politicallyEspoted:	ubo.politicallyEsposed,
      countryCode:	ubo.code,
      phoneNumber:	ubo.phone,
      email:	ubo.email,
      partcipationOtherBusiness: ubo.otherBusiness,
      passport:	ubo.filesPassport?.[0]?.url ?? "" as string
    })
  })
  fields.shareholdersList.forEach((holder)=>{
    const isPerson = holder.shareholderType === "PERSON";
    let obj = {} as any;
    if ( holder.companyCountry?.length > 0){obj.country = holder.companyCountry}
    if ( holder.companyName?.length > 0){obj.companyName = holder.companyName}
    if ( holder.companyRegdate?.length > 0){obj.registrationDate = holder.companyRegdate}
    if ( holder.companyRegNumber?.length > 0){obj.regNumber = holder.companyRegNumber}

    if ( holder.firstName?.length > 0){obj.firstName = holder.firstName}
    if ( holder.lastName?.length > 0){obj.lastName = holder.lastName}
    if ( holder.birthDate?.length > 0){obj.birthDate = holder.birthDate}


    beneficials.push({
      type: "SHAREHOLDER",
      shareholderType: holder.shareholderType,
      ownershipStake: isPerson ? +holder.ownStake : +holder.companyOwnStake,

      taxNumber: isPerson ? holder.taxId : holder.companyTaxId,
      existanceCriminal:	holder.criminalRecords,
      usPerson:	holder.usPerson,
      politicallyEspoted:	holder.politicallyEsposed,
      countryCode: isPerson ?	holder.code : holder.companyCode,
      phoneNumber:	isPerson ? holder.phone : holder.companyPhone,
      email: isPerson ?	holder.email : holder.companyEmail,
      partcipationOtherBusiness: isPerson ? holder.otherBusiness : holder.companyOtherBusiness,
      passport: isPerson ? holder.filesPassport?.[0]?.url ?? "" as string : holder.filesBeneficiary?.[0]?.url ?? "" as string,

      ...obj
    });



  })

  const result = {
    type: type,
    investor: { //заменить на другое при type = FUND
      firstName:	fields.firstName,
      lastName:	fields.lastName,
      email:	fields.email,
      password:	fields.password,
      phone:	fields.phone,
      countryCode:	fields.code,
      title:	fields.title,
      birthDate:	fields.birthDate,
      aboutCompany: {
        country:	fields.countryIncorporation,
        companyName:	fields.companyName,
        tradeName:	fields.tradeName,
        type: fields.businessType,
        registrationNumber:	fields.regNumber,
        registrationDate:	fields.dateReg,
        taxNumber:	fields.vatTaxNumber,
        sector:	fields.businessSector,
        website: fields.website,
        addressActual:	fields.companySameAddr,
        haveUsPerson:	fields.companyUSPerson,
        financialInstitution: fields.companyInstStatus
      },
      addressCompany:{
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
      },
      industries: {
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
        usedCarsIndustryVehicles: fields.cars,
      },
      financial: {
        usdDetail: fields.filesBankDetails?.[0]?.url ?? "",
        usdtDetail: fields.walletNumber
      },
      beneficials: beneficials
    },
  };
  console.log("convert:",result);
  return result as RegistrationInvestorDto;
}

export const convertApiDtoToFieldsReg:TConvertApiErrorsToFieldsReg = (fields) => {

}


export const convertFieldsByStepToApi = () => {

}