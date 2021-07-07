// Table 2

export function data_vs_place_dimension_columns(
  metadata_dimensions,
  metadata_names
) {
  const columns = [];

  metadata_dimensions.data_vs_place_dimension.map((data) =>
    columns.push(metadata_names[data])
  );

  return columns;
}

export function data_vs_place_dimension_rows(
  metadata_dimensions,
  metadata_names,
  rows,
  columns
) {
  const name_keys = Object.keys(metadata_names);

  const data_rows = [];

  metadata_dimensions.place_vs_data_dimension.forEach((data) => {
    const single_data_row = [metadata_names[data]];
    columns.forEach((column_item) => {
      const column_item_key = name_keys.find((key) => {
        return metadata_names[key] === column_item;
      });

      const number_row = rows.find(
        (row_item) => row_item[0] === column_item_key && row_item[1] === data
      );

      single_data_row.push(Number(number_row[2]));
    });
    data_rows.push(single_data_row);
  });

  return data_rows;
}

// Table 1

export function place_vs_data_dimension_columns(
  metadata_dimensions,
  metadata_names
) {
  const columns = [];

  metadata_dimensions.place_vs_data_dimension.forEach((data) => {
    console.log(data);
    columns.push(metadata_names[data]);
  });

  return columns;
}

export function place_vs_data_dimension_rows(
  metadata_dimensions,
  metadata_names,
  rows,
  columns
) {
  const name_keys = Object.keys(metadata_names);

  const data_rows = [];

  metadata_dimensions.data_vs_place_dimension.forEach((data) => {
    const single_data_row = [metadata_names[data]];

    columns.forEach((column_item) => {
      const column_item_key = name_keys.find((key) => {
        return metadata_names[key] === column_item;
      });

      // console.log([data, column_item_key]);

      const number_row = rows.find(
        (row_item) => row_item[0] === data && row_item[1] === column_item_key
      );

      console.log(number_row);

      single_data_row.push(Number(number_row[2]));
    });

    data_rows.push(single_data_row);
  });
  // console.log(data_rows);

  return data_rows;
}
