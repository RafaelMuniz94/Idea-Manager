import {
  MigrationInterface,
  QueryRunner,
  Table
} from "typeorm";

export class CreateIdeaTable1600395257061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ideas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          }, //: string;
          { name: "name", type: "varchar", isNullable: false }, //: string;
          { name: "alias", type: "varchar", isNullable: false, isUnique: true }, //:string;
          { name: "purpose", type: "varchar" }, //: string;
          { name: "description", type: "varchar" }, //: string;
          { name: "isDone", type: "bool", default: false }, //: boolean;
          {
            name: "beginDate",
            type: "timestamp with time zone",
            isNullable: true,
          }, //: Date|null;
          {
            name: "endDate",
            type: "timestamp with time zone",
            isNullable: true,
          }, //: Date|null;
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ideas");
  }
}
