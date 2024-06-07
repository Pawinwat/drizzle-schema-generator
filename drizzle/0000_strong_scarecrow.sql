-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "geography_columns" (
	"f_table_catalog" "name",
	"f_table_schema" "name",
	"f_table_name" "name",
	"f_geography_column" "name",
	"coord_dimension" integer,
	"srid" integer,
	"type" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "geometry_columns" (
	"f_table_catalog" varchar(256),
	"f_table_schema" "name",
	"f_table_name" "name",
	"f_geometry_column" "name",
	"coord_dimension" integer,
	"srid" integer,
	"type" varchar(30)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "spatial_ref_sys" (
	"srid" integer NOT NULL,
	"auth_name" varchar(256),
	"auth_srid" integer,
	"srtext" varchar(2048),
	"proj4text" varchar(2048)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "country" (
	"country_code" text,
	"name_en" text,
	"admin_division_id" bigint,
	"parent_code" text,
	"geometry" geometry(Geometry,4326),
	"name_th" text,
	"local_code" double precision,
	"is_selected" boolean,
	"is_great_power" boolean,
	"update_by" double precision,
	"update_at" text,
	"delete_by" double precision,
	"delete_at" double precision,
	"create_by" double precision,
	"create_at" double precision,
	"is_active" boolean,
	"flag_id" text,
	"lat" double precision,
	"lng" double precision,
	"full_name_th" double precision,
	"full_name_en" double precision,
	"alpha_three" text,
	"is_border" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "base_grid" (
	"id" integer,
	"geometry" geometry(Polygon,4326)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "emission" (
	"id" bigint,
	"pm10" double precision,
	"pm25" double precision,
	"co" double precision,
	"co2" double precision,
	"bc" double precision,
	"oc" double precision,
	"so2" double precision,
	"nox" double precision,
	"nh3" double precision,
	"ch4" double precision,
	"nmvoc" double precision,
	"n2o" double precision,
	"Date_Time" timestamp,
	"total" double precision,
	"min_total" double precision,
	"max_total" double precision,
	"normalized_total" double precision
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_country_geometry" ON "country" USING gist ("geometry" gist_geometry_ops_2d);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_base_grid_geometry" ON "base_grid" USING gist ("geometry" gist_geometry_ops_2d);
*/