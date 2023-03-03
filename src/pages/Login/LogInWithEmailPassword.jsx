// import React, { useState } from "react";
// import { Button, Checkbox, Form, Input } from "antd";
// import { signInAuthUserWithEmailPassword } from "../../services/firebase/firebase.config";

// const defaultFormFiled = {
//   displayName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const SignInWithEmailPassword = () => {
//   const [formField, setFormField] = useState(defaultFormFiled);
//   const { email, password } = formField;
//   const resetFormFields = () => {
//     setFormField(defaultFormFiled);
//   };

//   const handleSubmit = async (evt) => {
//     evt.preventDefault();

//     try {
//       const response = await signInAuthUserWithEmailPassword(email, password);
//       console.log(response);
//       resetFormFields();
//     } catch (error) {
//       console.log(error);
//       switch (error.code) {
//         case "auth/wrong-password":
//           alert("Email or password does not correct");
//           break;
//         case "auth/user-not-found":
//           alert("No user associated with this email");
//           break;

//         default:
//           console.log("User creation encounter error ", error);
//       }
//     }
//   };

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormField({ ...formField, [name]: value });
//   };
//   return (
//     <div>
//       <h1>Sign In With Email And Password</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           required
//           type="text"
//           onChange={handleChange}
//           name="email"
//           value={email}
//         ></input>
//         <label>Password</label>
//         <input
//           required
//           type="password"
//           onChange={handleChange}
//           name="password"
//           value={password}
//         ></input>

//         <button>Sign in</button>
//       </form>
//     </div>
//   );
// };

// export default SignInWithEmailPassword;

import { Button, Checkbox, Form, Input, Typography, Layout } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import {
  getCurrentUser,
  signInAuthUserWithEmailPassword,
} from "../../services/config/firebase.config";
import { useForm } from "antd/es/form/Form";
import * as yup from "yup";
import { Fragment } from "react";

const LogInWithEmailPassword = () => {
  const [form] = useForm();
  const { Title } = Typography;

  // Using Yup to validate
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input your email!")
      .email("Email is valid!"),
    password: yup.string().required("Please input your password!"),
  });

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  // Handle login form
  const onFinish = async (values) => {
    try {
      // Check account which was register in Firebase
      await signInAuthUserWithEmailPassword(values.email, values.password);
      // Clear form when success
      form.setFieldsValue({
        email: "",
        password: "",
      });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Email or password does not correct");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;

        default:
          console.log("User creation encounter error ", error);
      }
    }
  };

  return (
    <div
      style={{
        width: "400px",
        alignContent: "center",
        margin: "10% auto",
      }}
      className="backdrop-blur-sm bg-white/30 backdrop-brightness-150 rounded-3xl p-6 "
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        form={form}
      >
        <Title
          level={1}
          style={{
            fontFamily: "Lora",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Login
        </Title>
        <Form.Item name="email" rules={[yupSync]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="password" rules={[yupSync]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LogInWithEmailPassword;
