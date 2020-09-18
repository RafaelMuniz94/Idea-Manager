import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTableRelationUsersIdeas1600400662910
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_ideas",
        columns: [
          { name: "id_user", type: "uuid", isNullable: false },
          { name: "id_idea", type: "uuid", isNullable: false },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );

    await queryRunner.createForeignKeys("users_ideas", [
      new TableForeignKey({
        name: "UserToIdea",
        columnNames: ["id_user"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
      new TableForeignKey({
        name: "IdeaToUser",
        columnNames: ["id_idea"],
        referencedColumnNames: ["id"],
        referencedTableName: "ideas",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("users_ideas", "UserToIdea");
    await queryRunner.dropForeignKey("users_ideas", "IdeaToUser");

    await queryRunner.dropTable("users_ideas");
  }
}
