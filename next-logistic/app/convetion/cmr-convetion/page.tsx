import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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
          py: { xs: 10, md: 10 },
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
        <Typography sx={{}}>
          (c) to carriage of furniture in removal operations.
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          The Contracting Parties undertake not to vary, by way of special
          agreements concluded between two or more of them, the terms of this
          Convention, except to exclude from its application their frontier
          traffic or to authorize the use in transport operations entirely
          confined to their territories of consignment notes representing a
          title to the goods.
        </Typography>
        <Typography component="span" variant="body2">
          ....
        </Typography>
        <Box component="div" sx={{ mt: 2, mb: 2 }}>
          <Typography>CHAPTER VIII</Typography>
          <Typography>FINAL PROVISIONS</Typography>
        </Box>
        <Typography sx={{ mt: 2, mb: 2 }}>Article 51</Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          After 31 August 1956, the original of this Convention shall be
          deposited with the Secretary-General of the United Nations, who shall
          transmit certified true copies to each of the States referred to in
          Article 42, paragraphs 1 and 2.
        </Typography>
        <Typography sx={{}}>
          IN WITNESS WHEREOF the undersigned, being duly authorized thereto,
          have signed this Convention.
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Done at Geneva, on 19 May 1956, in a single copy in the English and
          French languages, both texts being equally authentic.
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>PROTOCOL OF SIGNATURE</Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          At the time of signing the Convention on the Contract for the
          International Carriage of Goods by Road, the undersigned, duly
          authorized, have agreed upon the following declaration and
          explanation:
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          This Convention shall not apply to carriage between the United Kingdom
          of Great Britain and Northern Ireland and the Irish Republic.
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Addition to Article 1, paragraph 4: The undersigned undertake to enter
          into negotiations with a view to concluding conventions on the
          contract for the carriage of furniture and on the contract for
          combined transport.
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          IN WITNESS WHEREOF, the undersigned, being duly authorized thereto,
          have signed this Protocol.
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          Done at Geneva, on 19 May 1956, in a single copy in the English and
          French languages, both texts being equally authentic.
        </Typography>
        <Divider sx={{ width: "200px", mt: 5, mb: 2 }} />
        <Typography sx={{ mt: 2, mb: 2 }}>
          According to Decree No. 1143 of the State Council of 29.07.1977,
          published in the State Gazette, issue 61 of 1977, the Convention on
          the Contract for the International Carriage of Goods by Road was
          ratified by Bulgaria with the following reservation:
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>
          “The People’s Republic of Bulgaria does not consider itself bound by
          Article 47, which provides for compulsory jurisdiction of the
          International Court of Justice.”
        </Typography>
        <Divider sx={{ width: "200px", mt: 5, mb: 2 }} />
        <Typography sx={{ mt: 2, mb: 2 }}>
          The reservation was withdrawn by Act of the National Assembly of
          12.01.1994, published in the State Gazette, issue 8 of 1994.
        </Typography>
      </Box>
    </Box>
  );
}

export default CMRConvetion;
