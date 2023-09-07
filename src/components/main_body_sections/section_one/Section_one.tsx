import { Button, Container, Typography, Grid, Card } from "@mui/material";
import Section_one_card from "./Section_one_card";

export default function Section_one() {
  return (
    <Container className="mt-12">
      <div className="grid place-items-center">
        <Typography  className="capitalize text-center text-gray" gutterBottom>Our services</Typography>
        <Typography className="text-3xl  md:w-3/6 mb-6" gutterBottom>
          Handshake infographic mass market crowdfunding iteration.
        </Typography>
        <Typography className=""></Typography>
      </div>
      <Grid container spacing={4} className="">
        <Grid item md={4} xs={12} sm={12}>
          <Section_one_card
            img={
              "https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_one_img_one.jpeg"
            }
            text_title={"Cool feature title"}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          <Section_one_card
            img={
              "https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_one_image_two.jpeg"
            }
            text_title={"Even cooler feature"}
          />
        </Grid>
        <Grid item md={4} xs={12} sm={12}>
          <Section_one_card
            img={
              "https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_one_img_three.jpeg"
            }
            text_title={"Cool feature title"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
