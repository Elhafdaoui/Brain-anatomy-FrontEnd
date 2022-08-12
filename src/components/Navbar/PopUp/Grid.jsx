import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'function',
    headerName: 'Cognitive Function',
    width: '100%',
  }
];


export function Grid({ rows, setCheckedFns }) {
  return (
    <Box sx={{ height: 'auto' }}>
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(ids) => setCheckedFns(ids)}
        hideFooter={true}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "rgba(0,0,0)",
            color: "rgba(255,255,255)",
            align: 'center',
            fontSize: 16
          }
        }}
      />
    </Box>
  );
}
