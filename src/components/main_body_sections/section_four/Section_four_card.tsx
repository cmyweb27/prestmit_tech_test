import {
  Button,
  Container,
  Typography,
  Stack,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
type props = {
  avatar:string;
  title: string;
  img: string;
  name: string;
  text: string;
};
export default function Section_four_card({ img,avatar, title, text, name }: props) {
  return (
    <Card  style={{ border: "none",  }} className="rounded-lg py-4 px-2" >
      <CardMedia
        component="img"
        // sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        image={img}
        //  className="rounded-lg"

        title=""
      />
      <CardContent>
        <Typography className=" text-xl capitalize">{text}</Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={avatar} />
          <div>
            <Typography className="">{name}</Typography>
            <Typography className="">{title}</Typography>
          </div>
        </Stack>
      </CardActions>
    </Card>
  );
}
