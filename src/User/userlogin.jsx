
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
// import foodimage from "./image/foodimage.jpg";

export default function Userlogin() {
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleLogin = async () => {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const response = await fetch('http://localhost:8080/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(email);
      if (email === 'admin@admin.com') {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/item';
      }
    } else {
      const error = await response.json();
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
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
              <b>LET'S STRAY YOUR ORDER</b>
            </Typography>
            <Typography level="body2" color="white">Log in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel sx={{ color: 'white' }}>Username*</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="nadun@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ color: 'white' }}>Password*</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleLogin}>
            Log in
          </Button>

          <Typography style={{ color: 'red' }}>{errorMessage}</Typography>

          <Typography
            endDecorator={<Link href="/signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center', color: 'white' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
