import {
  Button,
  Container,
  Typography,
  Grid,
  Stack,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Section_four_card from "./Section_four_card";
export default function Section_four() {
  return (
    <Container className="bg-blue p-6 py-12" >
      <div>
        <div className="flex">
          <Typography className="mr-auto md:w-3/5 text-white text-3xl font-semibold">
            An enterprise template to ramp up your company website
          </Typography>
          <Stack spacing={3} direction="row" className="sm:hidden">
            <ArrowForwardIcon className='bg-white rounded-full text-4xl' />
            <ArrowBackIcon className='bg-white rounded-full text-4xl'/>
          </Stack>
        </div>
      </div>
      <Grid container spacing={4} className="mt-8 ">
        <Grid item md={4} sm={12} xs={12}>
          <Section_four_card
            title="Manager @ Howarts"
            text="Buyer buzz partner network disruptive non-disclosure agreement business"
            name="Albus Dumbledore"
            img=""
            avatar="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_four_avatar1.png"
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Section_four_card
            title="Manager @ Slytherin"
            text="Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
            name="Severus Snape"
            img=""
            avatar="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_four_avatar2.png"
          />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Section_four_card
            title="Team Leader @ Gryffindor"
            text="Release facebook responsive web design business model canvas seed money monetization."
            name="Harry Potter"
            img=""
            avatar="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_four_avatar3.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
