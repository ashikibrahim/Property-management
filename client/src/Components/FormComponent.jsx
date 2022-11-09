import React from 'react'
import {
    Card,
    CardContent,
    Button,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    Select,
    MenuItem,
    FormLabel,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import {useState} from 'react'
  
function FormComponent() {
  const [image,setImage]= useState( )
  return (
  <>
  <div style={{ paddingTop: "50px" }}>
        {/* <h1 className="page-title mt-5"> </h1> */}
        <hr />
        <div>
          <form 
          // onSubmit={handleSubmit} 
          allign="center">
            <Typography gutterBottom variant="h4" align="center">
              Property-Form
              <hr />
            </Typography>
            <Card>
              <CardContent>
                <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="firstName"
                    type="text"
                    name="firstName"
                    // onChange={(e)=>(e.value)}
                    // value=Dr
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Phone Number
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="phoneNumber"
                    type="text"
                    name="phoneNumber"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Location
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="location"
                    type="text"
                    name="location"
                  />
                </FormControl>
                

               
                <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    {" "}
                    Price
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="price"
                    name="price"
                  />
                </FormControl>
                

                {/* <Typography sx={{ mr: 20 }} align="center">image</Typography> */}
                <FormControl fullWidth sx={{ m: 1, width: "70ch", ml: 45 }}>
                  <FormLabel htmlFor="outlined-adornment-amount">
                    image
                  </FormLabel>
                  <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </FormControl>
              </CardContent>
              <Box align="center">
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </Card>
          </form>
        </div>
      </div>
  </>
  )
}

export default FormComponent