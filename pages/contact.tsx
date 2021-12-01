import React from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import { Formik } from 'formik';

import Layout from '../components/layout';
import { PageTitle } from '../components/atoms/page-title';
import { getPageContent } from '../lib/graphcms/pageContent';

const Contact: NextPage = ({
  pageContent,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout pageTitle="Contact">
    <PageTitle title="Contact" />
    <main className="contact-text">
      <ReactMarkdown>{pageContent.content}</ReactMarkdown>
      <Formik
        initialValues={{ email: '', subject: '', message: '' }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <fieldset className="form-fieldset input-ui">
              <input
                type="email"
                name="email"
                tabIndex={0}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <label htmlFor="email">
                <span data-text="Email Address">Email Address</span>
              </label>
              {errors.email && touched.email && errors.email}
            </fieldset>
            <fieldset className="form-fieldset input-ui">
              <input
                type="text"
                name="subject"
                tabIndex={1}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              <label htmlFor="subject">
                <span data-text="Subject">Subject</span>
              </label>
              {errors.subject && touched.subject && errors.subject}
            </fieldset>
            <fieldset className="form-fieldset input-ui">
              <textarea
                name="message"
                tabIndex={2}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <label htmlFor="message">
                <span data-text="Message">Message</span>
              </label>
            </fieldset>
            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length !== 0}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </main>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const pageContent = await getPageContent('contact');

  return {
    props: {
      pageContent,
    },
  };
};

export default Contact;
