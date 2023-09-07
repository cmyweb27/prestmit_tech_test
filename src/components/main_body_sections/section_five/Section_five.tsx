import Image from "next/image";
import {
  Divider,
  Stack,
  Container,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import sect_five from "../../../../public/section_five.jpeg";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
export default function Section_five() {
  return (
    <Container className="mt-12">
      <Image
        alt=""
        src={sect_five}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} sm={6} className='m-auto mt-6'>
          <Typography className='text-4xl md:w-5/6 text-left'>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <div className="my-6 flex px-6">
            <Typography className="mr-auto">
              We connect our customers with the best.
            </Typography>
            <ArrowDropDownCircleIcon />
          </div>
          <Divider />
          <div className="my-6 flex px-6">
            <Typography className="mr-auto">We connect our customers with the best.</Typography>
            <ArrowDropDownCircleIcon />
          </div>
          <Divider />
        </Grid>
      </Grid>
    </Container>
  );
}
