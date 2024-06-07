import { pgTable, integer, text, varchar, index, bigint, geometry, doublePrecision, boolean, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const geography_columns = pgTable("geography_columns", {
	// TODO: failed to parse database type 'name'
	f_table_catalog: unknown("f_table_catalog"),
	// TODO: failed to parse database type 'name'
	f_table_schema: unknown("f_table_schema"),
	// TODO: failed to parse database type 'name'
	f_table_name: unknown("f_table_name"),
	// TODO: failed to parse database type 'name'
	f_geography_column: unknown("f_geography_column"),
	coord_dimension: integer("coord_dimension"),
	srid: integer("srid"),
	type: text("type"),
});

export const geometry_columns = pgTable("geometry_columns", {
	f_table_catalog: varchar("f_table_catalog", { length: 256 }),
	// TODO: failed to parse database type 'name'
	f_table_schema: unknown("f_table_schema"),
	// TODO: failed to parse database type 'name'
	f_table_name: unknown("f_table_name"),
	// TODO: failed to parse database type 'name'
	f_geometry_column: unknown("f_geometry_column"),
	coord_dimension: integer("coord_dimension"),
	srid: integer("srid"),
	type: varchar("type", { length: 30 }),
});

export const spatial_ref_sys = pgTable("spatial_ref_sys", {
	srid: integer("srid").notNull(),
	auth_name: varchar("auth_name", { length: 256 }),
	auth_srid: integer("auth_srid"),
	srtext: varchar("srtext", { length: 2048 }),
	proj4text: varchar("proj4text", { length: 2048 }),
});

export const country = pgTable("country", {
	country_code: text("country_code"),
	name_en: text("name_en"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	admin_division_id: bigint("admin_division_id", { mode: "number" }),
	parent_code: text("parent_code"),
	geometry: geometry("geometry", { type: "geometry", srid: 4326 }),
	name_th: text("name_th"),
	local_code: doublePrecision("local_code"),
	is_selected: boolean("is_selected"),
	is_great_power: boolean("is_great_power"),
	update_by: doublePrecision("update_by"),
	update_at: text("update_at"),
	delete_by: doublePrecision("delete_by"),
	delete_at: doublePrecision("delete_at"),
	create_by: doublePrecision("create_by"),
	create_at: doublePrecision("create_at"),
	is_active: boolean("is_active"),
	flag_id: text("flag_id"),
	lat: doublePrecision("lat"),
	lng: doublePrecision("lng"),
	full_name_th: doublePrecision("full_name_th"),
	full_name_en: doublePrecision("full_name_en"),
	alpha_three: text("alpha_three"),
	is_border: boolean("is_border"),
},
(table) => {
	return {
		idx_country_geometry: index("idx_country_geometry").using("gist", table.geometry),
	}
});

export const base_grid = pgTable("base_grid", {
	id: integer("id"),
	geometry: geometry("geometry", { type: "polygon", srid: 4326 }),
},
(table) => {
	return {
		idx_base_grid_geometry: index("idx_base_grid_geometry").using("gist", table.geometry),
	}
});

export const emission = pgTable("emission", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }),
	pm10: doublePrecision("pm10"),
	pm25: doublePrecision("pm25"),
	co: doublePrecision("co"),
	co2: doublePrecision("co2"),
	bc: doublePrecision("bc"),
	oc: doublePrecision("oc"),
	so2: doublePrecision("so2"),
	nox: doublePrecision("nox"),
	nh3: doublePrecision("nh3"),
	ch4: doublePrecision("ch4"),
	nmvoc: doublePrecision("nmvoc"),
	n2o: doublePrecision("n2o"),
	Date_Time: timestamp("Date_Time", { mode: 'string' }),
	total: doublePrecision("total"),
	min_total: doublePrecision("min_total"),
	max_total: doublePrecision("max_total"),
	normalized_total: doublePrecision("normalized_total"),
});