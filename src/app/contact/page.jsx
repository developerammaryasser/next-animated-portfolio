"use client"
import {delay, motion} from 'framer-motion'
import React from "react"; // Ensure React is imported
import { useFormik } from "formik";
import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import InputGroup from "@/components/elements/InputGroup";
import Section from "@/components/elements/Section";
import Textarea from "@/components/elements/Textarea";
import Typography from "@/components/elements/Typography";
import { validationSchema } from "@/utils/validations";
const Contact = () => {
  // Handle form
  const formik = useFormik({
    initialValues: {
      email: "",
      text: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="w-screen"
    >
      <Section id="contact" className="h-[calc(100vh-5rem)]">
        <div
          className={`flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 h-full`}
        >
          <Typography variant="h1" className={`!text-3xl`}>
            Say Hello
          </Typography>
          <form
            noValidate={true}
            onSubmit={formik.handleSubmit}
            action=""
            className="rounded-lg bg-slate-100 border p-4 md:p-8 lg:p-12 w-full lg:w-[40vw] lg:h-[80vh] flex flex-col items-stretch justify-center gap-8"
          >
            <InputGroup
              label={{ isLabel: true, id: "text", text: "Enter your message:" }}
            >
              <Textarea
                placeholder="Say something!"
                id="text"
                name="text"
                onChange={formik.handleChange}
                value={formik.values.text}
              ></Textarea>
              {formik.errors.text && formik.touched.text ? (
                <p className="text-sm text-red-400">{formik.errors.text}</p>
              ) : (
                ""
              )}
            </InputGroup>
            <InputGroup
              label={{ isLabel: true, id: "email", text: "Enter your email:" }}
            >
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="ex: 6WQpA@example.com"
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-sm text-red-400">{formik.errors.email}</p>
              ) : (
                ""
              )}
            </InputGroup>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </form>
        </div>
      </Section>
    </motion.div>
  );
};
export default Contact;
