import * as Yup from "yup";

// Validation schema for vehicle
const vehicleSchema = Yup.object().shape({
  firstName: Yup.string().min(3).max(10).required("Please enter First Name"),
  registrationNumber: Yup.string().min(5).max(8).required("Please enter registration number of vehicle"),
  fuel: Yup.string().required("Please select an option"),
  city: Yup.string().min(3).max(15).required("Please enter your city"),
  place: Yup.string().min(3).max(15).required("Please enter your place"),
  price: Yup.number().min(2).max(5000).required("Please enter Price Per Day"),
  instruction: Yup.string().required("Please enter your instructions"),
  guideline: Yup.string().required("Please enter your guideline"),
  vimage: Yup.mixed().required("Please upload vehicle image"),
  bimage: Yup.mixed().required("Please upload Bluebook image"),
  inimage: Yup.mixed().required("Please upload Insurance image"),
  insurancedate: Yup.date().required('Please enter a valid date'),
  date: Yup.date().required('Please enter a valid date'),
  
});

// Validation schema for electronic
const electronicSchema = Yup.object().shape({
  modelNumber: Yup.string().min(5).max(8).required("Please enter model number of gadget"),
  emanufacturer: Yup.string().required("Please select an option"),
  gadgetimage: Yup.mixed().required("Please upload a gadget image"),
  billimage: Yup.mixed().required("Please upload a Bill image"),
  date: Yup.date().required('Please enter a valid date'),
  
});

// Combined schema with dynamic validation
export const combinedSchema = (selectedOption) => {
  if (selectedOption === 'electronics') {
    return Yup.object().shape({ ...vehicleSchema.fields, ...electronicSchema.fields });
  } else {
    return vehicleSchema;
  }
};
