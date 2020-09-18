import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableRelationIdeaTech1600398909926
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ideas_techs",
        columns: [
          { name: "id_idea", type: "uuid", isNullable: false },
          { name: "id_tech", type: "uuid", isNullable: false },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "ideas_techs",
      new TableForeignKey({
        name: "IdeatoTech",
        columnNames: ["id_idea"],
        referencedColumnNames: ["id"],
        referencedTableName: "ideas",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "ideas_techs",
      new TableForeignKey({
        name: "TechtoIdea",
        columnNames: ["id_tech"],
        referencedColumnNames: ["id"],
        referencedTableName: "techs",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("ideas_techs", "IdeatoTech");
    await queryRunner.dropForeignKey("ideas_techs", "TechtoIdea");
    await queryRunner.dropTable("ideas_techs");
  }
}
