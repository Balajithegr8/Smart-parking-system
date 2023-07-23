import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useGetProductsQuery } from "state/api";
import { Header } from "components";

// Product
const Product = ({
  _id,
  name,
  description,
  price,
  rating,
}) => {
  // theme
  const theme = useTheme();
  // is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      {/* Content */}
      <CardContent>
        
        {/* Name */}
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        {/* Price */}
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          Fee Paid : ${Number(price).toFixed(2)}
        </Typography>

        {/* Rating */}
        <Rating value={rating} readOnly />

        {/* Description */}
        <Typography variant="body2">{description}</Typography>
      </CardContent>

      {/* See More/See Less */}
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See Less" : "See More"}
        </Button>
      </CardActions>

      {/* More Info */}
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
};

// Products
const Products = () => {
  // get data
  const { data, isLoading } = useGetProductsQuery();
  // is medium/large desktop
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="FEEDBACK" subtitle="See the list of Feedbacks." />

      {/* Content */}
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {/* Loop over each product */}
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
       
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
          
              />
            )
          )}
        </Box>
      ) : (
        // Loader
        <Typography variant="h5" mt="20%" textAlign="center">
          Loading...
        </Typography>
      )}
    </Box>
  );
};

export default Products;
