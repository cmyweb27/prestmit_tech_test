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
import Footer_part_one from "./Footer_part_one";
import Footer_part_two from "./Footer_part_two";
import Footer_part_three from "./Footer_part_three";
import Footer_part_four from "./Footer_part_four";

export default function Footer_index() {
  return (
    <Container className="my-12">
      <Grid container spacing={2}>
        <Footer_part_one />
        <Footer_part_two />
        <Footer_part_three />
        <Footer_part_four />
      </Grid>
      <Typography className="mt-6 text-gray font-semibold">
        All rights reserved.
      </Typography>
    </Container>
  );
}
