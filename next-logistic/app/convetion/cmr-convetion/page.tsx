import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CMRConvetion() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "text.secondary",
      }}
    >
      <Box
        sx={{
          color: "text.secondary",
          px: { xs: 3, md: 3 },
          py: { xs: 2, md: 1 },
          width: { xs: "90%", md: "70%", lg: "60%" },
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "text.primary",
            mb: 2,
            fontWeight: 600,
          }}
        >
          CONVENTION ON THE CONTRACT FOR THE INTERNATIONAL CARRIAGE OF GOODS BY
          ROAD (CMR)
        </Typography>
        <Typography sx={{}}>
          Ratified by Decree No. 1143 of the State Council of 29.07.1977 – State
          Gazette, issue 61 of 5.08.1977.
        </Typography>
        <Typography sx={{}}>
          In force for Bulgaria as of 18.01.1978. Published in the Collection of
          International Treaties of Bulgaria, Vol. III, 1995.
        </Typography>
        <Typography sx={{ mt: 3, mb: 3 }}>The Contracting Parties,</Typography>
        <Typography sx={{ mt: 3, mb: 3 }}>
          Recognizing the advantage of standardizing the conditions governing
          the contract for the international carriage of goods by road,
          particularly in respect of the documents used for such carriage and
          the carrier’s liability,
        </Typography>
        <Typography sx={{ mt: 3, mb: 3 }}>Have agreed as follows:</Typography>
        <Typography sx={{ mt: 3 }}>CHAPTER I</Typography>
        <Typography sx={{ mb: 3 }}>SCOPE OF APPLICATION</Typography>
        <Typography sx={{ mt: 3, mb: 3 }}>Article 1</Typography>
        <Typography sx={{ mb: 3, mt: 3 }}>
          This Convention shall apply to every contract for the carriage of
          goods by road in vehicles for reward, when the place of taking over of
          the goods and the place designated for delivery, as specified in the
          contract, are situated in two different countries, of which at least
          one is a contracting country, irrespective of the place of residence
          and the nationality of the parties.
        </Typography>
        <Typography sx={{ mb: 3, mt: 3 }}>
          For the purpose of this Convention, “vehicles” shall mean motor
          vehicles, articulated vehicles, trailers and semi-trailers as defined
          in Article 4 of the Convention on Road Traffic dated 19 September
          1949.
        </Typography>
        <Typography sx={{ mb: 3, mt: 3 }}>
          This Convention shall apply even where the carriage is performed by
          States or by governmental institutions or organizations.
        </Typography>
        <Typography sx={{}}>
          (a) to carriage performed under the terms of any international postal
          convention;
        </Typography>
        <Typography sx={{}}>(b) to carriage of dead bodies;</Typography>
      </Box>
    </Box>
  );
}

export default CMRConvetion;
