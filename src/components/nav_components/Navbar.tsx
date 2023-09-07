import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Toolbar, Container, Typography ,IconButton} from "@mui/material";
export default function Navbar() {
  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
        className="sm:hidden"
      >
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            <Image
              src="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/Logo_prestmit_test.png"
              width={100}
              height={100}
              alt="Picture of logo"
              className="mr-auto"
            />

            <Typography className="capitalize font-bold pl-6">
              product
            </Typography>
            <Typography className="capitalize font-bold pl-6">
              services
            </Typography>
            <Typography className="capitalize font-bold pl-6">about</Typography>
            <div className="pl-6">
              <Button
                className="bg-slate-50 rounded-full p-2 px-8 hover:"
                variant="contained"
              >
                <Typography className="capitalize font-bold text-black">
                  log in
                </Typography>
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      className="md:hidden"
      >
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            <Image
              src="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/Logo_prestmit_test.png"
              width={100}
              height={100}
              alt="Picture of logo"
              className="mr-auto"
            />
            <IconButton>
              <MenuIcon className='text-4xl text-white'/>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
