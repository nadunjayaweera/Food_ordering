import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
// import { useHistory } from 'react-router-dom';

export default function SignUpPage() {
//   const history = useHistory();
  const [formData, setFormData] = React.useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [errorMessage, setErrorMessage] = React.useState(null);

const handleSignUp = () => {
  // Send formData to backend API
  fetch('http://localhost:8080/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Email already exists');
      }
      return response.json();
    })
    .then((data) => {
      // Handle successful sign-up
      console.log(data);
    //   history.push('/item');
    })
    .catch((error) => {
      // Handle sign-up error
      console.error(error);
      // Set error message state variable
      setErrorMessage(error.message);
    });
};


  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            backgroundImage: 'url(https://i.pinimg.com/originals/da/cc/c4/daccc4dbab13c70b3058e60d14314559.jpg)',
            backgroundSize: 'cover',
          }}
          variant="outlined"
        >
          
          <div>
            <Typography level="h4" component="h1" color="white">
              <b>Sign Up</b>
            </Typography>
            <Typography level="body2" color="white">Create a new account.</Typography>
          </div>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              name="fname"
              type="text"
              placeholder="Nadun"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              name="lname"
              type="text"
              placeholder="Jayaweera"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="nadun@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button sx={{ mt: 1 }} onClick={handleSignUp}>
            Sign up
          </Button>
          <Typography style={{ color: 'red' }}>
            {errorMessage}
          </Typography>
          <Typography
            endDecorator={<Link href="/">Log in</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
