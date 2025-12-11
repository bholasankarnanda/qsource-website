import { Box, Typography, TextField, Button, Stack } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
        }}
      >
        
        <Typography
          fontWeight={700}
          textAlign="center"
          variant="h3"
          color="black"
          fontSize="3rem"
          mt={4}
        >
          Contact
        </Typography>

        {/*subtitle*/}
        <Box sx={{ maxWidth: "600px", textAlign: "center" }} mt={2}>
          <Typography fontWeight={500} color="text.secondary" fontSize="1.5rem" >
            Connect with confidence. Our dedicated team is ready to answer your
            questions and find the best solutions for you.
          </Typography>
        </Box>

       
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "20px",
            p: 4,
            mt: 5,
            mb: 5,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="#1976d2" fontSize="1.8rem" mb={3}>
            Send a message
          </Typography>
          

         
          <form>
            <Stack spacing={3}>
             {/*first row*/}
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  size="medium"
                />
                <TextField
                  fullWidth
                  label="Your Email Address"
                  variant="outlined"
                  size="medium"
                />
              </Stack>

              {/*second row */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  size="medium"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  size="medium"
                />
              </Stack>

             
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Your Message"
                variant="outlined"
              />

              <Button
                variant="contained"
                fullWidth
                sx={{
                  py: 1.2,

                  fontSize: "1rem",
                  borderRadius: "10px",
                  background: "#42a5f5",
                 
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
