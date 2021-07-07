import {
  data_vs_place_dimension_columns,
  data_vs_place_dimension_rows,
  place_vs_data_dimension_columns,
  place_vs_data_dimension_rows,
} from "./hisp_json_data_holders";

export function columns_and_rows_table1(
  metadata_dimensions,
  metadata_names,
  rows
) {
  // columns
  const firstColumn = `${metadata_names.ou} vs ${metadata_names.dx}`;
  const columns = place_vs_data_dimension_columns(
    metadata_dimensions,
    metadata_names
  );

  // rows
  const data_rows = place_vs_data_dimension_rows(
    metadata_dimensions,
    metadata_names,
    rows,
    columns
  );

  // append first column head
  columns.splice(0, 0, firstColumn);

  console.log({ columns: columns, rows: data_rows });

  const values_for_columns = columns.map((column_item, index) => {
    return {
      title: column_item,
      field: index,
      editable: "never",
    };
  });

  console.log(values_for_columns);

  const values_for_rows = data_rows.map((data_row_item) => {
    columns.map((column_item, index) => {
      var b = {};
      console.log({ [index]: data_row_item[index] });
    });
  });

  //     console.log(values_for_columns);

  return { columns: columns, rows: data_rows };
  //   });
}

export function columns_and_rows_table2(
  metadata_dimensions,
  metadata_names,
  rows
) {
  // columns
  const firstColumn = `${metadata_names.dx} vs ${metadata_names.ou}`;
  const columns = data_vs_place_dimension_columns(
    metadata_dimensions,
    metadata_names
  );

  // rows
  const data_rows = data_vs_place_dimension_rows(
    metadata_dimensions,
    metadata_names,
    rows,
    columns
  );

  // append first column head
  columns.splice(0, 0, firstColumn);

  console.log({ columns: columns, rows: data_rows });

  return { columns: columns, rows: data_rows };
}
