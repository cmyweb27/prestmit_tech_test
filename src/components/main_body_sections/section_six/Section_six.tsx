import {
  Divider,
  Stack,
  Container,
  Typography,
  Grid,
  Card,
  Button,
} from "@mui/material";
import img_one from "../../../../public/section_six_img_one.png";
import img_two from "../../../../public/section_six_img_two.png";
import img_three from "../../../../public/section_six_img_three.png";
import Section_six_card from "./Section_six_card";
import Image from "next/image";
export default function Section_six() {
  return (
    <Container className="mt-12">
      <div className="grid place-items-center">
        <Typography className=" text-gray text-lg" gutterBottom>Our Blog</Typography>
        <Typography className=" md:w-3/5 font-semibold text-3xl text-center text-black " gutterBottom> 
          Value proposition accelerator product management venture
        </Typography>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          <Section_six_card
            text="Pitch termsheet backing validation focus release."
            name="Chandler Bing"
            img={
              "https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_six_img_one.png"
            }
            avatar='https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_six_avatar1.png'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Section_six_card
            text="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
            name="Rachel Green"
            img={
              "https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_six_img_two.png"
            }
            avatar='https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_six_avatar2.png'
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Section_six_card
            text="Beta prototype sales iPad gen-z marketing network effects value proposition"
            name="Monica Geller"
            img={
              "https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_six_img_three.png"
            }
            avatar='https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_six_avatar3.png'
          />
        </Grid>
      </Grid>

      <div className=" place-items-center grid mt-6">
        <Button variant="outlined" className="capitalize border-2 border-blue p-4 px-12 bg-white rounded-full" >
          <Typography className="text-black">load more</Typography>
        </Button>
      </div>
    </Container>
  );
}
