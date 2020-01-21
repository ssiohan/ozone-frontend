import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

export default function RatingSize() {
  return (
    <Box display="flex" flexDirection="column">
      <Rating name="size-small" defaultValue={2} size="small" />
    </Box>
  );
}
