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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function Section_two() {
  return (
    <Container className="mt-12">
      <Grid container spacing={2} className="">
        <Grid item sm={12} xs={12} md={6} className="grid place-items-center">
          <img
          src="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_two_img.png"
          alt='section two image'
          className="object-contain"
          height={'auto'}
          width={'70%'}
          />
        </Grid>

        <Grid item sm={12} xs={12} md={6} className="mt-6">
          <Typography className="text-3xl md:w-4/5">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Typography>
          <div>
            <Stack direction="row" spacing={2} className="my-6">
              <CheckCircleIcon className="text-3xl"/>
              <Typography>We connect our customers with the best.</Typography>
            </Stack>
            <Stack direction="row" spacing={2} className="my-6">
              <CheckCircleIcon className="text-3xl"/>
              <Typography>Advisor success customer launch party.</Typography>
            </Stack>
            <Stack direction="row" spacing={2} className="my-6">
              <CheckCircleIcon className="text-3xl"/>
              <Typography>Business-to-consumer long tail.</Typography>
            </Stack>
          </div>
          
            <Button
              className="rounded-full px-12 p-4 bg-blue my-6"
              variant="contained"
            >
              <Typography className="capitalize text-white">start now</Typography>
            </Button>
          
        </Grid>
      </Grid>
    </Container>
  );
}
