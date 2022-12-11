import React, {useEffect, useState} from "react";
import styles from './RegistrationForm.module.scss';
import {Stepper} from "@tw/components/index";
import {PersonalInfo as Step0,
  AboutCompany as Step1,
  CompanyAddress as Step2,
  CompanyIndustries as Step3,
  BeneficialOwner as Step4,
  FinancialDetails as Step5,
  SuccessStep
} from "../../../RegisterSteps";
import {arrayClone} from "@utils/helper";
import {validateEmail, validateNotEmpty, validatePassword} from "@utils/validation";
import {isBeforeToday, isOlder18, isURL, isNumberStr} from "@tw/components/Input/inputHelper";
import {useUserControllerRegisterMutation} from "@store/users/usersEndpoints";
import {SaveFileResponse, useSaveFile, useLazyInvestorsControllerValidateStepQuery} from "@store/investors/investorEndpoints";
import {convertFieldsRegToApiDto} from "@store/users/helper";

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [register] = useUserControllerRegisterMutation();
  const [saveFile] = useSaveFile();
  const [validateStepApi] = useLazyInvestorsControllerValidateStepQuery();

  const initialUbo = {
    firstName: "",
    lastName: "",
    phone: "",
    code: "",
    email: "",
    birthDate: "",
    ownStake: "",
    taxId: "",
    criminalRecords: false,
    usPerson: false,
    politicallyEsposed: false,
    otherBusiness: "",
    filesPassport: []
  };
  const initialUboErrors = {
    firstName: {isError: false, errorText: ""},
    lastName: {isError: false, errorText: ""},
    phone: {isError: false, errorText: ""},
    code: {isError: false, errorText: ""},
    email: {isError: false, errorText: ""},
    birthDate: {isError: false, errorText: ""},
    ownStake: {isError: false, errorText: ""},
    taxId: {isError: false, errorText: ""},
    otherBusiness: {isError: false, errorText: ""},
    filesPassport: {isError: false, errorText: ""}
  };
  const initialShareholder = {
    shareholderType: "PERSON" as 'PERSON' | 'COMPANY',
    firstName: "",
    lastName: "",
    phone: "",
    code: "",
    email: "",
    birthDate: "",
    ownStake: "",
    taxId: "",
    criminalRecords: false,
    usPerson: false,
    politicallyEsposed: false,
    otherBusiness: "",
    filesPassport: [],

    companyCountry: "",
    companyName: "",
    companyRegdate: "",
    companyRegNumber: "",
    companyOwnStake: "",
    companyTaxId: "",
    filesBeneficiary: [],
    companyPhone: "",
    companyCode: "",
    companyEmail: "",
    companyOtherBusiness: "",
  };
  const initialShareholderErrors = {
    firstName: {isError: false, errorText: ""},
    lastName: {isError: false, errorText: ""},
    phone: {isError: false, errorText: ""},
    code: {isError: false, errorText: ""},
    email: {isError: false, errorText: ""},
    birthDate: {isError: false, errorText: ""},
    ownStake: {isError: false, errorText: ""},
    taxId: {isError: false, errorText: ""},
    otherBusiness: {isError: false, errorText: ""},
    filesPassport: {isError: false, errorText: ""},

    companyCountry: {isError: false, errorText: ""},
    companyName: {isError: false, errorText: ""},
    companyRegdate: {isError: false, errorText: ""},
    companyRegNumber: {isError: false, errorText: ""},
    companyOwnStake: {isError: false, errorText: ""},
    companyTaxId: {isError: false, errorText: ""},
    companyPhone: {isError: false, errorText: ""},
    companyCode: {isError: false, errorText: ""},
    companyEmail: {isError: false, errorText: ""},
    companyOtherBusiness: {isError: false, errorText: ""},
    filesBeneficiary: {isError: false, errorText: ""}
  };

  const [fields, setFields] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      code: "",
      birthDate: "",
      title: "",
      password: "",
      confirmPassword: "",

      countryIncorporation: "",
      companyName: "",
      tradeName: "",
      businessType: "",
      regNumber: "",
      dateReg: "",
      vatTaxNumber: "",
      businessSector: "",
      website: "",
      contactPerson: false,
      companyUSPerson: false,
      companyInstStatus: false,

      type: "INVESTOR",

      countryBusinessReg: "",
      cityBusinessReg: "",
      postCodeBusinessReg: "",
      addressBusinessReg1: "",
      addressBusinessReg2: "",
      countryBusinessActual: "",
      cityBusinessActual: "",
      postCodeBusinessActual: "",
      addressBusinessActual1: "",
      addressBusinessActual2: "",
      companySameAddr: false,

      manufacturers: false,
      entertainment: false,
      art: false,
      chemical: false,
      clientmoney: false,
      cryptocurrency: false,
      speculators: false,
      gambling: false,
      nonprofit: false,
      metals: false,
      cars: false,

      ownStake: false,
      beneficialOwner: false,
      ubosList: [
        initialUbo
      ],
      shareholdersList: [
        initialShareholder
      ],

      filesBankDetails: [],
      walletNumber: ""
  });
  const [errors, setErrors] = useState({
    firstName: {isError: false, errorText: ""},
    lastName: {isError: false, errorText: ""},
    email: {isError: false, errorText: ""},
    phone: {isError: false, errorText: ""},
    code: {isError: false, errorText: ""},
    birthDate: {isError: false, errorText: ""},
    title: {isError: false, errorText: ""},
    password: {isError: false, errorText: ""},
    confirmPassword: {isError: false, errorText: ""},

    countryIncorporation: {isError: false, errorText: ""},
    companyName: {isError: false, errorText: ""},
    tradeName: {isError: false, errorText: ""},
    businessType: {isError: false, errorText: ""},
    regNumber: {isError: false, errorText: ""},
    dateReg: {isError: false, errorText: ""},
    vatTaxNumber: {isError: false, errorText: ""},
    businessSector: {isError: false, errorText: ""},
    website: {isError: false, errorText: ""},
    contactPerson: {isError: false, errorText: ""},
    companySameAddr: {isError: false, errorText: ""},
    companyUSPerson: {isError: false, errorText: ""},
    companyInstStatus: {isError: false, errorText: ""},

    countryBusinessReg: {isError: false, errorText: ""},
    cityBusinessReg: {isError: false, errorText: ""},
    postCodeBusinessReg: {isError: false, errorText: ""},
    addressBusinessReg1: {isError: false, errorText: ""},
    addressBusinessReg2: {isError: false, errorText: ""},
    countryBusinessActual: {isError: false, errorText: ""},
    cityBusinessActual: {isError: false, errorText: ""},
    postCodeBusinessActual: {isError: false, errorText: ""},
    addressBusinessActual1: {isError: false, errorText: ""},
    addressBusinessActual2: {isError: false, errorText: ""},

    manufacturers: {isError: false, errorText: ""},
    entertainment: {isError: false, errorText: ""},
    art: {isError: false, errorText: ""},
    chemical: {isError: false, errorText: ""},
    clientmoney: {isError: false, errorText: ""},
    cryptocurrency: {isError: false, errorText: ""},
    speculators: {isError: false, errorText: ""},
    gambling: {isError: false, errorText: ""},
    nonprofit: {isError: false, errorText: ""},
    metals: {isError: false, errorText: ""},
    cars: {isError: false, errorText: ""},

    ownStake: {isError: false, errorText: ""},
    beneficialOwner: {isError: false, errorText: ""},
    ubosList: [
      initialUboErrors
    ],
    shareholdersList: [
      initialShareholderErrors
    ],
    filesBankDetails: {isError: false, errorText: ""},
    walletNumber: {isError: false, errorText: ""}
  })

  console.log("errors==!", errors);
  const fieldsStep0 = {
    firstName: fields.firstName,
    lastName: fields.lastName,
    email: fields.email,
    phone: fields.phone,
    code: fields.code,
    birthDate: fields.birthDate,
    title: fields.title,
    password: fields.password,
    confirmPassword: fields.confirmPassword,
  }
  const fieldsStep1 = {
    countryIncorporation: fields.countryIncorporation,
    companyName: fields.companyName,
    tradeName: fields.tradeName,
    businessType: fields.businessType,
    regNumber: fields.regNumber,
    dateReg: fields.dateReg,
    vatTaxNumber: fields.vatTaxNumber,
    businessSector: fields.businessSector,
    website: fields.website,
    contactPerson: fields.contactPerson,

    companyUSPerson: fields.companyUSPerson,
    companyInstStatus: fields.companyInstStatus,
  }
  const fieldsStep2 = {
    countryBusinessReg: fields.countryBusinessReg,
    cityBusinessReg: fields.cityBusinessReg,
    postCodeBusinessReg: fields.postCodeBusinessReg,
    addressBusinessReg1: fields.addressBusinessReg1,
    addressBusinessReg2: fields.addressBusinessReg2,

    countryBusinessActual: fields.countryBusinessActual,
    cityBusinessActual: fields.cityBusinessActual,
    postCodeBusinessActual: fields.postCodeBusinessActual,
    addressBusinessActual1: fields.addressBusinessActual1,
    addressBusinessActual2: fields.addressBusinessActual2,

    companySameAddr: fields.companySameAddr
  }
  const fieldsStep3 = {
    manufacturers: fields.manufacturers,
    entertainment: fields.entertainment,
    art: fields.art,
    chemical: fields.chemical,
    clientmoney: fields.clientmoney,
    cryptocurrency: fields.cryptocurrency,
    speculators: fields.speculators,
    gambling: fields.gambling,
    nonprofit: fields.nonprofit,
    metals: fields.metals,
    cars: fields.cars,
  }
  const fieldsStep4 = {
    ownStake: fields.ownStake,
    beneficialOwner: fields.beneficialOwner,
    ubosList: fields.ubosList,
    shareholdersList: fields.shareholdersList
  }
  const fieldsStep5 = {
    filesBankDetails: fields.filesBankDetails,
    walletNumber: fields.walletNumber
  }

  console.log("fields",fields);
  const handleChange = async (value: any, name: string, listName?: 'ubosList' | 'shareholdersList', index?: number) => {
    console.log("change", name, " val:", value, "listName", index);
    let val = value;
    if (name === "filesPassport" || name === "filesBankDetails" || name === "filesBeneficiary"){
      if (value?.[0]){
        const res = await onSaveFile(value[0]);
        const {url, fileName} = res as SaveFileResponse;
        console.log("url file", url);
        val = [{file: {name: fileName}, url: url}];
      }
    }

    if (typeof listName !== "undefined" && typeof index !== "undefined"){
      setErrors((prev)=>{
        return {...prev, [listName]: [
            ...prev[listName].slice(0, index),
            {...prev[listName][index], [name] : {isError: false, errorText: ""}},
            ...prev[listName].slice(index+1),
          ] }
      })
    }else{
      if  (name === "filesBankDetails" || name === "walletNumber")  {
        setErrors((prev) => {
          return {...prev, filesBankDetails: {isError: false, errorText: ""},
                           walletNumber: {isError: false, errorText: ""}}
        })
      } else {
        setErrors((prev)=>{
          return {...prev, [name]: {isError: false, errorText: ""}}
        })
      }
    }

    if (typeof listName !== "undefined" && typeof index !== "undefined"){
      let copyFields = arrayClone(fields);
      copyFields[listName][index][name] = val;
      setFields(copyFields);
    }else {
      setFields((prev) => {
        return {
          ...prev,
          [name]: val
        }
      })
    }
  };

  const onSaveFile = async (file: File)=>{
    console.log("onSaveFile", file);
    return new Promise(async (resolve)=>{
      await saveFile({file}).unwrap().then((res)=>{
        console.log("then saveFile", res);
        resolve({url: res?.url ?? "", fileName: res?.fileName ?? file?.name})
      }).catch((err)=>{
        resolve({url:  "", fileName: ""});
        console.error("CATCH ERR savefile", err)
      })
    })
  }

  const addUbo = ()=>{
    setFields((prev)=>{
      return {...prev, ubosList: [...prev.ubosList, initialUbo]}
    })
    setErrors((prev: any) => {
      return {...prev, ubosList: [...prev.ubosList, initialUboErrors]}
    })
  }
  const addShareholder = ()=>{
    setFields((prev)=>{
      return {...prev, shareholdersList: [...prev.shareholdersList, initialShareholder]}
    })
    setErrors((prev: any) => {
      return {...prev, shareholdersList: [...prev.shareholdersList, initialShareholderErrors]}
    })
  }
  const deleteUbo = (index: number)=>{
    let copyFields = arrayClone(fields);
    copyFields.ubosList.splice(index,1);
    setFields(copyFields);

    let copyErrors = arrayClone(errors);
    copyErrors.ubosList.splice(index,1);
    setErrors(copyErrors);
  }
  const deleteShareholder = (index: number)=>{
    let copyFields = arrayClone(fields);
    copyFields.shareholdersList.splice(index,1);
    setFields(copyFields);

    let copyErrors = arrayClone(errors);
    copyErrors.shareholdersList.splice(index,1);
    setErrors(copyErrors);
  }
  const [steps, setSteps] = useState([
    {
      title: "Personal info",
      status: "default" as "completed" | "started" | "default"
    },
    {
      title: "About company ",
      status: "default" as "completed" | "started" | "default"
    },
    {
      title: "Company address",
      status: "default" as "completed" | "started" | "default"
    },
    {
      title: "Company industries",
      status: "default" as "completed" | "started" | "default"
    },
    {
      title: "Ultimate business owner",
      status: "default" as "completed" | "started" | "default"
    },
    {
      title: "Financial details",
      status: "default" as "completed" | "started" | "default"
    },
  ]);

  const nonEmptyFields =
    ["firstName", "lastName", "title", "phone", "code",
     "countryIncorporation", "companyName", "tradeName", "businessType", "regNumber", "vatTaxNumber", "businessSector",
     "countryBusinessReg", "cityBusinessReg", "addressBusinessReg1",
    ];

  const validateApi = async (step: number)=>{
    return new Promise<any>(async (resolve, reject)=>{
      // fetch
      // set errors
      // resolve true/false
      await validateStepApi({
        fields:
          step === 0 ? fieldsStep0 :
          step === 1 ? fieldsStep1 :
          step === 2 ? fieldsStep2 :
          step === 3 ? fieldsStep3 :
          step === 4 ? fieldsStep4 :
          step === 5 ? fieldsStep5 :  {},
          step: step,
        }).unwrap().then((res)=>{
        console.log("res validate step ",step, res);
        resolve(true);
      }).catch((err)=>{
        console.error("CATCH VALIDATE", step, err);
        if (err?.status === 400){
          let messages = err?.data?.errorMessages;
          const ubosCount = fields.ubosList.length;
           if (step === 4){
             console.log("fields", fieldsStep4);
             messages = messages?.[0]?.list
           }
          const newErrors = convertErrorMessagesToErrors(step, messages, errors, fields, ubosCount);
          setErrors(newErrors as any);
        }

        resolve(false);
      })

    })
  }
  const convertErrorMessagesToErrors = (step: number, messages: any[], errors: any, fields: any,
                                        ubosCount: number)=>{
    let copyErrors = arrayClone(errors);
    if (step === 4 && typeof ubosCount !== "undefined"){
      console.log("messages===",messages);
      if (typeof messages === "undefined") {return}
       const entries = Object.entries(messages);
       const keys = Object.keys(messages).map((key)=>+key).sort(); // 0, 1, 2,  3, 4 ... - общий список ключей по порядку для массива [...ubo, ...shareholders]
       console.log("keys!!",keys);                                       // 1, 2,   3
                                                                         // 3

       for (let i=0; i<keys.length; i++ ){
         const key = keys[i];
         const isUbo = key < ubosCount;
         const arrErrors = messages[key];
         arrErrors.forEach((err: any)=>{
           let entries = Object.entries(err);
           const name = entries?.[0]?.[0] ?? "" as string;
           const value = entries?.[0]?.[1];
           const listName = isUbo ? "ubosList" : "shareholdersList";
           const index = isUbo ? key : key - ubosCount;
           let nameField = name;

           if (name === "phoneNumber"){ nameField = "phone"}
           if (name === "countryCode"){ nameField = "code"}
           if (name === "ownershipStake"){ nameField = "ownStake"}
           if (name === "taxNumber"){ nameField = "taxId"}
           if (name === "criminalRecords"){ nameField = "existanceCriminal"}
           if (name === "politicallyEspoted"){ nameField = "politicallyEsposed"}
           if (name === "partcipationOtherBusiness"){ nameField = "otherBusiness"}
           if (name === "passport"){ nameField = "filesPassport"}

           if (!isUbo){
             const shareholderType = fields.shareholdersList[index]?.shareholderType;
             const isPerson = shareholderType === "PERSON";
             if (!isPerson){
               if (name === "phoneNumber"){ nameField = "companyPhone"}
               if (name === "countryCode"){ nameField = "companyCode"}
               if (name === "ownershipStake"){ nameField = "companyOwnStake"}
               if (name === "taxNumber"){ nameField = "companyTaxId"}
               if (name === "partcipationOtherBusiness"){ nameField = "companyOtherBusiness"}
               if (name === "passport"){ nameField = "filesBeneficiary"}
               if (name === "country"){nameField = "companyCountry"}
               if (name === "registrationDate"){nameField = "companyRegdate"}
               if (name === "regNumber"){nameField = "companyRegNumber"}
               if (name === "email"){nameField = "companyEmail"}
             }
           }


          /* API firstName	string
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

/*
           type uboType = {
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
             filesPassport: any[]
           }
           type shareholderType = {
             shareholderType: "PERSON" | "COMPANY";

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
           }*/
           copyErrors[listName][index][nameField] = {isError: true, errorText: value};
         })

        /* [ {ownershipStake: "Should not be empty"}
         1: {ownershipStake: "Must not be greater than 100"}
         2: {ownershipStake: "Must not be less than 0"}
         3: {ownershipStake: "Must be a number conforming to the specified constraints"}
         4: {taxNumber: "Should not be empty"}
         5: {taxNumber: "Must be a string"}
         6: {countryCode: "Should not be empty"}
         7: {countryCode: "Must be a string"}
         8: {email: "Should not be empty"} ]*/
       }
      /* messages.forEach((arr)=>{
         const isUbo = true;
       })*/

    }else{
      messages.forEach((msg)=>{
        let entries = Object.entries(msg);
        if (step === 0){
          const name = entries?.[0]?.[0] ?? "" as string;
          const value = entries?.[0]?.[1];
          let nameField = name;
          if (name === "countryCode"){nameField = "code"}
          copyErrors[nameField] = {isError: true, errorText: value};
        }
        if (step === 1){
          const name = entries?.[0]?.[0] ?? "" as string;
          const value = entries?.[0]?.[1];
          let nameField = name;
          if (name === "country"){nameField = "countryIncorporation"}
          if (name === "type"){nameField = "businessType"}
          if (name === "registrationNumber"){nameField = "regNumber"}
          if (name === "registrationDate"){nameField = "dateReg"}
          if (name === "taxNumber"){nameField = "vatTaxNumber"}
          if (name === "sector"){nameField = "businessSector"}
          if (name === "haveUsPerson"){nameField = "companyUSPerson"}
          if (name === "financialInstitution"){nameField = "companyInstStatus"}
          copyErrors[nameField] = {isError: true, errorText: value};
        }
        if (step === 2){
          const name = entries?.[0]?.[0] ?? "" as string;
          const value = entries?.[0]?.[1];
          let nameField = name;
          if (name === "regCountry"){nameField = "countryBusinessReg"}
          if (name === "regCity"){nameField = "cityBusinessReg"}
          if (name === "regPostCode"){nameField = "postCodeBusinessReg"}
          if (name === "regAddressLine1"){nameField = "addressBusinessReg1"}
          if (name === "regAddressLine2"){nameField = "addressBusinessReg2"}
          if (name === "actCountry"){nameField = "countryBusinessActual"}
          if (name === "actCity"){nameField = "cityBusinessActual"}
          if (name === "actPostCode"){nameField = "postCodeBusinessActual"}
          if (name === "actAddressLine1"){nameField = "addressBusinessActual1"}
          if (name === "actAddressLine2"){nameField = "addressBusinessActual2"}
          copyErrors[nameField] = {isError: true, errorText: value};
        }
        if (step === 5){
          const name = entries?.[0]?.[0] ?? "" as string;
          const value = entries?.[0]?.[1];
          let nameField = name;
          if (name === "usdDetail"){nameField = "filesBankDetails"}
          if (name === "usdtDetail"){nameField = "walletNumber"}
          copyErrors[nameField] = {isError: true, errorText: value};
        }
      })
    }
    console.log("copyErrors=",copyErrors);
    return copyErrors
  }
  const validateFields = (step: number)=>{
    let isValidStep = true;
    let copyErrors = arrayClone(errors);
    const fieldsStep = step === 0 ? fieldsStep0 :
      step === 1 ? fieldsStep1 :
      step === 2 ? fieldsStep2 :
      step === 3 ? fieldsStep3 :
      step === 4 ? fieldsStep4 :
      step === 5 ? fieldsStep5 : {}

    console.log("fieldsStep", fieldsStep);

    const entries = Object.entries(fieldsStep);
    entries.forEach((elem)=>{

      const name = elem[0] as string;
      const value = elem[1] as string;
      console.log("name", name, "value", value);
      let isValid = true;
      let errorText="";
      if (nonEmptyFields.indexOf(name) > -1){
        isValid = validateNotEmpty(value);
        if (!isValid){
         // errorText = "Fill the field";
        }
      }
      if (name === "email"){
        isValid = validateNotEmpty(value);
        if (isValid) {
          isValid = !!validateEmail(value);
          errorText="Enter correct email"
        }
      }
      if (name === "birthDate"){
        isValid = validateNotEmpty(value);
        if (isValid) {
          isValid = isOlder18(new Date(value));
          if (!isValid){
            errorText = "Age should be greater then 18";
          }
        }
      }
      if (name === "password" || name === "confirmPassword"){
        isValid = validatePassword(value);
        if (name === "confirmPassword" && isValid) {
          isValid = value === fields.password;
          if (!isValid){
            errorText = "Passwords are not equal"
          }
        }
      }
      if (name==="dateReg"){
        isValid = validateNotEmpty(value);
        if (isValid) {
          isValid = isBeforeToday(new Date(value));
          if (!isValid){
            errorText = "Please select past date";
          }
        }
      }
      if (name === "website"){
        if (value?.length > 0) {
          isValid = isURL(value);
          if (!isValid) {
            errorText = "Please enter correct url"
          }
        }
      }
      if (name === "postCodeBusinessReg" || (name === "postCodeBusinessActual" && !fields.companySameAddr)){
        isValid = validateNotEmpty(value);
        if (isValid) {
          isValid = isNumberStr(value);
          if (!isValid){
            errorText = "Please enter correct numeric code"
          }
        }
      }
      if (!fields.companySameAddr){ //actual address must be filled
        const nonEmptyFieldsActual=["countryBusinessActual", "cityBusinessActual", "addressBusinessActual1"]
        if (nonEmptyFieldsActual.indexOf(name) > -1){
          isValid = validateNotEmpty(value);
          if (!isValid){
            // errorText = "Fill the field";
          }
        }
      }
      if (name === "filesBankDetails" || name === "walletNumber"){

          if (!validateNotEmpty(fields.walletNumber) && fields.filesBankDetails?.length !==1){
            isValid = false;
          }
          if (name === "filesBankDetails"){
            errorText="Please upload a file and/or enter wallet number";
          }else{
            errorText="Please enter wallet number and/or upload a file";
          }

      }

      /*--UBOS--and--SHAREHOLDERS------------------------------*/
      if (name === "ubosList" || name === "shareholdersList"){
        console.log("NAME-",name);
        const arr = elem[1] as Array<any>;
        arr.forEach((person, index)=>{ //person = 1 ubo/shareholder object
          const entries = Object.entries(person);
          const isPerson =  name === "shareholdersList" && person.shareholderType === "PERSON" || name === "ubosList";
          entries.forEach((entry)=>{
            const nameField = entry[0];
            const value = entry[1] as string;
            let isValid = true;
            let errorText="";
            const nonEmptyPersonList = ["firstName", "lastName", "taxId", "phone", "code" ];
            const nonEmptyCompanyList = ["companyCountry", "companyName", "companyPhone",
              "companyCode", "companyRegNumber", "companyTaxId" ];
            const nonEmptyList = isPerson ? nonEmptyPersonList : nonEmptyCompanyList;

            if (nonEmptyList.indexOf(nameField) > -1){
              isValid = validateNotEmpty(value);
              if (!isValid){ /* errorText = "Fill the field";*/  }
            }
            if ( (nameField === "email" && isPerson) || (nameField === "companyEmail" && !isPerson) ){
              isValid = validateNotEmpty(value);
              if (isValid) {
                isValid = !!validateEmail(value);
                errorText="Enter correct email"
              }
            }
            if (nameField === "birthDate" && isPerson ){
              isValid = validateNotEmpty(value);
              if (isValid) {
                isValid = isOlder18(new Date(value));
                if (!isValid){
                  errorText = "Age should be greater then 18";
                }
              }
            }
            if (nameField === "companyRegdate" && !isPerson ){
              isValid = validateNotEmpty(value);
              if (isValid) {
                isValid = isBeforeToday(new Date(value));
                if (!isValid){
                  errorText = "Please select a past date";
                }
              }
            }


            if ( (nameField === "filesPassport" && isPerson) || (nameField === "filesBeneficiary" && !isPerson) ){
              if (value?.length !== 1){
                isValid = false;
                errorText="Please upload a file";
              }
            }
            if ((nameField === "ownStake") && isPerson || (nameField === "companyOwnStake" && !isPerson)){
              isValid = validateNotEmpty(value);
              if (isValid) {
                isValid = isNumberStr(value);
                if (!isValid){
                  errorText = "Only numbers are allowed";
                }
              }
            }
            if (!isValid) {
              isValidStep = false;
            }
            copyErrors[name][index][nameField] = {isError: !isValid, errorText: errorText}

          })
        })

      }else{
        if (!isValid) {
          isValidStep = false;
        }
        console.log("name=", name, "isValid",isValid, "errortext", errorText);
        copyErrors[name] = {isError: !isValid, errorText: errorText};
      }
      /*-------------------------------------------------------*/



    })
    console.log("errors now==", copyErrors);
    setErrors(copyErrors);
    return isValidStep;
  }
//onClickStepper: validate ALL prev fields && set Error Stepper Steps ИЛИ запрет на переход вперед по степперу, только по continue
  const onNext = async ()=>{
   /* const isAllValid = validateFields(activeStep);
    console.log("isAllValid",isAllValid);
    if (!isAllValid){
      return;
    }*/
    const isValidApi = await validateApi(activeStep);
    if (!isValidApi){
      return;
    }
    /*if (activeStep === steps.length - 1){
      await onSubmit();
      const newSteps = arrayClone(steps);
      const currentIndex = activeStep;
      const nextIndex = currentIndex + 1;
      newSteps[currentIndex].status = "completed";
      setActiveStep(nextIndex)
      setSteps(newSteps)*/

      const newSteps = arrayClone(steps);
      const currentIndex = activeStep;
      const nextIndex = currentIndex + 1;
      newSteps[currentIndex].status = "completed";
      setActiveStep(nextIndex);
      setSteps(newSteps)


  }

  const onSubmit = async ()=>{
    console.log("onSubmit start");
    const isValidApi = await validateApi(activeStep);
    if (!isValidApi){
      return;
    }
    await register({registerDto: convertFieldsRegToApiDto(fields)}).unwrap().then((res)=>{
      console.log("res register=",res);
      if (res && res?.email){
        setActiveStep(6);
        const newSteps = arrayClone(steps);
        newSteps[5].status = "completed";
        setSteps(newSteps)
      }
    })
  }
  useEffect(()=>{
    if (typeof window !== "undefined"){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [activeStep])
  const onStepClick = (n: number)=>{
    const stepStayed = steps.findIndex((step, index, arr)=>{
      return index > 0 && arr[index - 1].status === "completed" && arr[index].status === "default"
    })
    if (n === 0 || steps[n-1].status === "completed" ) {
      if ( activeStep !== stepStayed ){ //я на текущем последнем степе и иду назад => не надо текущий валидировать
        const isAllValid = validateFields(activeStep);
        //validate api
        if (!isAllValid){
          return;
        }
        setActiveStep(n);
      }else {
        setActiveStep(n)
      }
    }
  }
  console.log("steps", steps);
  return(
    <div className={styles.Wrapper}>

      <div style={{padding: "0 100px"}}>
      <Stepper activeStep={activeStep} steps={steps} theme={"dark"} onStepClick={onStepClick}/>
      </div>
      <div className={styles.spacer}/>
      <div className={styles.spacer}/>
      {activeStep === 0 && <Step0
        fields={fieldsStep0}
        onNext={onNext}
        errors={errors}
        onBack={()=>{}}
        handleChange={handleChange}/>}


      {activeStep === 1 && <Step1
        fields={fieldsStep1}
        handleChange={handleChange}
        onNext={onNext}
        errors={errors}
        onBack={()=>{setActiveStep((prev)=>prev - 1)}}
      />}

      {activeStep === 2 && <Step2
        fields={fieldsStep2}
        errors={errors}
        handleChange={handleChange}
        onNext={onNext}
        onBack={()=>{setActiveStep((prev)=>prev - 1)}}
      />}

      {activeStep === 3 && <Step3
            fields={fieldsStep3}
            handleChange={handleChange}
            onNext={onNext}
            onBack={()=>{setActiveStep((prev)=>prev - 1)}}
          />}
      {activeStep === 4 && <Step4
          fields={fieldsStep4}
          errors={errors}
          handleChange={handleChange}
          addUbo={addUbo}
          addShareholder={addShareholder}
          deleteUbo={deleteUbo}
          deleteShareholder={deleteShareholder}
          onNext={onNext}
          onBack={()=>{setActiveStep((prev)=>prev - 1)}}
      />}
      {activeStep === 5 && <Step5
        fields={fieldsStep5}
        handleChange={handleChange}
        errors={errors}
        onNext={onSubmit}
        onBack={()=>{setActiveStep((prev)=>prev - 1)}}
      />}
      {
        activeStep === 6 && <SuccessStep/>
      }
    </div>
  )
}
export default RegistrationForm