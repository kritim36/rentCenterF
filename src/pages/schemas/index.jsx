import * as Yup from "yup";

// Validation schema for vehicle
const vehicleSchema = Yup.object().shape({
  productName: Yup.string().min(3).max(10).required("Please enter First Name"),
  productBrand: Yup.string().required("Please select an option"),
  productCategory: Yup.string().required("Please select an option"),
  productRegistrationNumber: Yup.string().min(5).max(8),
  productFuelType: Yup.string(),
  city: Yup.string().min(3).max(15).required("Please enter your city"),
  productLocation: Yup.string().min(3).max(15).required("Please enter your place"),
  productPrice: Yup.number().min(2).max(5000).required("Please enter Price Per Day"),
  productDescription: Yup.string().required("Please enter your instructions"),
  productGuideline: Yup.string().required("Please enter your guideline"),
  productImage: Yup.mixed().required("Please upload vehicle image"),
  productBluebookImage: Yup.mixed(),
  productInsuranceImage: Yup.mixed(),
  //insurancedate: Yup.date().required('Please enter a valid date'),
  availableDate: Yup.date().required('Please enter a valid date'),
  
});

// Validation schema for electronic
const electronicSchema = Yup.object().shape({
  productModelNumber: Yup.string().min(5).max(8).required("Please enter model number of gadget"),
  //emanufacturer: Yup.string().required("Please select an option"),
  // productImage: Yup.mixed().required("Please upload a gadget image"),
  //billimage: Yup.mixed().required("Please upload a Bill image"),
  availableDate: Yup.date().required('Please enter a valid date'),
  
});

// Combined schema with dynamic validation
export const combinedSchema = (selectedOption) => {
  if (selectedOption === 'electronics') {
    return Yup.object().shape({ ...vehicleSchema.fields, ...electronicSchema.fields });
  } else {
    return vehicleSchema;
  }
};
