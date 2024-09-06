import * as Yup from "yup"; // Import Yup

// Contact schema
export const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address") // Email validation
      .required("Email is required"),
    text: Yup.string()
      .min(10, "Message must be at least 10 characters long") // Minimum length validation
      .required("Message is required"),
  });