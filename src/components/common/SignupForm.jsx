import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";

const SignupForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signinForm = useFormik({
    initialValues: {
      password: "",
      username: "",
      display_name: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "ناوەکە دەێت لە ٨ پیت کەمتر نەبێت")
        .required("ناوەکەت بنووسە تکایە"),
      password: Yup.string()
        .min(8, "وشەی نهێنی دەێت لە ٨ پیت کەمتر نەبێت")
        .required("وشەی نهێنی بنووسە تکایە"),
      display_name: Yup.string()
        .min(8, "ناز ناوەکە دەێت لە ٨ پیت کەمتر نەبێت")
        .required("ناز ناوەکەت بنووسە تکایە"),
        confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "هەمان وشەی نهێنی نییه")
          
        .required("وشەی نهێنی دووپات بکەکەوە تکایە")
    }),
    onSubmit: async values => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      console.log("asdasdasdasd");
      const { response, err } = await userApi.signup(values);
      setIsLoginRequest(false);

      if (response) {
        signinForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success("چوونە ژوورەوە سەرکەوتو بوو");
      }

      if (err) setErrorMessage(err.message);
    }
  });

  return (
    <Box component="form" onSubmit={signinForm.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder="ناوی بەکارهێنەر"
          name="username"
          fullWidth
          value={signinForm.values.username}
          onChange={signinForm.handleChange}
          color="success"
          error={signinForm.touched.username && signinForm.errors.username !== undefined}
          helperText={signinForm.touched.username && signinForm.errors.username}
        />
        <TextField
          type="text"
          placeholder="ناز ناو "
          name="display_name"
          fullWidth
          value={signinForm.values.display_name}
          onChange={signinForm.handleChange}
          color="success"
          error={signinForm.touched.display_name && signinForm.errors.display_name !== undefined}
          helperText={signinForm.touched.display_name && signinForm.errors.display_name}
        />
        <TextField
          type="password"
          placeholder="وشەی نهێنی"
          name="password"
          fullWidth
          value={signinForm.values.password}
          onChange={signinForm.handleChange}
          color="success"
          error={signinForm.touched.password && signinForm.errors.password !== undefined}
          helperText={signinForm.touched.password && signinForm.errors.password}
        />
        <TextField
          type="password"
          placeholder="دوپات کردنەوەی وشەی نهێنی"
          name="confirm_password"
          fullWidth
          value={signinForm.values.confirm_password}
          onChange={signinForm.handleChange}
          color="success"
          error={signinForm.touched.confirm_password && signinForm.errors.confirm_password !== undefined}
          helperText={signinForm.touched.confirm_password && signinForm.errors.confirm_password}
        />
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
      >
        دروستکردنی هەژماری نوێ
      </LoadingButton>

      <Button
        fullWidth
        sx={{ marginTop: 1 }}
        onClick={() => switchAuthState()}
      >
        چوونە ژوورەوە
      </Button>

      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default SignupForm;