import Image from "next/image";
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
export default function Footer_part_one() {
  return (
    <Grid item xs={12} sm={12} md={5}>
      <Image
        src="https://prestmit-tech-test.s3.eu-west-1.amazonaws.com/boldo_blue_logo.png"
        width={100}
        height={100}
        alt="Picture of logo"
      />
<div className="md:w-2/3 sm:1/1 mt-6">
      <Typography className="text-gray text-left ">
        Social media validation business model canvas graphical user interface
        launch party creative facebook iPad twitter.
      </Typography>
      </div>
    </Grid>
  );
}
