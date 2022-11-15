import { Button, Paper, Typography } from "@mui/material";
import ProductData from "./ProductData";
import { Box, Container } from "@mui/system";
import React from "react";
import SimplePaper from "../../Cards/ProductCard";

const Shops = () => {
  const [status, setStatus] = React.useState("R");
  const [Data, setData] = React.useState(ProductData);
  const [products, setProduct] = React.useState(1);
  const [isUpdated, setIsUpdated] = React.useState("false");
  const styles = {
    border: "none",
    my: 1,
    mx: 1,
    borderRadius: 2,
    color: "Black",
    "&.MuiButton-contained": {
      backgroundColor: "#ec5858",
      boxShadow: "0px 1px 12px  ",
      color: "white",
    },
  };
  const handleSelected = (value) => {
    setProduct(value);
  };

  React.useEffect(() => {
    if (status) {
      const filterData = ProductData.filter((item) => item.type === status);
      setIsUpdated(!isUpdated);
      setData(filterData);
    }
  }, [status]);

  return (
    <div id="Products" style={{ paddingBlock: 40 }}>
      <Container sx={{ marginY: 3 }}>
        <Box align="center">
          <Typography color="#ec5858" fontWeight={550}>
            Best Products
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            Products
          </Typography>
          <Typography color="#656464" sx={{ mt: 2 }}>
            Some of the best Products out there in Agra
          </Typography>
          <Box sx={{ my: 3 }}>
            <Paper
              sx={{
                maxWidth: "fit-content",
                backgroundColor: "rgba(255,228,228,1)",
                borderRadius: 2,
                boxShadow: "none",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Button
                  variant={status === "R" ? "contained" : "text"}
                  sx={{
                    ...styles,

                    "&:hover": {
                      backgroundColor: "#fce5e",
                    },
                  }}
                  onClick={() => setStatus("R")}
                >
                  Newest
                </Button>
                <Button
                  variant={status === "P" ? "contained" : "text"}
                  sx={{
                    ...styles,

                    "&:hover": {
                      backgroundColor: "#fce5e",
                    },
                  }}
                  onClick={() => setStatus("P")}
                >
                  Popular
                </Button>
                <Button
                  variant={status === "A" ? "contained" : "text"}
                  sx={{
                    ...styles,

                    "&:hover": {
                      backgroundColor: "#fce5e",
                    },
                    "&:active": {
                      backgroundColor: "#ec5858",
                    },
                  }}
                  onClick={() => setStatus("A")}
                >
                  Active
                </Button>
              </div>
            </Paper>
          </Box>
          <Box
            display="flex"
            exclusive="true"

            label="shops"
            sx={{
              justifyContent: { lg: "center", xs: "flexStart" },
              overflowX: "scroll",
            }}
          >
            {Data.map((D) => (
              <Box ata-aos="flip-up">
                <SimplePaper
                  isShadow={products === D.id}
                  value={D.id}
                  imgUrl={D.img}
                  name={D.shop_name}
                  name2={D.name}
                  handleChange={handleSelected}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Shops;
