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
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LightModeIcon from "@mui/icons-material/LightMode";
export default function Section_three() {
  return (
    <Container className="mt-12">
      <Grid container spacing={2} className="">
        <Grid item sm={12} xs={12} md={6} className="">
          <Typography className="text-3xl md:w-4/5 md:text-justify mt-12">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Typography>
          <div>
            <Stack direction="row" spacing={2} className="my-6 bg-blue p-3 shadow-lg">
              <EnergySavingsLeafIcon className="text-white"/>
              <Typography className='text-white '>We connect our customers with the best.</Typography>
            </Stack>
            <Stack direction="row" spacing={2} className="my-6 bg-white p-3 shadow-lg">
              <RemoveRedEyeIcon />
              <Typography>Advisor success customer launch party.</Typography>
            </Stack>
            <Stack direction="row" spacing={2} className="my-6 bg-white p-3 shadow-lg">
              <LightModeIcon />
              <Typography>Business-to-consumer long tail.</Typography>
            </Stack>
          </div>

        </Grid>

        <Grid item sm={12} xs={12} md={6} className="grid place-items-center">
          <img
            src="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/section_three_img.png"
            alt="section three image"
            className="object-contain "
           height={'auto'}
           width={'70%'}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
