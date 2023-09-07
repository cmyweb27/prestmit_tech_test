import {
  Divider,
  Stack,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  CardActions,
  CardMedia,
} from "@mui/material";
import Image from 'next/image'
type props = {
  img: any;
  name: string;
  text: string;
  avatar:string;
};
export default function Section_six_card({ text, name, img , avatar}: props) {
    {console.log(img, 'img')}
  return (
    <Card  className="rounded-lg py-4 px-2" style={{ border: "none", boxShadow: "none" }}>
      <CardMedia 
       component="img"
       // sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
    //    image={img}
       //  className="rounded-lg"
src={img}
       title=""/>
      
     
        
       
     
     
      <CardContent> 
        <Typography className="mb-2" gutterBottom>
          {" "}
          <span className="font-bold" >Category</span> November 22, 2021
        </Typography>
        <Typography className=''>{text}</Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Avatar alt="avatar image" src={avatar} />
          
            <Typography className="">{name}</Typography>
           
        </Stack>
      </CardActions>
    </Card>
  );
}
