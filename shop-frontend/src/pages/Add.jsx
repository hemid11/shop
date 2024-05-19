import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../Api';

const ProductSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  description: Yup.string(),
  imageUrl: Yup.string().url('Invalid URL'),
  inStock: Yup.boolean()
});

function Add() {
  return (
    <div>
      <h1>Add Product</h1>
      <Formik
        initialValues={{
          name: '',
          price: '',
          description: '',
          imageUrl: '',
          inStock: true
        }}
        validationSchema={ProductSchema}
        onSubmit={(values, { setSubmitting }) => {
          api.post('/', values)
            .then(response => {
              setSubmitting(false);
              alert('Product added!');
            })
            .catch(error => {
              setSubmitting(false);
              alert('Error adding product');
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label>Price</label>
              <Field type="number" name="price" />
              <ErrorMessage name="price" component="div" />
            </div>
            <div>
              <label>Description</label>
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" />
            </div>
            <div>
              <label>Image URL</label>
              <Field type="text" name="imageUrl" />
              <ErrorMessage name="imageUrl" component="div" />
            </div>
            <div>
              <label>
                <Field type="checkbox" name="inStock" />
                In Stock
              </label>
            </div>
            <button type="submit" disabled={isSubmitting}>Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Add;
