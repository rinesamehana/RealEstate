using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class finhal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Qytetet_Shtetet_ShtetiId",
                table: "Qytetet");

            migrationBuilder.AlterColumn<Guid>(
                name: "ShtetiId",
                table: "Qytetet",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Qytetet_Shtetet_ShtetiId",
                table: "Qytetet",
                column: "ShtetiId",
                principalTable: "Shtetet",
                principalColumn: "ShtetiId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Qytetet_Shtetet_ShtetiId",
                table: "Qytetet");

            migrationBuilder.AlterColumn<Guid>(
                name: "ShtetiId",
                table: "Qytetet",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Qytetet_Shtetet_ShtetiId",
                table: "Qytetet",
                column: "ShtetiId",
                principalTable: "Shtetet",
                principalColumn: "ShtetiId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
