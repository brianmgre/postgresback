exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(tbl) {
    // make changes to the table using the tbl object passed as a parameter

    // primary key
    tbl.increments(); // generate and id field and make it autoincfement and the primary key

    // Firebase user id
    tbl
      .string("user_uid", 255)
      .notNullable()
      .unique()
      .references("user_uid")
      .inTable("login");

    // other fields
    tbl.string("first_name", 255).notNullable();

    tbl.string("last_name", 255).notNullable();

    tbl
      .string("email", 128)
      .unique()
      .notNullable();

    tbl.string("company_name", 255).notNullable();

    tbl.string("summary", 500).notNullable();

    exports.up = function (knex, Promise) {
      return knex.schema.createTable("jobs", function (tbl) {
        // make changes to the table using the tbl object passed as a parameter

        // primary key
        tbl.increments(); // generate and id field and make it autoincfement and the primary key

        // other fields
        tbl.string("title", 255).notNullable();

        tbl.string("salary").notNullable();

        tbl.string("top_skills", 128);

        tbl.string("add_skills", 203);

        tbl.string("familiar", 128);

        tbl.string("description", 4000).notNullable();

        tbl.string("requirements", 5000);

        tbl
          .boolean("active")
          .notNullable()
          .defaultTo(true);

        tbl
          .boolean("college_degree")
          .notNullable()
          .defaultTo(false);

        tbl
          .date("created_at")
          .defaultTo(knex.raw("now()"))
          .notNullable();

        //foreign key to users DB
        tbl
          .integer("users_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .notNullable();
      });
    };

    exports.down = function (knex, Promise) {
      return knex.schema.dropTableIfExists("jobs");
    };
