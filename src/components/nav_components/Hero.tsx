import Image from "next/image";
import {
  AppBar,
  Button,
  Toolbar,
  Container,
  Typography,
  Grid,
} from "@mui/material";

export default function Hero() {
  return (
    <div className="">
      <Container>
        <Grid container spacing={2} className="">
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            className="md:mt-12 sm:grid sm:place-items-center mt-6"
          >
            <Typography
              className="text-4xl md:w-4/5 text-white text-center"
              gutterBottom
            >
              Save time by building fast with Boldo Template
            </Typography>
            <Typography
              className="mt-4 text-white md:w-4/5 text-center"
              gutterBottom
            >
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </Typography>
            <div className="  mt-6">
              <Button
                className="bg-green rounded-full mx-3 md:p-4 md:px-12"
                variant="contained"
              >
                <Typography className="text-blue   capitalize">
                  buy template
                </Typography>
              </Button>
              <Button
                className=" border-2 border-white rounded-full mx-3 md:p-4 md:px-12 "
                variant="outlined"
              >
                <Typography className="capitalize text-white font-semibold">
                  explore
                </Typography>
              </Button>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            className="mt-6 grid place-items-center"
          >
            <img
              src="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/boldo_hero_img.png"
              className="object-contain "
              width={"80%"}
              height={"auto"}
              alt="Picture of stat"
            />
          </Grid>
        </Grid>
        <div className="mt-12 ">
          
          <img
            src="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/Logos.png"
            className="h-12 max-h-full"
            width={"100%"}
           
            
            alt="Picture of stat"
          />
        </div>
      </Container>
     
    </div>
  );
}
