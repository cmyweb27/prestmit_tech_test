import {
  Button,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
} from "@mui/material";

export default function Footer_part_three() {
  return (
    <Grid item sm={4} xs={4} md>
      <Stack direction="column" spacing={3}>
        <Typography className="capitalize font-bold text-lg text-black">
          company
        </Typography>

        <Typography className="capitalize text-gray font-semibold">home</Typography>
        <Stack direction="row" spacing={1}>
          {" "}
          <Typography className="capitalize text-gray font-semibold">careers</Typography>
          <Chip label="Hiring!" className="bg-green " />{" "}
        </Stack>

        <Typography className="capitalize text-gray font-semibold">services</Typography>
      </Stack>
    </Grid>
  );
}
