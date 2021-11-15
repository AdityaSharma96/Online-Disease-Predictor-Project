// core
import { DataGrid } from "@material-ui/data-grid";

// navigation
import { useHistory } from "react-router-dom";

// cookies
import { read_cookie } from "sfcookies";

export default function MyTable({ name, arr }) {
  // navigation
  const history = useHistory();

  const cols = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "result",
      headerName: "Result",
      width: 250,
    },
  ];

  const rows = arr.map((data, index) => ({
    id: index + 1,
    date: data.date,
    result: data.result.Prediction,
  }));

  return (
    <DataGrid
      rows={rows}
      columns={cols}
      pageSize={10}
      onRowClick={(item) =>
        history.push(`${name}/records/${read_cookie("uid")}/${item.id}`, {
          name: name,
        })
      }
    />
  );
}
