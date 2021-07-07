export function metadata_names_destructuring(hisp_json) {
  const {
    metaData: {
      names: {
        hTUspcBc4Yn,
        EzE8xZ31zfC,
        E31SemmmFGb,
        dx,
        ou,
        R7TPl8q81Ft,
        // hTUspcBc4Yn: HIV_PREVALENCE,
        // EzE8xZ31zfC: MALARIA_PREVALENCE,
        // E31SemmmFGb: TB_PREVALENCE,
        // dx,
        // ou,
        // R7TPl8q81Ft: INSECT_DISTRICT,
      },
    },
  } = hisp_json;

  return {
    hTUspcBc4Yn,
    EzE8xZ31zfC,
    E31SemmmFGb,
    dx,
    ou,
    R7TPl8q81Ft,
  };
}

export function metadata_dimensions_destructuring(hisp_json) {
  const {
    metaData: {
      dimensions: { dx: data_vs_place_dimension, ou: place_vs_data_dimension },
    },
  } = hisp_json;

  return { data_vs_place_dimension, place_vs_data_dimension };
}

export function rows_destructuring(hisp_json) {
  const { rows } = hisp_json;
  // console.log(rows);
  return rows;
}
