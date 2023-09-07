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

export default function Footer_part_four() {
  return (
    <Grid item sm={4} xs={4} md>
      <Stack direction="column" spacing={3}>
        <Typography className="capitalize font-bold text-lg text-black">
          resources
        </Typography>

        <Typography className="capitalize text-gray font-semibold">blog</Typography>
        <Typography className="capitalize text-gray font-semibold">products</Typography>
        <Typography className="capitalize text-gray font-semibold">services</Typography>
        </Stack>
    </Grid>
  );
}
