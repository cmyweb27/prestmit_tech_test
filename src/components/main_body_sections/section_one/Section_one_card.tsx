import {
  Button,
  Divider,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
type props = {
  text_title: string;
  img: string;
};
export default function Section_one_card({ text_title, img }: props) {
  return (
    <Card className="border-hidden shadow-none grid place-items-center">
      <CardMedia
        component="img"
        // sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={img}
        //  className="rounded-lg"
        className="object-contain w-5/6 "

        //heigth={'auto'}
      />
      <CardContent>
        <Typography className=" text-xl capitalize" gutterBottom>
          {text_title}
        </Typography>
        <Typography className="text-gray">
          Learning curve network effects return on investment.
        </Typography>
      </CardContent>
      <div className="mr-auto">
        <Button
          size="large"
          endIcon={<ArrowForwardIcon />}
          className="capitalize text-lg font-bold text-black"
        >
          <Typography className="capitalize  font-bold text-blue">
            Explore page
          </Typography>
        </Button>
        <Divider className="mr-auto border-1 bg-blue" />
      </div>
     
    </Card>
  );
}
